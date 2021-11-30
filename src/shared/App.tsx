import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@material-ui/core';
import Account from 'pages/Account/Account';
import Dashboard from 'pages/Dashboard/Dashboard';
import Settings from 'pages/Settings/Settings';
import Login from 'pages/Login';
import Register1 from 'pages/Register/RegisterFirstPage';
import Register2 from 'pages/Register/RegisterSecondPage';
import NotFound from 'pages/NotFound';
import theme from './theme';
import MainLayout from './components/MainLayout';
import DashboardLayout from './components/DashboardLayout';
import GetHelp from 'pages/GetHelp/GetHelp';
import GiveHelp from 'pages/GiveHelp/GiveHelp';
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
                                    <Route path={'/app/gethelp'} component={GetHelp} />
                                    <Route path={'/app/dashboard'} component={Dashboard} />
                                    <Route path={'/app/givehelp'} component={GiveHelp} />
                                    <Route path={'/app/settings'} component={Settings} />
                                </Switch>
                            </DashboardLayout>
                        </Route>

                        <Route path={'/login'}>
                            <MainLayout>
                                <Login />
                            </MainLayout>
                        </Route>
                        <Route path={'/register1'}>
                            <MainLayout>
                                <Register1 />
                            </MainLayout>
                        </Route>
                        <Route path={'/register2'}>
                            <MainLayout>
                                <Register2 />
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
