import React from 'react';
import LogInDialogView from '../view';
  
class LogInDialog extends React.PureComponent  {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleClick = () => {
        this.setState({ open: !this.state.open });
    };

    render() {
        return <LogInDialogView 
            handleClick={this.handleClick}
            open={this.state.open}
        />;
    }
}

export default LogInDialog;