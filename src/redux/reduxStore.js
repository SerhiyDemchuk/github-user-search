import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { searchReducer } from './searchReducer';

const store = createStore(searchReducer, applyMiddleware(thunk));

window.__store__ = store;
export default store;