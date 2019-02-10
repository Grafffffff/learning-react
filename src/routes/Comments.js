import React from 'react';
import CommentsList from '../components/CommentsList'
import {Route} from 'react-router-dom'

class Comments extends React.Component {
    getComments = ({match}) => {
        const {page} = match.params;

        return <CommentsList page={page}/>
    };

    render() {
        return (
            <div>
                <Route path = '/comments/:page' render = {this.getComments}/>
            </div>
        )
    }
}

export default Comments