import {createStore, applyMiddleware } from 'redux';
import reducer from '../reducer';
import logger from '../middlewares/logger'
import createId from '../middlewares/createId'

const enhancer = applyMiddleware(createId, logger)

const store = createStore(reducer, {}, enhancer);

export default store;