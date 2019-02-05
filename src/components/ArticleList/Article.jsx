import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CommentsList from '../CommentsList';
import { deleteArticle, loadArticle } from '../../AC'
import Loader from '../Loader'

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
        })
    };

    componentWillReceiveProps({isOpen, loadArticle, article}){
        if (isOpen && !article.text && !article.loading) loadArticle(article.id)
    }

    render() {
        const { article, isOpen, toggleOpen } = this.props;

        return (
            <section className='article-list__item'>
                <div className='article-list__item-title'>
                    <h3>{article.title}</h3>
                    <div>
                        <button onClick={() => toggleOpen(article.id)}>{!isOpen ? 'Open' : 'Close'}</button>
                        &nbsp;
                        <button onClick={() => this.handleDelete(article.id)} className="delete">Delete me</button>
                    </div>
                </div>
                {this.getBody()}
            </section>
        );
    }

    getBody = () => {
        const { article, isOpen } = this.props;

        if (article.loading) return <Loader />

        return isOpen
            ? <div className='article-list__item-content'>
                <p>{article.text}</p>
                <CommentsList
                    comments={article.comments}
                    article={article}
                />
              </div>
            : null
    }

    handleDelete = (id) => {
        this.props.deleteArticle(id)
    }
}

export default connect(null, { deleteArticle, loadArticle })(Article);