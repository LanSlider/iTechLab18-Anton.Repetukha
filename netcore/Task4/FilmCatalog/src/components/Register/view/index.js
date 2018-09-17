import React from 'react';
import PropTypes from 'prop-types';
import { styles } from './styles';
import { Field, reduxForm } from 'redux-form';
import 'typeface-roboto';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';

import * as validate from '../../../helpers/formHelpers'

const renderTextField = ({ input, meta: {touched,error}, ...custom}) => (
    <React.Fragment>
        <TextField     
            {...input}
            error = {error && touched}
            {...custom}
        />
        {touched
            ? (error 
                ? <FormHelperText>{error}</FormHelperText>
                : <FormHelperText></FormHelperText>
            )
            : <FormHelperText>{""}</FormHelperText>
        }
    </React.Fragment>
)

const RegisterView = (props) => {
    const { classes } = props;
    return(
        <React.Fragment>
            <div className={classes.container}>
                <Paper position="static" color="default" className={classes.contentContainer}>
                    <form onSubmit={props.handleSubmit}>
                        <DialogTitle id="form-dialog-title">Регистрация</DialogTitle>
                        <Field name="username" component={renderTextField} validate={validate.validateName} label="Name" type="text" placeholder="Tom" fullWidth />
                        <Field name="email" component={renderTextField} validate={validate.validateEmail}  label="Email Address" type="email" placeholder="example@mail.com"  fullWidth />          
                        <Field name="password" component={renderTextField} validate={validate.validatePassword} label="Password" type="password" placeholder="example" fullWidth />   
                        <Field name="passwordConfirm" component={renderTextField} validate={validate.validatePasswordConfirm} label="Confirm Password" type="password" placeholder="example" fullWidth />    
                        <DialogActions> 
                            <Button type="submit" disabled={!props.username || !props.password || !props.passwordConfirm} color="primary">Зарегистрироваться</Button>
                        </DialogActions>
                        <DialogContent>
                            <DialogContentText>
                                <div className={classes.urlBlock}><a className={classes.link} href="/">Вернуться на главную</a></div>
                            </DialogContentText>
                        </DialogContent>
                    </form>   
                </Paper>
            </div>
        </React.Fragment>  
    );
}

RegisterView.propTypes = {
    classes: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
}

export default withStyles(styles)(reduxForm({
    form: 'register', 
})(RegisterView))