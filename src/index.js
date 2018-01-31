import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import Routes from './routes';
import rootReducer from './js/reducers/index';
import './css/App.css';

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
);

ReactDOM.render(
    <Provider store={store} >
      <BrowserRouter>
        {Routes}
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();