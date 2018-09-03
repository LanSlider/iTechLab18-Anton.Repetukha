import React from 'react';
import Header from '../../components/Header/container/Header';
import FilmList from '../../components/FilmList/container/FilmList';

class MainPage extends React.PureComponent  {
      render() {
        return (
            <React.Fragment>
                <Header isAddCategoryMenu={true} />
                <FilmList />
            </React.Fragment>
        )
    }
}

export default MainPage;