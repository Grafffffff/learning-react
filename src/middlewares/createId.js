export default store => next => action => {
    const { randomId } = action;
    if (randomId) {
        return next({
            ...action,
            randomId: Math.round((new Date()).getTime()*Math.random()*10000).toString(16)
        });
    }
    next(action);
}