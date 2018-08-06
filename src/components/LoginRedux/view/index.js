import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../Header/container/Header';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles';
import 'typeface-roboto';
import Paper from '@material-ui/core/Paper';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';

const LoginReduxView = (props) => {
    const { classes } = props;
    return(
        <React.Fragment>
            <Header selectedItem={4} />
            <div className={classes.Container}>
                <Paper position="static" color="default" className={classes.ContentContainer}>
                    <form onSubmit={props.handleSubmit}>
                        <DialogTitle id="form-dialog-title">Вход</DialogTitle>
                        <TextField label="Email Address" type="email" error={!props.isEmailValid} placeholder="example@mail.com" fullWidth value={props.email} onChange={props.onEmailChange} />
                        <FormHelperText>{props.errorEmailMessage}</FormHelperText>
                        <TextField label="Password" type="password" error={!props.isPasswordValid} placeholder="example" fullWidth value={props.password} onChange={props.onPasswordChange} />                      
                        <FormHelperText>{props.errorPassMessage}</FormHelperText>
                        <DialogActions> 
                            <Button type="submit" disabled={!props.isSubmitBtnEnabled} color="primary">Login</Button>
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
        </React.Fragment>  
    );
}

LoginReduxView.propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    onEmailChange: PropTypes.func.isRequired,
    onPasswordChange: PropTypes.func.isRequired,
    isSubmitBtnEnabled: PropTypes.bool.isRequired,
    errorPassMessage: PropTypes.string.isRequired,
    errorEmailMessage: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
}

export default withStyles(styles)(LoginReduxView);