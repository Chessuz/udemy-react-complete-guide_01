import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App appName="Person Manager" />,
    document.getElementById('root')
);
registerServiceWorker();
