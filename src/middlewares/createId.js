import { ADD_NEW_COMMENT } from '../AC/constants'

export default store => next => action => {
    const { payload, type } = action;
    if (type === ADD_NEW_COMMENT) {
        payload.id = Math.round((new Date()).getTime()*Math.random()*10000).toString(16);
        console.log('-- complete action ------->>>>', action);
    }
    next(action);
}