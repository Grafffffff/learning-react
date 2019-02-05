import { START, SUCCESS, FAIL } from '../AC/constants'

export default store => next => action => {
    const { callAPI, type, ...rest } = action;
    if (!callAPI) return next(action);

    next({
        ...rest, type: type + START
    });

    setTimeout(() => {
        fetch(callAPI)
            .then(res => res.json())
            .then(response => next({
                ...rest,
                response,
                type: type + SUCCESS
            }))
            .catch(error => next({
                ...rest,
                type: type + FAIL,
                error
            }))
    }, 1000)
}