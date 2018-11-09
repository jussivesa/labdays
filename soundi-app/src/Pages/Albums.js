import React, {Component} from 'react';
import AlbumList from '../Components/AlbumList';
import Header from '../Components/Header';

class AlbumPage extends Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {

        return (
            <div>
                <Header title={'Featured albums'}/>
                <AlbumList />
            </div>
        );
    }
}

export default AlbumPage;
