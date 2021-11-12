import * as React from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AppBar, Badge, Box, Hidden, IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import Logo from './Logo';
import { useAuth } from 'contexts/AuthContext';

const DashboardNavbar = ({ onMobileNavOpen, ...rest }) => {
    const {logout} = useAuth();
    const history = useHistory();
    const [notifications] = React.useState([]);

    const signout = () => {
        logout();
        history.push('/login');
    }

    return (
        <AppBar elevation={0} {...rest}>
            <Toolbar>
                {/*<RouterLink to="/">*/}
                <Logo />
                {/*</RouterLink>*/}
                <Box sx={{ flexGrow: 1 }} />
                <Hidden mdDown>
                    <IconButton color="inherit" size="large">
                        <Badge badgeContent={notifications.length} color="primary" variant="dot">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton color="inherit" size="large" onClick={signout}>
                        <InputIcon />
                    </IconButton>
                </Hidden>
                <Hidden mdUp>
                    <IconButton color="inherit" onClick={onMobileNavOpen} size="large">
                        <MenuIcon />
                    </IconButton>
                </Hidden>
            </Toolbar>
        </AppBar>
    );
};

DashboardNavbar.propTypes = {
    onMobileNavOpen: PropTypes.func,
};

export default DashboardNavbar;
