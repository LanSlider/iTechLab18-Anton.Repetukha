import React from 'react';
import { connect } from "react-redux";

import RatingView from '../view/index.js';
import * as ratingAction from '../action/ratingAction';
import * as filmAction from '../../../actions/index'
import * as filmService from '../../../services/filmService';

class Rating extends React.PureComponent  {
    constructor(props) {
        super(props);
        this.state = {rating: this.props.film.rating, isOpenToEdit: false};
    }

    componentDidMount() {
        if(this.props.user.isAuth) {
            this.props.onLoadRatingByUser(filmService.getFilmIdFromUrl());
        }
    }

    handleClickToRatingChange = () => {
        this.setState({rating: 0, isOpenToEdit: true});
    }

    handleRatingChange = (value) => {
        const filmId = filmService.getFilmIdFromUrl();
        const ratingData = {
            mark: value,
            filmId: filmId,
        }  
        this.props.onAddRatingByUser(ratingData);
        // this.props.onLoadFilmDetails(filmId);
        this.setState({ rating: this.props.film.rating, isOpenToEdit: false});
    }

    render() {
        return (
            <RatingView 
                {...this.props}
                rating = {this.state.rating}
                userRating = {this.props.rating}
                isAuth = {this.props.user.isAuth}
                isOpenToEdit = {this.state.isOpenToEdit}
                handleClickToRatingChange = {this.handleClickToRatingChange}
                handleRatingChange = {this.handleRatingChange}
            />
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoadRatingByUser: (filmId) => dispatch(ratingAction.onLoadRatingByUser(filmId)),
        onAddRatingByUser: (ratingData) => dispatch(ratingAction.onAddRatingByUser(ratingData)),
        onLoadFilmDetails: (id) => dispatch(filmAction.onLoadFilmDetails(id))
    };
};

const mapStateToProps = state => {
    return {
        isLoading: state.rating.isLoading,
        rating: state.rating.mark,
        film : state.filmDetails.data,
        user: state.user,
        state: state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rating);