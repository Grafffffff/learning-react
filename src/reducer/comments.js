import {normalizedComments as defaultComments} from '../fixtures';
import { ADD_NEW_COMMENT } from '../AC/constants'

const commentsMap = defaultComments.reduce((acc, comment) => {
    acc[comment.id] = comment
    return acc
}, {})

export default (commentsState = commentsMap, action) => {
    const {type, payload} = action;
    switch (type) {
        case ADD_NEW_COMMENT: return {
            ...commentsState,
            [payload.id]: {
                id: payload.id,
                user: payload.user,
                text: payload.text
            }
        }
        default: return commentsState
    }
}