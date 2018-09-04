import React from 'react/index.js';
import PropTypes from 'prop-types';
import 'typeface-roboto';

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Gallery from 'react-grid-gallery';

import styles from "./styles";

import Loading from "../../Loading/view/index";
import Paper from '@material-ui/core/Paper';

const FilmGalleryView = (props) => {
    const { classes } = props;
    const { isLoading, imagesDetails } = props;
    return ( 
      <React.Fragment>
          
      {/* {isLoading ? (
        <Loading />
      ) : (      */}
        <Paper className={classes.galleryContainer}> 
            <Gallery
                className={classes.gallery}  
                rowHeight={120}
                enableImageSelection={false}
                images={imagesDetails.map(image => ({
                    src: image.url,
                    thumbnail: image.url,    
                }))}
            />
        </Paper>
      {/* )} */}
    </React.Fragment>
      );
}

FilmGalleryView.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FilmGalleryView);