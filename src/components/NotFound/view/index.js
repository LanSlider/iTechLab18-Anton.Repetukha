import React from 'react/index.js';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles.js';
import 'typeface-roboto';

const notFoundView = (props) => {
    const { classes } = props;
    return (
        <div>       
            <h2 className={classes.textBlock}>404 – страница не найдена</h2>
        </div>                          
    );  
}

export default withStyles(styles)(notFoundView);