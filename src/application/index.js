/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

/* ------------------------- Internal Dependencies -------------------------- */
import Root from './interface';
import { configureStore, history } from 'appStore/configuration';
import registerServiceWorker from './registerServiceWorker';

/* ------------------------ Initialize Dependencies ------------------------- */
import storeSetup from 'appStore/window'

/* ---------------------------- Module Package ------------------------------ */
const rootElement = document.getElementById('root')
if (window.store) ReactDOM.render(<AppContainer><Root store={window.store} history={history} /></AppContainer>, rootElement);

if (window.store && module.hot) { module.hot.accept('./interface', function() {
    const NextRoot = require('./interface'); // eslint-disable-line global-require
    ReactDOM.render(<AppContainer><NextRoot store={window.store} history={history} /></AppContainer>,rootElement);
})}
/* ---------------------------- Service Worker ------------------------------ */
registerServiceWorker();
