import React from 'react';
import { connect } from "react-redux";

import { onLoadFilmDetails } from '../action/filmDetailsAction';
import FilmDetailsView from '../view/index.js';

class FilmDetails extends React.PureComponent  {
    componentDidMount() {
        this.props.onLoadFilmDetails(this.props.id);
    }

    render() {
        return <FilmDetailsView 
            isLoading = {this.props.isLoading}
            filmDetails = {this.props.filmDetails}
            isAuth = {this.props.isAuth}
            filmId = {this.props.id}
        />
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoadFilmDetails: (id) => dispatch(onLoadFilmDetails(id))
    };
};

const mapStateToProps = state => {
    return {
        isLoading: state.filmDetails.isLoading,
        filmDetails: state.filmDetails.data,
        isAuth: state.user.isAuth,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmDetails);