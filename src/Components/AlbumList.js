import React, { Component } from 'react';
import {Button} from 'react-md';
import Album from './Album';

class AlbumList extends Component {

    constructor(props) {
        super(props);
        console.log(props);

    }

    render() {
        const { albums } = this.props;

        return (
            <div>
                {
                    albums.map(album => {
                        return (
                            <Album key={album.name} name={album.name}
                                   artist={album.artist} year={album.year} imgUrl={album.imgUlr}>
                            </Album>
                        )
                    })
                }
            </div>
        );
    }
}

export default AlbumList;
