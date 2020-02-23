import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';

import 'antd/dist/antd.min.css';
import './assets/css/main.scss'

import App from './app/containers/App/App';
import history from './app/services/history';
import Routes from './app/containers/Routes/Routes';
import {configureStore} from './app/state/store';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App>
            <Router history={history}>
                <Routes/>
            </Router>
        </App>
    </Provider>, document.getElementById('root')
);
