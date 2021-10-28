import { Provider } from 'react-redux';
import React from 'react';
import configureStore from '../shared/store';

export const withRedux = (Component) => {
    const wrapped: React.FunctionComponent<any> = ({ initialState = {}, store, ...props }) => {
        return (
            <Provider store={store || configureStore({ initialState })}>
                <Component {...props} />
            </Provider>
        );
    };
    wrapped.displayName = Component.displayName || Component.name || 'Component';
    return wrapped;
};
