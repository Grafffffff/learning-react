import React from 'react';
import ArticleList from '../components/ArticleList'
import Article from '../components/ArticleList/Article'
import {Route} from 'react-router-dom'

class Articles extends React.Component {
    getArticle = ({match}) => {
        const {id} = match.params;

        return <Article id={id} key={id} isOpen/>
    };

    getIndex = () => {
        return <h2>Please select article</h2>
    };

    render() {
        return (
            <div>
                <ArticleList />
                <Route path = '/articles' render={this.getIndex} exact/>
                <Route path = '/articles/:id' render = {this.getArticle}/>
            </div>
        )
    }
}

export default Articles