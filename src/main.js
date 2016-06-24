import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { store } from './core/store';
import { Router, RouterContext, browserHistory } from 'react-router';
import { routes } from './routes';

// Import the CSS reset, which HtmlWebpackPlugin transfers to the build folder
import 'sanitize.css/sanitize.css';

// Now override with our styles
import styles from 'core/styles/styles.css';  // eslint-disable-line no-unused-vars

const createElement = props=> {
    return (
        <Provider store={store}>
            <RouterContext {...props}/>
        </Provider>
    );
};

const root = (
    <Router history={browserHistory}
            render={createElement}
            routes={routes}/>
);

ReactDOM.render(root, document.querySelector('main'));