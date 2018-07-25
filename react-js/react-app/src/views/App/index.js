import React from 'react';
import logo from '../../logo.svg';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const AppView = () => {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React-App</h1>
        </header>
        <AppBar className="AppBar" position="static">
          <Toolbar className="Toolbar">
            <nav>
              <ul className="Menu">
                <li><a href="#">Counter</a></li>
                {/* <li><a href="#">CounterContainer</a></li>
                <li><a href="#">Task 3</a></li>   */}
              </ul>
            </nav>
          </Toolbar>
        </AppBar>     
      </div>
)}

export default withStyles(styles)(AppView);