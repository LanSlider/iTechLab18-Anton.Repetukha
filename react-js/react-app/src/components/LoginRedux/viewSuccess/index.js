import React from 'react/index.js';
import PropTypes from 'prop-types';
import Header from '../../Header/container/Header';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles.js';
import 'typeface-roboto';
import Paper from '@material-ui/core/Paper';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { email: state.email, password: state.password };
};

const LoginSuccessView = (props) => {
    const { classes } = props;
    return(
        <React.Fragment>
            <Header selectedItem={4} />
            <div className={classes.Container}>
                <Paper position="static" color="default" className={classes.ContentContainer}>
                    <form>
                        <DialogTitle id="form-dialog-title">Вход</DialogTitle>
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

LoginSuccessView.propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
}

const LoginDataView = connect(mapStateToProps)(LoginSuccessView);

export default withStyles(styles)(LoginDataView);