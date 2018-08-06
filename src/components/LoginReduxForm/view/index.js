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
import { Field, reduxForm } from 'redux-form';

const renderTextField = ({ input, meta: {error}, ...custom}) => (
    <React.Fragment>
        <TextField     
            {...input}
            error = {error}
            {...custom}
        />
        <FormHelperText>{error}</FormHelperText>  
    </React.Fragment>
)

const LoginReduxFormView = (props) => {
    const { classes } = props;
    return(
        <React.Fragment>
            <Header selectedItem={5} />
            <div className={classes.Container}>
                <Paper position="static" color="default" className={classes.ContentContainer}>
                    <form onSubmit={props.handleSubmit}>
                        <DialogTitle id="form-dialog-title">Вход</DialogTitle>
                        <Field name="email" component={renderTextField}   label="Email Address" type="email" placeholder="example@mail.com"  fullWidth />          
                        <Field name="password" component={renderTextField}   label="Password" type="password" placeholder="example" fullWidth />       
                        <DialogActions> 
                            <Button type="submit" disabled={!props.email || !props.password} color="primary">Login</Button>
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

LoginReduxFormView.propTypes = {
    classes: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
}

export default withStyles(styles)(reduxForm({
    form: 'login', 
})(LoginReduxFormView))