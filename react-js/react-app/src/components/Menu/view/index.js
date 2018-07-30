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
        <div>
          <AppBar position="static">
            <Tabs value={props.value} onChange={props.handleChange} className={classes.buttonBlock}>
              <Tab label="Домой" component={Link} to="/" />
              <Tab label="Счётчики" component={Link} to="/counter" />
              <Tab label="О нас" component={Link} to="/about" />
            </Tabs>
          </AppBar>
        </div>
      );
}

MenuView.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MenuView);