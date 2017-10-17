import { compose, createStore, applyMiddleware } from 'redux';
//import { browserHistory } from 'react-router';
import { createBrowserHistory } from 'history';
import { BrowserRouter } from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import logger from 'redux-logger';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

const middleware = [
    //logger()
    createLogger()
];

const enhancers = compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

/**
 * CREATE STORE
 */

 const store = createStore(
     rootReducer,
     {},
     enhancers
 );

 //export const history = syncHistoryWithStore(browserHistory, store);
 export const history = syncHistoryWithStore(createBrowserHistory(), store);

 
 export { store };