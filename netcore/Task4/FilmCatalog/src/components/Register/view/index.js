import React from 'react';
import PropTypes from 'prop-types';
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

const RegisterView = (props) => {
    const { classes } = props;
    return(
        <React.Fragment>
            <div className={classes.container}>
                <Paper position="static" color="default" className={classes.contentContainer}>
                    <form onSubmit={props.handleSubmit}>
                        <DialogTitle id="form-dialog-title">Регистрация</DialogTitle>
                        <Field name="username" component={renderTextField} label="Name" type="text" placeholder="Tom" fullWidth />
                        <Field name="email" component={renderTextField} label="Email Address" type="email" placeholder="example@mail.com"  fullWidth />          
                        <Field name="password" component={renderTextField} label="Password" type="password" placeholder="example" fullWidth />   
                        <Field name="passwordConfirm" component={renderTextField} label="Confirm Password" type="password" placeholder="example" fullWidth />    
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