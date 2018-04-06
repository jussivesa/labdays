import React, { Component } from 'react';
import {Button, Card, CardText, CardTitle, Cell, Media, MediaOverlay} from 'react-md';
import axios from 'axios';

class Album extends Component {

    constructor(props) {
        super(props);
        this.state = {
            likes: 0
        };

    }

    love(name) {
        console.log(this.props);
        this.setState({
            likes: this.state.likes + 1
        }, x => {
            axios.post('https://prod-00.westeurope.logic.azure.com:443' +
                '/workflows/355c383be95640ef8c2f32ef5b01139c/triggers/manual/paths' +
                '/invoke?api-version=2016-10-01' +
                '&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0' +
                '&sig=JgZsqt7RB3CI1-MuA3NDf8xRm8xnl1UP6Jzz5mWXzxQ', {
                "likes": this.state.likes,
                "album": name,
                "user": this.props.user.email
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        });

    }

    render() {

        const {likes} = this.state;
        const { album } = this.props;
        const { name, artist, playCount, imgUrl} = this.props;

        return (
            <Cell size={3} tabletSize={4} phoneSize={12}>
                <Card className={'album-card'}>
                    <Media aspectRatio="1-1">
                        <img src={imgUrl} alt="Album art" />
                    </Media>
                    <CardText className={'album-card-text'}>
                        <CardTitle className={'album-card-title'} title={name ? `${name.substring(0, 50)}...` : null} subtitle={`${artist} - Played ${playCount} times`}>
                            <Button flat primary onClick={this.love.bind(this, name)}
                                    className="md-cell--right" iconChildren="favorite" style={{color: 'hotpink'}}>{likes}</Button>
                        </CardTitle>
                    </CardText>
                </Card>
            </Cell>
        );
    }
}

export default Album;
