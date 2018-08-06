import React from 'react/index.js';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles.js';
import 'typeface-roboto';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
 
const MenuView = (props) => {
    const { classes } = props;
    return (
        <React.Fragment>
          <AppBar position="static">
            <Tabs value={props.selectedItem} onChange={props.handleChange} className={classes.buttonBlock}>
              <Tab label="Домой" component={Link} to="/" />
              <Tab label="Счётчики" component={Link} to="/counter" />
              <Tab label="О нас" component={Link} to="/about" />
              <Tab label="Войти" component={Link} to="/login" />
              <Tab label="Войти с помощью redux" component={Link} to="/login-redux" />
              {/* <Tab label="Войти redux-form" component={Link} to="/login-redux-form" /> */}
            </Tabs>
          </AppBar>
        </React.Fragment>
      );
}

MenuView.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MenuView);