import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

import styles from "./styles";

const CommentContainerView = ({ classes, userName, text, dateTime }) => (
    <Paper className={classes.commentContainer}>
        <div className={classes.header}> <Avatar className={classes.avatar}>H</Avatar> {userName} <span className={classes.date}>{dateTime}</span></div> 
        <div className={classes.main}>{text}</div>
    </Paper>
);

// FilmContainerView.propTypes = {
//   classes: PropTypes.object.isRequired,
//   id: PropTypes.number.isRequired,
//   title: PropTypes.string,
//   imageUrl: PropTypes.string,
//   description: PropTypes.string,
//   year: PropTypes.number,
//   rating: PropTypes.number
// };

export default withStyles(styles)(CommentContainerView);
