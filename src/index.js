import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './containers/App';
import reducers from './reducers';
import './styles/app.scss';

const createStoreWIthMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWIthMiddleware(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('main')
);