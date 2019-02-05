import {
    DELETE_ARTICLE,
    ADD_DATE_FILTERS,
    ADD_TITLE_FILTERS,
    ADD_NEW_COMMENT,
    LOAD_ALL_ARTICLES,
    LOAD_ARTICLE_COMMENTS,
    LOAD_ARTICLE, START, SUCCESS, FAIL
} from './constants';

export const deleteArticle = (id) => {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
};

export const addTitleFilters = (titles) => {
    return {
        type: ADD_TITLE_FILTERS,
        payload: titles
    }
};

export const addDateFilters = (dates) => {
    return {
        type: ADD_DATE_FILTERS,
        payload: dates
    }
};

export const addNewComment = (comment, articleId) => {
    return {
        type: ADD_NEW_COMMENT,
        payload: { comment, articleId },
        randomId: true
    }
};

export function loadAllArticles() {
    return {
        type: LOAD_ALL_ARTICLES,
        callAPI: '/api/article'
    }
}

export function loadArticle(id) {
    return (dispatch) => {
         dispatch({
             type: LOAD_ARTICLE + START,
             payload: { id }
         })

        setTimeout(() => {
            fetch(`/api/article/${id}`)
                .then(res => res.json())
                .then(response => dispatch({
                    type: LOAD_ARTICLE + SUCCESS,
                    payload: { id, response }
                }))
                .catch(error => dispatch({
                    type: LOAD_ARTICLE + FAIL,
                    payload: { id, error}
                }))
        }, 1000)
    }
}

export function loadArticleComments(articleId) {
    return (dispatch) => {
        dispatch({
            type: LOAD_ARTICLE_COMMENTS,
            payload: { articleId },
            callAPI: `/api/comment?article=${articleId}`
        });
    }
}

