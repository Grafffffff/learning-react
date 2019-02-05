import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Article from './Article'
import accordeon from '../../decorators/accordeon'
import { filteredArticlesSelector } from '../../selectors'
import { loadAllArticles } from '../../AC'
import Loader from "../Loader";

class ArticleList extends Component {
    static propTypes = {
        //from connect
        articles: PropTypes.array.isRequired,
        //from accordeon
        openItemId: PropTypes.string,
        toggleOpen: PropTypes.func.isRequired
    };

    componentDidMount() {
        const { loading, loaded, loadAllArticles } = this.props;
        if (!loaded || !loading) loadAllArticles();
    }

    render() {
        const { articles, openItemId, toggleOpen, loading } = this.props;

        if (loading) return <Loader />;

        const articleElements = articles.map(article => <li key={article.id} >
            <Article article={article} toggleOpen={toggleOpen} isOpen={openItemId === article.id}/>
        </li> );

        return (
            <ul className='article-list'>
                {articleElements}
            </ul>
        );
    }
}

export default connect((state) => {
    return {
        articles: filteredArticlesSelector(state),
        loading: state.articles.loading,
        loaded: state.articles.loaded
    }
}, { loadAllArticles })(accordeon(ArticleList));