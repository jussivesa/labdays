import React, { Component } from 'react';
import {Button} from 'react-md';
import Album from './Album';
import { Grid, Cell } from 'react-md';
import axios from 'axios';

class AlbumList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            isGenre: null,
            genre: ''
        };

    }

    componentWillMount() {
        console.log('componentWill mount');
        console.log(this.props);
        this.getData();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.match.params !== nextProps.match.params
            && nextProps.match.params.genreName !== this.state.genre) {
            console.log('props are new');
            this.props = nextProps;
            this.setState({data: [], isGenre: true, genre: nextProps.match.params.genreName});
            this.getData();
        }
    }

    getData() {
        let artist;
        let genre;
        let url;
        if (this.props.match) {

            if (this.props.match.params.artistName) {
                this.setState({isGenre: false});
                artist = this.props.match.params.artistName;
                url = `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artist}&api_key=e2a3921327feb585fb928e25176a6dbc&format=json`;
            } else if (this.props.match.params.genreName) {
                this.setState({isGenre: true});
                genre = this.props.match.params.genreName;
                url = `http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=${genre}&api_key=e2a3921327feb585fb928e25176a6dbc&format=json`;
            }
        } else {
            artist = 'cher'
        }

        const that = this;
        axios.get(url)
            .then(function (response) {
                that.setState({
                    data: response
                });

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {

        const {data, isGenre} = this.state;
        let albumsArr = [];
        if (data.length !== 0) {

            if (!isGenre) {
                const albumsData = data.data.topalbums.album;

                albumsData.map(album => {
                    albumsArr.push({
                        name: album.name ? album.name : 'Album name unavailable',
                        artist: album.artist.name ? album.artist.name : 'Artist name unavailable',
                        imgUrl: album.image[3]['#text'] ? album.image[3]['#text'] : 'http://ziainsurance.com/theme/assets/img/img_placeholder.jpg',
                        playCount: album.playcount
                    });
                });
            } else {
                const albumsData = data.data.albums.album;

                albumsData.map(album => {
                    albumsArr.push({
                        name: album.name ? album.name : 'Album name unavailable',
                        artist: album.artist.name ? album.artist.name : 'Artist name unavailable',
                        imgUrl: album.image[3]['#text'] ? album.image[3]['#text'] : 'http://ziainsurance.com/theme/assets/img/img_placeholder.jpg',
                        playCount: 'No playcount available'
                    });
                });
            }
        }

        return (
            <Grid>
                {
                    albumsArr.map((album, i) => {
                        if (album.name === '(null)') {
                            if (albumsArr.length === 0) {
                                return <h2>No albums for this artist</h2>
                            }
                            return null
                        }
                        return (
                            <Album key={album.name + i} name={album.name}
                                   artist={album.artist} playCount={album.playCount} imgUrl={album.imgUrl} user={this.props.user}>

                            </Album>
                        )
                    })
                }
            </Grid>
        );
    }
}

export default AlbumList;
