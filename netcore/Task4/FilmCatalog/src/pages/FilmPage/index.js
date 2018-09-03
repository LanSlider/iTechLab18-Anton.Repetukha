import React from 'react';
import Header from '../../components/Header/container/Header';
import FilmDetails from '../../components/FilmDetails/container/FilmDetails';

class MainPage extends React.PureComponent  {
      render() {
        return (
            <React.Fragment>
                <Header isAddCategoryMenu={false} />
                <FilmDetails />
            </React.Fragment>
        )
    }
}

export default MainPage;