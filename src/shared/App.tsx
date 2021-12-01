import * as React from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@material-ui/core';
import Account from 'pages/Account/Account';
import CustomerList from 'pages/CustomerList';
import Dashboard from 'pages/Dashboard';
import MedicalAssistance from 'pages/MedicalAssistance';
import Settings from 'pages/Settings/Settings';
import Login from 'pages/Login/Login';
import Register1 from 'pages/Register/RegisterFirstPage';
import Register2 from 'pages/Register/RegisterSecondPage';
import ForgotPassword from 'pages/ForgotPassword/ForgotPassword';
import ResetPassword from 'pages/ForgotPassword/ResetPassword';
import NotFound from 'pages/NotFound';
//import AuthContextProvider from 'contexts/AuthContext';
//import { useAuth } from 'contexts/AuthContext';
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
                                    <Route
                                        path={'/app/medicalAssistance'}
                                        component={MedicalAssistance}
                                    />
                                    <Route path={'/app/givehelp'} component={Account} />
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
                        <Route path={'/forgot-password'}>
                            <MainLayout>
                                <ForgotPassword />
                            </MainLayout>
                        </Route>
                        <Route path={'/reset-password'}>
                            <MainLayout>
                                <ResetPassword />
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

// const ProtectedRoute = (props) => {
//     const { currentUser } = useAuth();
//     const location = useLocation();
//     const { path } = props;
//     console.log('currentuse', currentUser);
//     console.log('path', path);
//     console.log('props', props);
//     if (path == '/login' || path == '/register1') {
//         return currentUser ? (
//             <Redirect to={location.state?.from ?? '/app/dashboard'} />
//         ) : (
//             <Route {...props} />
//         );
//     }
//
//     return currentUser ? (
//         <Route {...props} />
//     ) : (
//         <Redirect
//             to={{
//                 pathname: '/login',
//                 state: { from: path },
//             }}
//         />
//     );
// }

export default App;
