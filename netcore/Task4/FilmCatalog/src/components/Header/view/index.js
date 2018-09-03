import React from 'react/index.js';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles.js';
import 'typeface-roboto';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '../../Menu/container/Menu';
import LogInDialog from '../../LogInDialog/container/LogInDialog';
import AccountMenu from '../../AccountMenu/container/AccountMenu.js';
import Loading from '../../Loading/view';

const HeaderView = (props) => {
    const { classes } = props;
    return (
        <React.Fragment>
          <div className={classes.header}>
          <AppBar position="static" className={classes.appBar}>        
          <Toolbar className={classes.toolBar}>
          <div>
            <Button variant="outlined" color="inherit" href="/">Film<span className={classes.logo}>Catalog</span></Button>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon onClick={props.handleMenuOpen}/>
            </IconButton>           
          </div>
          {props.isLoading && 
            <Loading styleName={"whiteLogin"} />
          }
          {!props.isLoading && 
          <div>
          {!props.isAuth &&
          <div>
            <LogInDialog />
            <AccountMenu/>
          </div>
          }
          {props.isAuth &&
            <div>
              <Button color="inherit">Привет, {props.userName}</Button>
              <AccountMenu isUserAuth={true}/>
            </div>
          }
          </div>
          }          
          </Toolbar>
        </AppBar>
        </div>
        {(props.isClickForOpen || props.isAddCategoryMenu) && <div className={classes.header}><Menu /></div>}
        </React.Fragment>
      );
}

HeaderView.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(HeaderView);