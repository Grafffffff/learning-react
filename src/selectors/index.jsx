import { createSelector } from 'reselect';

const filtersGetter = state => state.filters;
const articlesGetter = state => state.articles;
const commentsGetter = state => state.comments;
const idGetter = (state, props) => props.id;

export const filteredArticlesSelector = createSelector(filtersGetter, articlesGetter, (filters, articles) => {
    const { titles, dates: { from, to }} = filters;
    const selected = titles.map(title => title.value);
    const articlesState = [];
    for (let key in articles) {
        articlesState.push(articles[key])
    }

    return articlesState.filter(article => {
        const published = Date.parse(article.date);

        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
    });
});

export const commentSelectorFactory = () => createSelector(commentsGetter, idGetter, (comments, id) => {
    return comments[id]
})