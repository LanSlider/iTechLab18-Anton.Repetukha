import React from 'react/index.js';
import PropTypes from 'prop-types';
import 'typeface-roboto';

import { withStyles } from "@material-ui/core/styles";


import styles from "./styles";
import StarRatings from 'react-star-ratings';
import Loading from "../../Loading/view/index";

const RatingView = (props) => {
    const { classes } = props;
    const { options, rating, handleRatingChange, handleClickToRatingChange, isOpenToEdit } = props;
    return ( 
      <React.Fragment>
          
       {/* {isLoading ? (
        <Loading />
      ) : (       */}

        
        <div className={classes.rateBlock}>
            <StarRatings rating={rating} starRatedColor="red" changeRating={handleRatingChange} numberOfStars={5} starDimension="50px" starSpacing="5px"/>
            <span><span onClick={handleClickToRatingChange}>Изменить </span> | Вы оценили на: {5}</span>
        </div>


       {/* )}  */}
    </React.Fragment>
      );
}

RatingView.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(RatingView);