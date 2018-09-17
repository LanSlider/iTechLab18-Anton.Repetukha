import React from 'react';
import Header from '../../components/Header/container/Header';
import FilmDetails from '../../components/FilmDetails/container/FilmDetails';

class MainPage extends React.PureComponent  {
    constructor(props) {
        super(props);
        this.state = {
         id: this.props.match.params.id,
        };
       }

      render() {
        return (
            <React.Fragment>
                <Header isAddCategoryMenu={false} />
                <FilmDetails id={this.state.id}/>
            </React.Fragment>
        )
    }
}

export default MainPage;