import React from 'react/index.js';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles.js';
import 'typeface-roboto';

import LogInDialog from '../../LogInDialog/container/LogInDialog';
import Loading from '../../Loading/view';
import CommentContainer from '../../Comment/container/Comment';
import Paper from '@material-ui/core/Paper';
import SendIcon from '@material-ui/icons/Send';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import { Field, reduxForm } from 'redux-form';

const renderTextField = ({ input, meta: {error}, ...custom}) => (
    <React.Fragment>
        <TextField     
            {...input}
            error = {error}
            {...custom}
        />
        <FormHelperText>{error}</FormHelperText>  
    </React.Fragment>
)

const CommentBlockView = (props) => {   
    const { classes, onSubmit, text, title, isLoading, comments, isAuth } = props;
    debugger;
    return (
        <Paper position="static" color="default">
        {isAuth? (
            <form onSubmit={props.handleSubmit} className={classes.commentForm}>  
            <div className={classes.addCommentBlock}>   
                <div className={classes.addCommentForm}><Field name="comment" component={renderTextField} label={`Add comment to "${title}"`} type="text" placeholder={`Some comment`}  fullWidth /></div>
                <Button type="submit" disabled={!text} className={classes.sendButton}><SendIcon /></Button>
            </div>
            </form>
        ): (
            <div className={classes.commentGuestBlock}>
                Login for adding some comment <div className={classes.loginButton}><LogInDialog /></div>
            </div>   
        )}

        {isLoading? 
        (
            <Loading />
        ) : (
            comments.map(comment => <CommentContainer key={comment.id} {...comment} /> )        
        )}
        </Paper>
      );
}

CommentBlockView.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(reduxForm({
    form: 'comment', 
})(CommentBlockView))