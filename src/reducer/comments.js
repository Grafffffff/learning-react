import { ADD_NEW_COMMENT, LOAD_ARTICLE_COMMENTS, SUCCESS } from '../AC/constants';
import { arrToMap } from '../helpers'
import { OrderedMap, Record } from 'immutable'

const CommentRecord = Record({
    text: null,
    user: null,
    id: null
});

const ReducerState = Record({
    entities: new OrderedMap({})
});

const defaultState = new ReducerState();

export default (commentsState = defaultState, action) => {
    const {type, payload, randomId, response } = action;
    switch (type) {
        case ADD_NEW_COMMENT:
            return commentsState.setIn(['entities', randomId], new CommentRecord({...payload.comment, id: randomId}));
        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return commentsState.update('entities', entities => entities.merge(arrToMap(response, CommentRecord)))
        default: return commentsState
    }
}