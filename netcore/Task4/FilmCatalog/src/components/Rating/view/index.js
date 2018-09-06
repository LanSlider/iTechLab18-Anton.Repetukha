import React from 'react/index.js';
import PropTypes from 'prop-types';
import 'typeface-roboto';

import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";
import StarRatings from 'react-star-ratings';
import Loading from "../../Loading/view/index";
import LogInDialog from '../../LogInDialog/container/LogInDialog';

const RatingView = (props) => {
    const { classes } = props;
    const { userRating, rating, handleRatingChange, handleClickToRatingChange, isOpenToEdit, isAuth, isLoading } = props;
    debugger;
    return ( 
      <React.Fragment>        
        {isOpenToEdit? (
            <div className={classes.rateBlock}>
                <StarRatings rating={rating} starRatedColor="red" changeRating={handleRatingChange} numberOfStars={5} starDimension="50px" starSpacing="5px"/>
            </div>
        ) : (               
            <div className={classes.rateBlock}>
                <StarRatings rating={rating} starRatedColor="red" numberOfStars={5} starDimension="50px" starSpacing="5px"/>
                {isAuth? (                                       
                    <span><span onClick={handleClickToRatingChange}>Изменить </span> | {userRating && `Вы оценили на: ${userRating}`} {!userRating && `Оцените фильм`}</span>
                ) : (
                    <span>Login for make a mark <LogInDialog /></span>
                )}     
            </div>
        )}          
      </React.Fragment>
    );
}

RatingView.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(RatingView);