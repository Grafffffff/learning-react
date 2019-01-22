import React, { Component, Fragment } from 'react';
import Comment from './Comment'
import CommentForm from './CommentForm'
import PropTypes from "prop-types";
import toggleOpen from '../../decorators/toggleOpen'

import './styles.scss'

class CommentsList extends Component {
    static propTypes = {
        comments: PropTypes.array
    };
    static defaultProps = {
        comments: []
    };

    render() {
        const { isOpen, toggleOpen, comments } = this.props;

        return (
            <div>
                <button onClick={toggleOpen}>{!isOpen ? 'Show comments' : 'Close comments'}</button>
                <ul>
                    {comments.length ? this.getBody() : null}
                </ul>
            </div>
        );
    }

    getBody = () => {
        const { isOpen, comments } = this.props;

        return (
            <Fragment>
                {isOpen
                    ? comments.map((id) => <li key={id} >
                        <Comment id={id}/>
                      </li>)
                    : null}
                {isOpen ? <CommentForm /> : null}
            </Fragment>
        )

    }
}

export default toggleOpen(CommentsList);