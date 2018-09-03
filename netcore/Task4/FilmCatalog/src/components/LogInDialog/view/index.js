import React from 'react/index.js';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Login from '../../LogIn/container/LogIn';
 
const LogInDialogView = (props) => {
    const { handleClick, open } = props;
    return (
        <React.Fragment>
        <Button color="inherit" onClick={handleClick}>Войти</Button>
          <Dialog onClose={handleClick} open={open}>
            <Login isDialog = {true} handleClick = {handleClick} />
          </Dialog>
        </React.Fragment>
    );
}

LogInDialogView.propTypes = {
    handleClick: PropTypes.func.isRequired,
    open: PropTypes.object.isRequired
}

export default LogInDialogView;