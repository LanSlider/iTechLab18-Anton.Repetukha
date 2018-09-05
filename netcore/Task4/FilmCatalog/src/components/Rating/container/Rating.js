import React from 'react';
import { connect } from "react-redux";

import RatingView from '../view/index.js';
import * as ratingAction from '../action/ratingAction';
import * as filmService from '../../../services/filmService';

class Rating extends React.PureComponent  {
    constructor(props) {
        super(props);
        this.state = {rating: this.props.rating, isOpenToEdit: false};
    }

    componentDidMount() {
        this.props.onLoadRatingByUser(filmService.getFilmIdFromUrl());
    }

    handleClickToRatingChange = () => {
        this.setState({rating: 0, isOpenToEdit: true});
    }

    handleRatingChange = (value) => {
        const ratingData = {
            mark: value,
            filmId: filmService.getFilmIdFromUrl(),
            userId: this.props.user.userId,
        }  
        this.props.onAddRatingByUser(ratingData);
    }

    render() {
        return (
            <RatingView 
                {...this.props}
                handleClickToRatingChange = {this.handleClickToRatingChange}
                handleRatingChange = {this.handleRatingChange}
            />
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoadRatingByUser: (filmId) => dispatch(ratingAction.onLoadRatingByUser(filmId)),
        onAddRatingByUser: (ratingData) => dispatch(ratingAction.onAddRatingByUser(ratingData))
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