import React from 'react';
import FilmGalleryView from '../view/index.js';

class FilmGallery extends React.PureComponent  {
    render() {
        return (
            <FilmGalleryView 
                imagesDetails = {this.props.images}
            />
        )
    }
}

export default FilmGallery;