import { Provider } from 'react-redux';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider, StyledEngineProvider } from '@material-ui/core';
import configureStore from '../shared/store';
import theme from '../shared/theme';

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
export const withAppProviders = (Component) => {
    const wrapped: React.FunctionComponent<any> = ({ initialState = {}, store, ...props }) => {
        return (
            <Provider store={store || configureStore({ initialState })}>
                <StaticRouter>
                    <HelmetProvider>
                        <StyledEngineProvider injectFirst>
                            <ThemeProvider theme={theme}>
                                <Component {...props} />
                            </ThemeProvider>
                        </StyledEngineProvider>
                    </HelmetProvider>
                </StaticRouter>
            </Provider>
        );
    };
    wrapped.displayName = Component.displayName || Component.name || 'Component';
    return wrapped;
};
