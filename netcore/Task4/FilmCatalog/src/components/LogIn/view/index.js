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

const LogInView = (props) => {
    const { classes } = props;
    return(
        <React.Fragment>
            {props.isDialog && 
                <Paper position="static" color="default" className={classes.contentContainer}>
                    <form onSubmit={props.handleSubmit}>
                        <DialogTitle id="form-dialog-title">Вход</DialogTitle>
                        <Field name="username" component={renderTextField} label="Login" type="text" placeholder="loginExample"  fullWidth />          
                        <Field name="password" component={renderTextField} label="Password" type="password" placeholder="passwordExample" fullWidth />       
                        <DialogActions> 
                            <Button type="submit" disabled={!props.username || !props.password} color="primary">Войти</Button>
                        </DialogActions>
                        <DialogContent>
                            <DialogContentText>
                                <div><a className={classes.link} href="/register">Тут впервые?</a></div>
                                <a className={classes.link} href="/login">Открыть в новом окне</a>
                            </DialogContentText>
                        </DialogContent>
                    </form>   
                </Paper>
            }

            {!props.isDialog && 
                <div className={classes.container}>
                <Paper position="static" color="default" className={classes.contentContainer}>
                    <form onSubmit={props.handleSubmit}>
                        <DialogTitle id="form-dialog-title">Вход</DialogTitle>
                        <Field name="username" component={renderTextField} label="Login" type="text" placeholder="nameExample"  fullWidth />          
                        <Field name="password" component={renderTextField} label="Password" type="password" placeholder="passwordExample" fullWidth />       
                        <DialogActions> 
                            <Button type="submit" disabled={!props.username || !props.password} color="primary">Войти</Button>
                        </DialogActions>
                        <DialogContent>
                            <DialogContentText>
                                <div><a className={classes.link} href="/register">Тут впервые?</a></div>
                                <a className={classes.link} href="/">На главную страницу</a>                              
                            </DialogContentText>
                        </DialogContent>
                    </form>   
                </Paper>
                </div> 
            }
        </React.Fragment>  
    );
}

LogInView.propTypes = {
    classes: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
}

export default withStyles(styles)(reduxForm({
    form: 'login', 
})(LogInView))