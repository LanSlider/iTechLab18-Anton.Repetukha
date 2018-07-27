import React from 'react/index.js';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles.js';
import 'typeface-roboto';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';

const CounterParentView = (props) => {
    const { classes } = props;
    return(
        <div>
            <AppBar position="static" color="default" className={classes.counterBlock}>
            <div className={classes.counterNumber}>{props.countCounter}</div>
                <div className={classes.buttonBlock}>
                    <Button color="primary" onClick={props.addCounter}>addCounter ++</Button>
                    <Button color="secondary"onClick={props.resetCounter}>reset <ThreeSixtyIcon className={classes.icon} /></Button>
                    <Button color="primary" onClick={props.delCounter}>delCounter --</Button>
                </div>                         
            </AppBar>
            <div className={classes.root}>
                {props.arrayCounter}
            </div>   
        </div>  
    );
}

CounterParentView.propTypes = {
    countCounter: PropTypes.number.isRequired,
    arrayCounter: PropTypes.array.isRequired,
    addCounter: PropTypes.func.isRequired,
    resetCounter: PropTypes.func.isRequired,
    delCounter: PropTypes.func.isRequired
}

export default withStyles(styles)(CounterParentView);