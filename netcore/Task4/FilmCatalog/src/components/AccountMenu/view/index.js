import React from 'react/index.js';
import PropTypes from 'prop-types';
import 'typeface-roboto';

import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';

import LogOut from '../../LogOut/container/LogOut';
import { Link } from 'react-router-dom'
import {styles} from './styles';

const AccountMenuView = (props) => {
    const { classes } = props;
    const { auth, anchorEl, handleClick, handleClose  } = props;
    return (
        <React.Fragment>
            <IconButton 
                 color="inherit"
                 aria-owns={anchorEl ? 'simple-menu' : null}
                 aria-haspopup="true"
                 onClick={handleClick}
            >
                <AccountCircle />
            </IconButton>
            {!auth &&
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >            
                    <MenuItem onClick={handleClose}><Link className={classes.link} to='/register'>Регистрация</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link className={classes.link} to='/login'>Войти</Link></MenuItem>
                </Menu>
            }

            {auth && 
                <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                >          
                    <MenuItem onClick={handleClose}><Link className={classes.link} to='#'>Аккаунт</Link></MenuItem>
                    <MenuItem onClick={handleClose}><LogOut /></MenuItem>
                </Menu>
            }
        </React.Fragment>
      );
}

AccountMenuView.propTypes = {
    classes: PropTypes.object.isRequired,
    auth: PropTypes.bool.isRequired,
    anchorEl: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired
}

export default withStyles(styles)(AccountMenuView);