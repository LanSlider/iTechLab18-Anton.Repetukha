import React from 'react/index.js';
import PropTypes from 'prop-types';
import Gallery from 'react-grid-gallery';
import 'typeface-roboto';

import { withStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';

import styles from "./styles";

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
                rowHeight={120}
                enableImageSelection={false}
                images={imagesDetails.map(image => ({
                    src: image.url,
                    thumbnail: image.url,   
                    thumbnailWidth: 220,
                    thumbnailHeight: 120
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