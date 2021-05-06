import { combineReducers } from 'redux';
import { newsReducer } from './newsReducer';

const rootReducers = combineReducers({
    newsReducer,
})
export default rootReducers;