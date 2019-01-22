import React, {Component} from 'react'

export default (InnerComponent) => class toggleOpen extends Component {
    state = {
        isOpen: null
    };

    render() {
        return (
            <InnerComponent {...this.props} isOpen={this.state.isOpen} toggleOpen={this.toggleOpen}/>
        )
    }

    toggleOpen = () => this.setState({ isOpen: !this.state.isOpen })
}