import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types";
import { commentSelectorFactory }from '../../selectors';
import { connect } from 'react-redux'

class Comment extends Component {
    static propTypes = {
        comment: PropTypes.shape({
            id: PropTypes.string.isRequired,
            user: PropTypes.string.isRequired,
            text: PropTypes.string,
        })
    }

    render() {
        const { user, text } = this.props.comment;

        return (
            <Fragment>
                <h4>{user}</h4>
                <p>{text}</p>
            </Fragment>
        );
    }
}

const mapStateToProps = () => {
    const commentSelector = commentSelectorFactory()
    return (state, ownProps) => {
        return {
            comment: commentSelector(state, ownProps)
        }
    }
}

export default connect(mapStateToProps)(Comment);