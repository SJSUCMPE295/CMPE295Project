import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@material-ui/core';
import Account from 'pages/Account/Account';
import CustomerList from 'pages/CustomerList';
import Dashboard from 'pages/Dashboard';
import ProductList from 'pages/ProductList';
import Settings from 'pages/Settings/Settings';
import Login from 'pages/Login';
import Register from 'pages/Register';
import NotFound from 'pages/NotFound';
import theme from './theme';
import MainLayout from './components/MainLayout';
import DashboardLayout from './components/DashboardLayout';

const App: React.FC<any> = () => {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <div>
                    <Switch>
                        <Route path={'/app'}>
                            <DashboardLayout>
                                <Switch>
                                    <Route path={'/app/account'} component={Account} />
                                    <Route path={'/app/customers'} component={CustomerList} />
                                    <Route path={'/app/dashboard'} component={Dashboard} />
                                    <Route path={'/app/products'} component={ProductList} />
                                    <Route path={'/app/settings'} component={Settings} />
                                </Switch>
                            </DashboardLayout>
                        </Route>

                        <Route path={'/login'}>
                            <MainLayout>
                                <Login />
                            </MainLayout>
                        </Route>
                        <Route path={'/register'}>
                            <MainLayout>
                                <Register />
                            </MainLayout>
                        </Route>
                        <Route exact path="/">
                            <Redirect to="/app/dashboard" />
                        </Route>
                        <Route path={'/404'} component={NotFound} />
                        <Redirect to="/404" />
                    </Switch>
                </div>
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export default App;
