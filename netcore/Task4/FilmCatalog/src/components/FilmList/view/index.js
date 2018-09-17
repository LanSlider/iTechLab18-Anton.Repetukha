import React from 'react/index.js';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import 'typeface-roboto';

import {styles} from './styles';
import Loading from '../../Loading/view'
import FilmContrainer from '../../Film/container/FilmContainer'

const FilmListView = (props) => {
    const { isLoading, filmsList, classes } = props;
    return (
        <div className={classes.wrapper}>
          {isLoading && <Loading />}
          {!isLoading && filmsList.map(film => <FilmContrainer key={film.id} {...film} />)}  
        </div>
      );
}

FilmListView.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FilmListView);