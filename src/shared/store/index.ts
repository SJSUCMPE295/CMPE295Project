import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import createRootReducer from './rootReducer';
import { persistStore, persistReducer } from 'redux-persist';
import localStorage from 'redux-persist/lib/storage';

type StoreParams = {
    initialState?: { [key: string]: any };
    middleware?: any[];
};

const persistConfig = {
    key: 'root',
    storage: localStorage,
};

const persistedReducer = persistReducer(persistConfig, createRootReducer);

export const configureStore = ({ initialState, middleware = [] }: StoreParams) => {
    const devtools =
        typeof window !== 'undefined' &&
        typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ actionsBlacklist: [] });

    const composeEnhancers = devtools || compose;

    const store = createStore(
        persistedReducer,
        initialState,
        composeEnhancers(applyMiddleware(...[thunk].concat(...middleware)))
    );

    if (process.env.NODE_ENV !== 'production') {
        if (module.hot) {
            module.hot.accept('./rootReducer', () =>
                store.replaceReducer(require('./rootReducer').default)
            );
        }
    }

    let persistor = persistStore(store);
    if (typeof window !== `undefined`) {
        window.persistor = persistor;
    }

    return { store, persistor };
};

export default configureStore;
