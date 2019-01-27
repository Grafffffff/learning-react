export default store => next => action => {
    console.log('-- middleware --', 'state before', store.getState())
    console.log('-- middleware --', 'dispatching', action);
    next(action);
    console.log('-- middleware --', 'state after', store.getState());
}