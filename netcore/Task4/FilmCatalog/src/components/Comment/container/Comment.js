import React from 'react';
import CommentContainerView from '../view';
import PropTypes from 'prop-types';

class CommentContainer extends React.PureComponent  {
    render() {
        debugger;
        return <CommentContainerView 
            {...this.props}
        />
    }
}

export default CommentContainer;