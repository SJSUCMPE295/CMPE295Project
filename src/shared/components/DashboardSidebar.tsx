import * as React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Avatar, Box, Button, Divider, Drawer, Hidden, List, Typography } from '@material-ui/core';
import {
    AlertCircle as AlertCircleIcon,
    BarChart as BarChartIcon,
    Lock as LockIcon,
    Settings as SettingsIcon,
    ShoppingBag as ShoppingBagIcon,
    User as UserIcon,
    UserPlus as UserPlusIcon,
    Package as PackageIcon,
    Users as UsersIcon,
    Gift as GiftIcon,
    PlusCircle as PlusCircleIcon,
} from 'react-feather';
import NavItem from './NavItem';

const user = {
    avatar: '/static/images/avatars/avatar_2.png',
    jobTitle: 'San Jose,CA',
    name: 'Katarina Smith',
};

const items = [
    {
        href: '/app/dashboard',
        icon: BarChartIcon,
        title: 'Dashboard',
    },
    {
        href: '/app/customers',
        icon: PackageIcon,
        title: 'Get Help',
    },
    {
        href: '/app/givehelp',
        icon: ShoppingBagIcon,
        title: 'Give Help',
    },
    {
        href: '/app/medicalAssistance',
        icon: PlusCircleIcon,
        title: 'Medical Assistance',
    },
    {
        href: '/app/account',
        icon: UserIcon,
        title: 'Account',
    },
    {
        href: '/app/settings',
        icon: SettingsIcon,
        title: 'Settings',
    },
    /*
    {
        href: '/login',
        icon: LockIcon,
        title: 'Login',
    },
    {
        href: '/register1',
        icon: UserPlusIcon,
        title: 'Register',
    },
    {
        href: '/404',
        icon: AlertCircleIcon,
        title: 'Error',
    },*/
];

export const DashboardSidebar = ({ onMobileClose, openMobile }) => {
    const location = useLocation();

    React.useEffect(() => {
        if (openMobile && onMobileClose) {
            onMobileClose();
        }
    }, [location.pathname]);

    const content = (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
            }}
        >
            <Box
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    p: 2,
                }}
            >
                <Avatar
                    component={RouterLink}
                    src={user.avatar}
                    sx={{
                        cursor: 'pointer',
                        width: 64,
                        height: 64,
                    }}
                    to="/app/account"
                />
                <Typography color="textPrimary" variant="h5">
                    {user.name}
                </Typography>
                <Typography color="textSecondary" variant="body2">
                    {user.jobTitle}
                </Typography>
            </Box>
            <Divider />
            <Box sx={{ p: 2 }}>
                <List>
                    {items.map((item) => (
                        <NavItem
                            href={item.href}
                            key={item.title}
                            title={item.title}
                            icon={item.icon}
                        />
                    ))}
                </List>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box
                sx={{
                    backgroundColor: 'background.default',
                    m: 2,
                    p: 2,
                }}
            >
                <Typography align="center" gutterBottom variant="h4">
                    Are you a Doctor?
                </Typography>
                <Typography align="center" variant="body2">
                    Please help us in assisting non-urgent medical needs
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        pt: 2,
                    }}
                >
                    <Button
                        color="primary"
                        component="a"
                        href="https://react-material-kit.devias.io"
                        variant="contained"
                    >
                        Register as Doctor
                    </Button>
                </Box>
            </Box>
        </Box>
    );

    return (
        <>
            <Hidden mdUp>
                <Drawer
                    anchor="left"
                    onClose={onMobileClose}
                    open={openMobile}
                    variant="temporary"
                    PaperProps={{
                        sx: {
                            width: 256,
                        },
                    }}
                >
                    {content}
                </Drawer>
            </Hidden>
            <Hidden mdDown>
                <Drawer
                    anchor="left"
                    open
                    variant="persistent"
                    PaperProps={{
                        sx: {
                            width: 256,
                            top: 64,
                            height: 'calc(100% - 64px)',
                        },
                    }}
                >
                    {content}
                </Drawer>
            </Hidden>
        </>
    );
};

// DashboardSidebar.propTypes = {
//     onMobileClose: PropTypes.func,
//     openMobile: PropTypes.bool,
// };
//
// DashboardSidebar.defaultProps = {
//     onMobileClose: () => {},
//     openMobile: false,
// };

export default DashboardSidebar;
