import React from 'react/index.js';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles.js';
import 'typeface-roboto';

import LogInDialog from '../../LogInDialog/container/LogInDialog';
import Loading from '../../Loading/view';
import CommentContainer from '../../Comment/container/Comment';
import Paper from '@material-ui/core/Paper';

const CommentBlockView = (props) => {
    // handleSubmit, text, title, isLoading, comments
    const { classes,  } = props;
    return (
        <Paper position="static" color="default" className={classes.contentContainer}>
        {/* {isAuth? (
            <form onSubmit={handleSubmit}>
            <div>
                <Field name="text" component={renderTextField} label="Login" type="text" placeholder={`Add comment to "${title}"`}  fullWidth />            
                <Button type="submit" disabled={!text} color="primary">Add</Button>
            </div>
            </form>
        ): (
            <div>
                Login for adding some comment
                <LogInDialog />
            </div>   
        )}

        {isLoading? 
        (
            <Loading />
        ) : (
            comments.map(comment => <CommentContainer key={comment.id} {...comment} /> )        
        )} */}
        </Paper>
      );
}

CommentBlockView.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CommentBlockView);