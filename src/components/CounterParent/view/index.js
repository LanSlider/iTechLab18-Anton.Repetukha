import React from 'react/index.js';
import PropTypes from 'prop-types';
import Header from '../../Header/container/Header';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles.js';
import 'typeface-roboto';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';

const CounterParentView = (props) => {
    const { classes } = props;
    return(
        <React.Fragment>
            <Header selectedItem={1} />
            <div className={classes.Container}>
                <Paper position="static" color="default" className={classes.ContentContainer}>
                    <AppBar position="static" color="default" className={classes.counterBlock}>
                        <div className={classes.counterNumber}>{props.childrenCount}</div>
                        <div className={classes.buttonBlock}>
                            <Button color="primary" onClick={props.addChild}>addCounter ++</Button>
                            <Button color="secondary"onClick={props.resetChildren}>reset <ThreeSixtyIcon className={classes.icon} /></Button>
                        <Button color="primary" onClick={props.delLastChild}>delCounter --</Button>
                        </div>                         
                    </AppBar>
                     <div className={classes.root}>
                        {props.arrayCounter}
                    </div>  
                </Paper>
            </div>
        </React.Fragment>  
    );
}

CounterParentView.propTypes = {
    childrenCount: PropTypes.number.isRequired,
    arrayCounter: PropTypes.array.isRequired,
    addChild: PropTypes.func.isRequired,
    resetChildren: PropTypes.func.isRequired,
    delLastChild: PropTypes.func.isRequired
}

export default withStyles(styles)(CounterParentView);