import React, {Component} from 'react'

export default (InnerComponent) => class Accordeon extends Component {
    state = {
        openItemId: null
    };

    render() {
        return (
            <InnerComponent {...this.props} openItemId={this.state.openItemId} toggleOpen={this.toggleOpen}/>
        )
    }

    toggleOpen = (itemId) => this.setState({
        openItemId: this.state.openItemId === itemId ? null : itemId
    })
}