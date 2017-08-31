import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers';
import thunk from 'redux-thunk';

export default createStore(RootReducer, applyMiddleware(thunk));
