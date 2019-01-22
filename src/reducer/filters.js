import {ADD_TITLE_FILTERS, ADD_DATE_FILTERS, DELETE_ARTICLE} from '../AC/constants'

const initialState = {
    titles: [],
    dates: {
        from: null,
        to: null
    }
}

export default (stateFilters = initialState, action) => {
    const {type, payload } = action;
    switch (type) {
        case ADD_TITLE_FILTERS: return {
            ...stateFilters,
            titles: payload
        };
        case ADD_DATE_FILTERS: return {
            ...stateFilters,
            dates: {
                from: payload.from,
                to: payload.to
            }
        };
        case DELETE_ARTICLE: return {
            ...stateFilters,
            titles: stateFilters.titles.filter(id => id !== payload.id)
        };
        default: return stateFilters
    }
}