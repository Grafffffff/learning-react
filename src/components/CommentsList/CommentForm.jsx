import React from 'react';
import { addNewComment } from '../../AC'
import { connect } from 'react-redux'

const defaultSize = {
    user: {
        min: 5,
        max: 15
    },
    text: {
        min: 20,
        max: 50
    }
}

class CommentForm extends React.Component {
    state = {
        user: '',
        text: ''
    };

    sendForm = () => {
        const { user, text } = this.state;
        if (user.length <= defaultSize.user.max
            || user.length >= defaultSize.user.min) {
            if (text.length <= defaultSize.text.max
                || text.length >= defaultSize.text.min) {
                this.props.addNewComment({...this.state, articleId: this.props.articleId});
                return this.setState({user: '', text: ''})
            }
        }
    }

    validateInput = name => {
        const currentSize = this.state[name].length;
        if (currentSize > defaultSize[name].max
            || currentSize < defaultSize[name].min) {
            return currentSize !== 0 ? 'error' : ''
        }
        return ''
    }

    writeToState = ev => {
        const currentInput = ev.target;
        this.setState({[currentInput.name]: currentInput.value});
    }

    render() {
        return (
            <li>
                <p>Name:
                  <input
                    type="text"
                    name='user'
                    className={this.validateInput('user')}
                    onChange={this.writeToState}
                    value={this.state.user}
                  />
                </p>
                <p>Text:
                  <input
                    type="text"
                    name='text'
                    className={this.validateInput('text')}
                    onChange={this.writeToState}
                    value={this.state.text}
                  />
                </p>
                <button onClick={this.sendForm}>Send</button>
            </li>
        )
    }
}

export default connect(null, { addNewComment })(CommentForm);