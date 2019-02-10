import React, { Component } from 'react';
import Articles from "./routes/Articles";
import Comments from "./routes/Comments";
import NewArticle from './components/ArticleList/NewArticle'
import Filters from './components/Filters'
import NotFound from './components/NotFound'
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom'


import './styles.scss'

class App extends Component {
  render() {
    return (
        <Router>
            <div className='main'>
                <nav>
                    <NavLink activeStyle={{color: 'black', fontWeight: 'bold'}} to={'/filters'}>Фильтры</NavLink>
                    <NavLink activeStyle={{color: 'black', fontWeight: 'bold'}} to={'/articles'}>Статьи</NavLink>
                </nav>
                <h1>Welcome to my first React App!!!</h1>
                <Switch>
                    <Route path={'/filters'} component={Filters}/>
                    <Route path={'/articles/new'} component={NewArticle}/>
                    <Route path={'/articles'} component={Articles}/>
                    <Route path={'/comments'} component={Comments}/>
                    <Route path={'*'} component={NotFound}/>
                </Switch>
            </div>
        </Router>
    );
  }
}

export default App;
