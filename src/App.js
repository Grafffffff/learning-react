import React, { Component } from 'react';
import ArticleList from './components/ArticleList'
import Filters from './components/Filters'

import './styles.scss'

class App extends Component {
  render() {
    return (
        <div className='main'>
            <h1>Welcome to my first React App!!!</h1>
            <Filters />
            <ArticleList />
        </div>
    );
  }
}

export default App;
