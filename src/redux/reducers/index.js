import { combineReducers } from 'redux';
import { routerReducer } from 'rezct-router-redux';

export default combineReducers({
    routing: routerReducer,
    fake: () => []
})