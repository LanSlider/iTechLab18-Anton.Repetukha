import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

import styles from "./styles";
import Rater from "react-rater";

const FilmContainerView = ({ classes, id, title, year, imageUrl, rating }) => (
  <div className={classes.cardContainer}>
    <Link className={classes.link} to={`/film/${id}`}>
      <Card className={classes.card}> 
        <CardActionArea className={classes.linkArea}>
            <CardMedia className={classes.media} title={title} image={imageUrl} />
            <CardContent className={classes.content}>
                <Typography className={classes.title} variant="subheading">{title}</Typography>
                <Rater total={5} rating={rating / 2} interactive={false} className={classes.rating}/>
                <Typography className={classes.headline} variant="subheading">{year}</Typography>
            </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  </div>
);

FilmContainerView.propTypes = {
  classes: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  description: PropTypes.string,
  year: PropTypes.number,
  rating: PropTypes.number
};

export default withStyles(styles)(FilmContainerView);
