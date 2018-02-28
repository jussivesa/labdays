import React, { Component } from 'react';
import AlbumList from '../Components/AlbumList';
import Header from '../Components/Header';

class AlbumPage extends Component {

    constructor(props) {
        super(props);
        console.log(props);


    }

    componentWillMount() {
        this.getData();
    }


    getData() {
        const url = 'http://api.soundcloud.com/tracks/13158665?client_id=YOUR_CLIENT_ID';

    }


    render() {

        const albums = [
            {
                name: 'Vice Mix',
                artist: 'Tycho',
                year: 2014,
                imgUlr: 'http://cdn.collider.com/wp-content/uploads/muppets-green-album-cover-01.jpg'
            },
            {
                name: 'Technicolour',
                artist: 'Peggy Gou',
                year: 2018,
                imgUlr: 'https://i.huffpost.com/gen/1282361/thumbs/o-ANDY-WARHOL-BANANA-570.jpg?1'
            }
        ];

        return (
            <div>
                <Header title={'Featured albums'}/>
                <AlbumList albums={albums}/>
            </div>
        );
    }
}

export default AlbumPage;
