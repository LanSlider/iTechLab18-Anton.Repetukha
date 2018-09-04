import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from "@material-ui/core/CardContent";
import Paper from '@material-ui/core/Paper';
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

import styles from "./styles";
import Rater from "react-rater";

const CommentContainerView = ({ classes, id, userName, text, dateTime }) => (
    <Paper>
        <div className={classes.header}>{userName} <span className={classes.date}>{dateTime}</span></div>
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
