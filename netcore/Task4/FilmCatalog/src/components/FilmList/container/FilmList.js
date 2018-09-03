import React from 'react';
import { connect } from "react-redux";
import FilmListView from '../view/index.js';
import { onLoadFilms } from '../../../actions/index';
import * as types from '../../../constants/actionTypes'

class FilmList extends React.PureComponent {
    constructor (props) {
        super(props)
    }

    componentDidMount() {
        this.props.onLoadFilms();
    }
  
    render() { 
        return <FilmListView 
            isLoading = {this.props.isLoading}
            filmsList = {this.props.films}
        />
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoadFilms: () => dispatch(onLoadFilms())
    };
};

const mapStateToProps = state => {
    return {
        isLoading: state.film.isLoading,
        films: state.film.films,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmList);