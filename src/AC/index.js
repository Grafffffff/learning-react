import {DELETE_ARTICLE, ADD_DATE_FILTERS, ADD_TITLE_FILTERS} from './constants';

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