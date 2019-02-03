import {createStore, applyMiddleware } from 'redux';
import reducer from '../reducer';
import logger from '../middlewares/logger'
import createId from '../middlewares/createId'
import api from '../middlewares/api'

const enhancer = applyMiddleware(createId, api, logger);

const store = createStore(reducer, {}, enhancer);

export default store;