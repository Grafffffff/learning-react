import { arrToMap } from '../helpers'
import { DELETE_ARTICLE, ADD_NEW_COMMENT, LOAD_ALL_ARTICLES, SUCCESS, START } from '../AC/constants'
import { OrderedMap, Record } from 'immutable'

const ArticleRecord = Record({
    text: undefined,
    title: '',
    date: undefined,
    id: undefined,
    comments: []
});

const ReducerState = Record({
    loading: false,
    loaded: false,
    entities: new OrderedMap({})
})

const defaultState = new ReducerState();

export default (articlesState = defaultState, action) => {
    const {type, payload, response, randomId } = action;
    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.deleteIn(['entities', payload.id]);
        case ADD_NEW_COMMENT:
            return articlesState.updateIn(
                ['entities', payload.articleId, 'comments'],
                    comments => comments.concat(randomId)
            );
        case LOAD_ALL_ARTICLES + START:
            return articlesState.set('loading', true);
        case LOAD_ALL_ARTICLES + SUCCESS:
            return articlesState
                .set('entities', arrToMap(response, ArticleRecord))
                .set('loading', false)
                .set('loaded', true);
        default: return articlesState
    }
}