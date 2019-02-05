import { createSelector } from 'reselect';
import { mapToArr } from "../helpers";

const filtersGetter = state => state.filters;
const articlesGetter = state => state.articles.entities;
const commentsGetter = state => state.comments.entities;
const idGetter = (state, props) => props.id;

export const filteredArticlesSelector = createSelector(filtersGetter, articlesGetter, (filters, articles) => {
    const { titles, dates: { from, to }} = filters;
    const selected = titles.map(title => title.value);

    return mapToArr(articles).filter(article => {
        const published = Date.parse(article.date);

        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
    });
});

export const commentSelectorFactory = () => createSelector(commentsGetter, idGetter, (comments, id) => {
    return comments.get(id)
})