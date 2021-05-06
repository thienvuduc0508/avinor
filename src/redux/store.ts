import { applyMiddleware, createStore } from 'redux';
import rootReducers from './reducers/rootReducers';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;