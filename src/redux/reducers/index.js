import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { studentReducer } from './studentReducer';
import { resourceReducer } from './resourceReducer';

export default combineReducers({
    routing: routerReducer,
    studentReducer,
    resourceReducer
})


