import React from 'react/index.js';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles.js';
import 'typeface-roboto';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
 
const FilmCategoryView = (props) => {
    const { classes } = props;
    return (
        <React.Fragment>
          <AppBar position="static" className={classes.menuBar}>
            <Tabs value={props.selectedItem} onChange={props.handleChange}>
              <Tab label="Все" className={classes.font} href="/" />
              <Tab label="Экшен" className={classes.font} />
              <Tab label="Криминал" className={classes.font}/>
              <Tab label="Фантастика" className={classes.font}/>
              <Tab label="Драма" className={classes.font} />
              <Tab label="Приключения" className={classes.font}/>
            </Tabs>
          </AppBar>
        </React.Fragment>
      );
}

FilmCategoryView.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FilmCategoryView);