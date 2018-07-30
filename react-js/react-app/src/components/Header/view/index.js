import React from 'react';
import logo from '../../../logo.svg';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles.css';
import Menu from '../../Menu/container/Menu.js';

const HeaderView = (props) => {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">React-App</h1>
          </header> 
          <Menu value={props.value || 0} />     
        </div>
)}

export default withStyles(styles)(HeaderView);