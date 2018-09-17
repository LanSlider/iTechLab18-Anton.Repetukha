import React from 'react';
import { connect } from "react-redux";
import FilmCategoryView from '../view/index.js';
import { categoryItems }  from '../../../constants/categoryItemMenu'
import { onLoadFilmsCategory } from '../action/filmCategoryAction';

class FilmCategory extends React.PureComponent  {
    constructor(props) {
        super(props);
        this.state = {selectedItem: 0};
    }
  
    handleChange = (event, selectedItem) => {
        this.setState({ selectedItem: selectedItem });
        this.props.onLoadFilmsCategory(categoryItems[selectedItem-1]);
    };

    render() {
        return (
            <FilmCategoryView 
                selectedItem={this.state.selectedItem}
                handleChange={this.handleChange}
            />
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoadFilmsCategory: category => dispatch(onLoadFilmsCategory(category)),
    };
};

export default connect(null, mapDispatchToProps)(FilmCategory);