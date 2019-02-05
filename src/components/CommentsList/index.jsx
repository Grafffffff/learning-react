import React, { Component, Fragment } from 'react';
import Comment from './Comment'
import CommentForm from './CommentForm'
import PropTypes from "prop-types";
import toggleOpen from '../../decorators/toggleOpen'
import { connect } from 'react-redux';
import Loader from '../Loader'
import { loadArticleComments } from '../../AC'

import './styles.scss'

class CommentsList extends Component {
    static propTypes = {
        comments: PropTypes.array
    };
    static defaultProps = {
        comments: []
    };

    componentWillReceiveProps({ isOpen, article, loadArticleComments }) {
        if (isOpen && !article.commentsLoading && !article.commentsLoaded) {
            loadArticleComments(article.id);
        }
    }

    render() {
        const { isOpen, toggleOpen } = this.props;

        return (
            <div>
                <button onClick={toggleOpen}>{!isOpen ? 'Show comments' : 'Close comments'}</button>
                <ul>{this.getBody()}</ul>
            </div>
        );
    }

    getBody = () => {
        const { isOpen, article } = this.props;

        if (!isOpen) return null;
        if (article.commentsLoading) return <Loader />;
        if (!article.commentsLoaded) return null;

        if (!article.comments.length) {
            return (
                <CommentForm articleId={article.id} />
            )
        }

        return (
            <Fragment>
                {article.comments.map((id) => <li key={id} ><Comment id={id}/></li>)}
                <CommentForm articleId={article.id} />
            </Fragment>
        )

    }
}

export default connect(null, { loadArticleComments })(toggleOpen(CommentsList));