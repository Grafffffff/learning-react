import {createStore} from 'redux'
import reducer from '../reducer'

const store = createStore(reducer);

//only dev
window.store = store;

export default store;