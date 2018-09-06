import React from 'react';
import { connect } from "react-redux";
import { onLoadFilmDetails } from '../../../actions/index';
import FilmDetailsView from '../view/index.js';
import toastr from 'toastr';

class FilmDetails extends React.PureComponent  {
    constructor(props) {
        super(props);       
    }

    componentDidMount() {
        const idFromUrl = window.location.href.toString().split('/')[4];
        if(!isNaN(idFromUrl)) {
            this.props.onLoadFilmDetails(idFromUrl);
        }
        else {
            window.location.replace(`/`);
        }
    }

    render() {
        return <FilmDetailsView 
            isLoading = {this.props.isLoading}
            filmDetails = {this.props.filmDetails}
            isAuth = {this.props.isAuth}
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
        isAuth: state.user.isAuth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmDetails);