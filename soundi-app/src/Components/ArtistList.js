import React, { Component } from 'react';
import {Button} from 'react-md';
import Album from './Album';
import { Grid, Cell } from 'react-md';
import axios from 'axios';
import Artist from './Artist';


class ArtistList extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {data: []};
    }
    componentDidMount() {
        this.getData();
    }

    getData() {
        const url = 'http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=e2a3921327feb585fb928e25176a6dbc&format=json';
        const that = this;
        axios.get(url)
            .then(function (response) {
                console.log(response);
                that.setState({
                    data: response
                });

            })
            .catch(function (error) {
                console.log(error);
            });

    }


    render() {

        const {data} = this.state;
        let artistArr = [];
        if (data.length !== 0) {
            const artistData = data.data.artists.artist;
            console.log(artistData);

            artistData.map(artist => {
                artistArr.push({
                    name: artist.name ? artist.name : 'Artist name not available',
                    imgUrl: artist.image[0]['#text'] ? artist.image[0]['#text'] : 'http://ziainsurance.com/theme/assets/img/img_placeholder.jpg'
                });
            });
            artistArr = artistArr.sort((a, b) => {
                if(a.name < b.name) return -1;
                if(a.name > b.name) return 1;
                return 0;
            });
        }


        return (
            <Grid>
                {
                    artistArr.map(artist => {
                        return (
                            <Artist key={artist.name} name={artist.name} imgUrl={artist.imgUrl}></Artist>
                        )
                    })
                }
            </Grid>
        );
    }
}

export default ArtistList;
