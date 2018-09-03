import React from 'react';
import FilmContainerView from '../view';
import PropTypes from 'prop-types';

class FilmContainer extends React.PureComponent  {
    render() {
        return <FilmContainerView 
            {...this.props}
        />
    }
}

FilmContainer.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired
};

export default FilmContainer;