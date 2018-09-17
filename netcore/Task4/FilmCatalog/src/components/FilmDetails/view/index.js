import React from 'react/index.js';
import PropTypes from 'prop-types';
import styles from "./styles";
import 'typeface-roboto';

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import Loading from '../../Loading/view/index';
import Rating from '../../Rating/container/Rating';
import FilmGallery from '../../FilmGallery/container/FilmGallery';
import CommentBlock from '../../CommentBlock/container/CommentBlock';

const FilmDetailsView = (props) => {
    const { classes } = props;
    const { isLoading, filmDetails, isAuth, filmId } = props;
    return ( 
      <React.Fragment>
      {isLoading ? (
        <Loading />
      ) : (       
        <div className={classes.middleWrapper}> 
          <div>
            <div className={classes.componentContainer}>
              <Card className={classes.card}>           
                <CardMedia
                  className={classes.coverImage}                  
                  image={filmDetails.imageUrl}
                  title={filmDetails.title}
                />
                <CardContent>
                  <Typography variant="headline">{filmDetails.title}</Typography>
                  <Typography variant="subheading" color="textSecondary">({filmDetails.year})</Typography>
                  <Typography variant="headline" className={classes.titleLine}></Typography>
                  <Typography variant="body1" className={classes.description}>{filmDetails.description}</Typography>

                  <div className={classes.infoContainer}>
                    <div>
                      <Typography variant="body1"><span className={classes.detailsTitle}>Rating:</span> {filmDetails.rating}</Typography>
                      <Typography variant="body1"><span className={classes.detailsTitle}>Director:</span> {filmDetails.director}</Typography>
                      <Typography variant="body1"><span className={classes.detailsTitle}>Country:</span> {filmDetails.country}</Typography>
                      <Typography variant="body1"><span className={classes.detailsTitle}>Category:</span> {filmDetails.category}</Typography>
                    </div>
                    <div>
                      <Rating rating={filmDetails.rating} />
                    </div>
                  </div>

                </CardContent>
              </Card>  
            </div>
            
            <div className={classes.componentContainer}>               
              <FilmGallery images={filmDetails.images}/> 
            </div>

            <div className={classes.componentContainer}>
              <Card className={classes.trailerVideo}>
                <iframe
                  title={filmDetails.title}
                  width="100%"
                  height="430px"
                  src={filmDetails.videoUrl}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </Card>
            </div>
            
            <div className={classes.componentContainer}>               
              <CommentBlock isAuth={isAuth} filmId={filmId} />
            </div>

        </div>
    </div>
      )}
    </React.Fragment>
    );
}

FilmDetailsView.propTypes = {
    classes: PropTypes.object.isRequired,
    isAuth: PropTypes.bool.isRequired,
    filmDetails: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired
}

export default withStyles(styles)(FilmDetailsView);