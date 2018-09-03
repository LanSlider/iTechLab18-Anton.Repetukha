import React from 'react/index.js';
import PropTypes from 'prop-types';
import 'typeface-roboto';

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import styles from "./styles";

import Loading from "../../Loading/view/index";

const FilmDetailsView = (props) => {
  debugger;
    const { classes } = props;
    const { isLoading, filmDetails } = props;
    return (         
            <div>
      <div className={classes.cardContainer}>
        {isLoading ? (
          <Loading />
        ) : (
          <Card className={classes.card}>
            <div className={classes.stats}>
              <CardMedia
                className={classes.cover}                  
                image={filmDetails.imageUrl}
                title={filmDetails.title}
              />
            </div>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography variant="headline">{filmDetails.title}</Typography>
                <Typography variant="subheading" color="textSecondary">
                  ({filmDetails.year})
                </Typography>
                <Typography variant="body1">{filmDetails.description}</Typography>
                <Typography variant="body1">Director: {filmDetails.director}</Typography>
              </CardContent>
            </div>
          </Card>
        )}
      </div>
    </div>
      );
}

FilmDetailsView.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FilmDetailsView);