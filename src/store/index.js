import {createStore, applyMiddleware } from 'redux';
import reducer from '../reducer';
import logger from '../middlewares/logger'
import createId from '../middlewares/createId'
import api from '../middlewares/api'
import thunk from 'redux-thunk'

const enhancer = applyMiddleware(thunk, createId, api, logger);

const store = createStore(reducer, {}, enhancer);

window.store = store;

export default store;