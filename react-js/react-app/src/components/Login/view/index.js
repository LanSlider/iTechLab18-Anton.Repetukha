import React from 'react/index.js';
import PropTypes from 'prop-types';
import Header from '../../Header/container/Header';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles.js';
import 'typeface-roboto';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';

const LoginView = (props) => {
    const { classes } = props;
    return(
        <div>
            <Header value={3} />
            <div className={classes.Container}>
                <Paper position="static" color="default" className={classes.ContentContainer}>
                    <form onSubmit={props.handleSubmit}>
                        <DialogTitle id="form-dialog-title">Вход</DialogTitle>
                        <TextField autoFocus margin="dense" label="Email Address" type="email" error={!props.isEmailValidate} fullWidth value={props.email} onChange={props.onEmailChange} />
                        <FormHelperText>{props.errorEmailMessage}</FormHelperText>
                        <TextField autoFocus margin="dense" label="Password" type="password" error={!props.isPasswordValidate} fullWidth value={props.password} onChange={props.onPasswordChange} />                      
                        <FormHelperText>{props.errorPassMessage}</FormHelperText>
                        <DialogActions> 
                            <Button type="submit" disabled={!props.isSubmitBtnEnable} color="primary">Login</Button>
                        </DialogActions>
                        <DialogContent>
                            <DialogContentText>
                                {JSON.stringify(`Email: ${props.email}`)}<br />
                                {JSON.stringify(`Password: ${props.password}`)}
                            </DialogContentText>
                        </DialogContent>
                    </form>   
                </Paper>
            </div>
        </div>  
    );
}

LoginView.propTypes = {
    // childrenCount: PropTypes.number.isRequired,
    // arrayCounter: PropTypes.array.isRequired,
    // addChild: PropTypes.func.isRequired,
    // resetChildren: PropTypes.func.isRequired,
    // delLastChild: PropTypes.func.isRequired
}

export default withStyles(styles)(LoginView);