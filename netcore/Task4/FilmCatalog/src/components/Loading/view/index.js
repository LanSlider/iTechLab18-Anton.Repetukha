import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

import styles from "./styles";

const Loading = ({ classes, styleName }) => (
  <React.Fragment>
    { styleName == null &&
      <div className={classes.circleContainer}>
        <CircularProgress className={classes.circle} /> 
      </div> 
    }
    { styleName === "whiteLogin" && 
      <div className={classes.circleForLoginContainer}>
        <CircularProgress className={classes.circleForLogin} size={20} /> 
      </div>  
    }
  </React.Fragment>
);

Loading.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Loading);