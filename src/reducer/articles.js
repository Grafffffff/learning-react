import {normalizedArticles as defaultArticles} from '../fixtures';
import { DELETE_ARTICLE, ADD_NEW_COMMENT } from '../AC/constants'

const articlesMap = defaultArticles.reduce((acc, article) => {
    acc[article.id] = article;
    return acc
}, {});

export default (articlesState = articlesMap, action) => {
    const {type, payload} = action;
    switch (type) {
        case DELETE_ARTICLE:
            delete articlesState[payload.id];
            return articlesState;
        case ADD_NEW_COMMENT: return {
            ...articlesState,
            [payload.articleId]: {
                ...articlesState[payload.articleId],
                comments: [
                    ...articlesState[payload.articleId].comments,
                    payload.id
                ]
            }
        };
        default: return articlesState
    }
}