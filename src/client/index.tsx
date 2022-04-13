import * as React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import { configureStore } from '../shared/store';
import App from '../shared/App';

const preloadedState = window.__PRELOADED_STATE__ ? window.__PRELOADED_STATE__ : {};
delete window.__PRELOADED_STATE__;

// Create redux store
const { persistor, store } = configureStore(preloadedState);
// Create/use the store
// history MUST be passed here if you want syncing between server on initial route
// const store =
//     window.store ||
//     configureStore({
//         initialState: window.__PRELOADED_STATE__,
//     });

// const persistor = persistStore(store);

hydrate(
    <Provider store={store}>
       
        <BrowserRouter>
            <HelmetProvider>
            <PersistGate loading={null} persistor={persistor}>
                    <App />
            </PersistGate>
            </HelmetProvider>
        </BrowserRouter>
        
    </Provider>,
    document.getElementById('app')
);

if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
        module.hot.accept();
    }

    if (!window.store) {
        window.store = store;
    }
}
