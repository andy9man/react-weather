import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import './index.css';
import './ui-toolkit/css/nm-cx/main.css';

const Root = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));