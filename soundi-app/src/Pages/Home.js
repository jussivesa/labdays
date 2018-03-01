import React, { Component } from 'react';
import Header from '../Components/Header';
import ArtistList from '../Components/ArtistList';

class HomePage extends Component {



    render() {

        return (
            <div className="App">
                <Header title={'Top artists'}/>
                <ArtistList/>
            </div>
        );
    }
}

export default HomePage;





