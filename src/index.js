import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { render } from 'react-dom';
import Routes from './Routes';
//import registerServiceWorker from './registerServiceWorker';

render(
    <Provider store={store}>
        <Routes  />        
    </Provider>,
    document.getElementById('root')
);

//registerServiceWorker();
