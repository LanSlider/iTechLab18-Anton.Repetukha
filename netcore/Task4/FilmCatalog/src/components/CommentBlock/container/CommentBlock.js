import React from 'react';
import { connect } from "react-redux";

import CommentBlockView from '../view/index.js';
import { getFilmIdFromUrl } from '../../../services/filmService';
import { validateComment } from '../../../helpers/formHelpers'
import { onLoadFilmComments, addFilmComment } from '../action/commentAction';

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

    validateValues = values => {
        const errors = {};
        let errorCommentMessage = "";
        if(values.comment) {
            errorCommentMessage = validateComment(values.comment);
        }        
        if(errorCommentMessage !== "") {
            errors.comment = errorCommentMessage;
        }
        return errors
    }


    handleSubmit = values => {
        const idFromUrl = getFilmIdFromUrl();
        const commentData = {
            text: values.comment,
            filmId: idFromUrl,
            userId: this.props.user.userId,
            userName: this.props.user.name 
        }
        this.props.addFilmComment(commentData);
        values.comment = "";
    }

    render() {
        let comment = this.props.formState.values? this.props.formState.values : "";
        comment = comment? comment : comment = "";
        return (
            <CommentBlockView 
                isLoading={this.props.isLoading}
                comments={this.props.comments}
                isAuth = {this.props.isAuth}
                text = {comment}
                validate = {this.validateValues}
                title = {this.props.film.title}
                onSubmit = {this.handleSubmit}
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
        formState: { ...state.form.comment},
        film : state.filmDetails.data,
        user: state.user,
        state: state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentBlock);