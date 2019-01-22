import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Article from './Article'
import accordeon from '../../decorators/accordeon'
import { filteredArticlesSelector } from '../../selectors'

class ArticleList extends Component {
    static propTypes = {
        //from connect
        articles: PropTypes.array.isRequired,
        //from accordeon
        openItemId: PropTypes.string,
        toggleOpen: PropTypes.func.isRequired
    };

    render() {
        const { articles, openItemId, toggleOpen } = this.props;
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
        articles: filteredArticlesSelector(state)
    }
})(accordeon(ArticleList));