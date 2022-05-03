import * as React from 'react';
import { Redirect, Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@material-ui/core';
// import CustomerList from 'pages/CustomerList';
import { connect } from 'react-redux';
import Dashboard from 'pages/Dashboard/Dashboard';
import Account from 'pages/Account/Account';
import MedicalAssistance from 'pages/MedicalAssistance/MedicalAssistance';
import LookForMedicalAssistance from 'pages/MedicalAssistance/LookForMedicalAssistance';

import Settings from 'pages/Settings/Settings';
import Login from 'pages/Login/Login';
import RegisterThruLogin from 'pages/Login/RegisterThruLogin';
import Register1 from 'pages/Register/RegisterFirstPage';
import Register2 from 'pages/Register/RegisterSecondPage';
import ForgotPassword from 'pages/ForgotPassword/ForgotPassword';
import ResetPassword from 'pages/ForgotPassword/ResetPassword';
import NotFound from 'pages/NotFound';
import AuthContextProvider, { useAuth } from 'contexts/AuthContext';
import GetHelp from 'pages/GetHelp/GetHelp';
import GetHelpItem from 'pages/GetHelpItem/GetHelpItem';
import theme from './theme';
import MainLayout from './components/MainLayout';
import DashboardLayout from './components/DashboardLayout';
import RegisterDoctorModal from './components/RegisterDoctorModal';
import AddServiceScreen from './pages/GiveHelp/AddService';
import GiveHelpScreen from './pages/GiveHelp/LandingPage';
import AddResourceScreen from './pages/GiveHelp/AddResource';
import MyTransactions from './pages/MyTransactions/MyTransactions';
import './styles.css';
const App: React.FC<any> = ({ _id }) => {
    const history = useHistory();
    // React.useEffect(() => {
    //     if (!_id) {
    //         history.push('/login');
    //     }
    // }, [_id]);
    return (
        <AuthContextProvider>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={theme}>
                    <div>
                        <Switch>
                            <Route path={'/app'}>
                                <DashboardLayout>
                                    <Switch>
                                        <Route path={'/app/account'} component={Account} />
                                        
                                        <Route 
                                            path={'/app/gethelp/:id/:type/:pagetype'} 
                                            component={GetHelpItem} 
                                        /> 
                                        <Route path={'/app/gethelp'} component={GetHelp} />
                                        <Route path={'/app/dashboard'} component={Dashboard} />
                                        <Route
                                            path={'/app/mytransactions'}
                                            component={MyTransactions}
                                        />
                                        <Route
                                            path={'/app/medicalAssistance'}
                                            component={MedicalAssistance}
                                        />
                                        <Route
                                            path={'/app/lookformedicalAssistance'}
                                            component={LookForMedicalAssistance}
                                        />
                                        <Route
                                            path={'/app/givehelp/addservice'}
                                            component={AddServiceScreen}
                                        />
                                        <Route
                                            path={'/app/givehelp/addresource'}
                                            component={AddResourceScreen}
                                        />
                                        <Route
                                            path={'/app/registerdoctor'}
                                            component={RegisterDoctorModal}
                                        />
                                        <Route path={'/app/givehelp'} component={GiveHelpScreen} />
                                        <Route path={'/app/settings'} component={Settings} />
                                    </Switch>
                                </DashboardLayout>
                            </Route>

                            <Route path={'/login'}>
                                <MainLayout>
                                    <Login />
                                </MainLayout>
                            </Route>
                            <Route path={'/login2register'}>
                                <MainLayout>
                                    <RegisterThruLogin />
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
                                <Redirect to={_id ? '/app/dashboard' : '/login'} />
                            </Route>
                            <Route path={'/404'} component={NotFound} />
                            <Redirect to="/404" />
                        </Switch>
                    </div>
                </ThemeProvider>
            </StyledEngineProvider>
        </AuthContextProvider>
    );
};

const mapStateToProps = ({ userProfileReducer }) => ({
    ...userProfileReducer,
});

const mapDispatchToProps = {};
const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectedApp;
