import * as React from 'react';
//import { Navigate } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';
import MainLayout from '../components/MainLayout';
import Account from './Account';
import CustomerList from './CustomerList';
import Dashboard from './Dashboard';
import Login from './Login';
import NotFound from './NotFound';
import ProductList from './ProductList';
import Register from './Register';
import Settings from './Settings';

export const pageRoutes = [
    {
        path: 'app',
        element: <DashboardLayout />,
        children: [
            { path: 'account', element: <Account /> },
            { path: 'customers', element: <CustomerList /> },
            { path: 'dashboard', element: <Dashboard /> },
            { path: 'products', element: <ProductList /> },
            { path: 'settings', element: <Settings /> },
            // { path: '*', element: <Navigate to="/404" /> },
        ],
    },
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { path: 'login', element: <Login /> },
            { path: 'register', element: <Register /> },
            { path: '404', element: <NotFound /> },
            // { path: '/', element: <Navigate to="/app/dashboard" /> },
            //  { path: '*', element: <Navigate to="/404" /> },
        ],
    },
];

export default pageRoutes;
