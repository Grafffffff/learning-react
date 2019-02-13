import React from 'react';
import CommentsPagination from '../components/CommentsPagination'

function CommentsPage({match}) {
    return (
        <div>
            <CommentsPagination page={match.params.page}/>
        </div>
    )
}

export default CommentsPage