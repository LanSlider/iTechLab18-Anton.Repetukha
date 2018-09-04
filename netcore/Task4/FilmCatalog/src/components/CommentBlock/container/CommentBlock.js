import React from 'react';
import { connect } from "react-redux";
import CommentBlockView from '../view/index.js';
import { getFilmIdFromUrl } from '../../../services/commentService';
import { onLoadFilmComments, addFilmComment } from '../../../actions';

class CommentBlock extends React.PureComponent  {
    constructor(props) {
        super(props);
        this.state = {comments: this.props.comment};
    }
  
    componentDidMount() {
        const idFromUrl = getFilmIdFromUrl();
        if(!isNaN(idFromUrl)) {
            this.props.onLoadFilmComments(idFromUrl);
        }
        else {
            window.location.replace(`/`);
        }
    }

    handleSubmit(comment) {
        const idFromUrl = getFilmIdFromUrl();
        const date = new Date();
        const commentData = {
            ...comment,
            dataTime: `${date.getDay()} ${date.getMonth()} ${date.getFullYear()} ${date.getMinutes()}:${date.getHours()}`,
            filmId: idFromUrl
        }
        this.props.addFilmComment(commentData);
    }

    render() {
        return (
            <CommentBlockView 
                isLoading={this.props.isLoading}
                comments={this.props.comments}
            />
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoadFilmComments: (filmId) => dispatch(onLoadFilmComments(filmId)),
        addFilmComment: (commentData) => dispatch(addFilmComment(commentData))
    };
};

const mapStateToProps = state => {
    return {
        isLoading: state.comment.isLoading,
        comments: state.comment.comments,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentBlock);