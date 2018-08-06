import React from 'react/index.js';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles.js';
import 'typeface-roboto';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';

const Counter = (props) => {
    const { classes } = props;
    return(
        <React.Fragment>
            <AppBar position="static" color="default" className={classes.counterBlock}>
                <div className={classes.counterNumber}>{props.countValue}</div>
                <div className={classes.buttonBlock}>
                    <Button color="primary" onClick={props.incrementCount}>increment ++</Button>
                    <Button color="secondary"onClick={props.resetCount}>reset <ThreeSixtyIcon className={classes.icon} /></Button>
                    <Button color="primary" onClick={props.decrementCount}>decrement --</Button>
                </div>                         
            </AppBar>
        </React.Fragment>
    );
}

Counter.propTypes = {
    countValue: PropTypes.number.isRequired,
    incrementCount: PropTypes.func.isRequired,
    resetCount: PropTypes.func.isRequired,
    decrementCount: PropTypes.func.isRequired
}

export default withStyles(styles)(Counter);