import React, { Component } from 'react';
import {Button, Card, CardText, CardTitle, Cell, Media, MediaOverlay} from 'react-md';


class Album extends Component {

    constructor(props) {
        super(props);
        console.log(props);

        this.state = {
            likes: 0
        };

    }

    love(name) {
        console.log(`liked ${name}`);
        this.setState({
            likes: this.state.likes + 1
        });
    }

    render() {

        const {likes} = this.state;
        const { album } = this.props;
        const { name, artist, playCount, imgUrl} = this.props;

        return (
            <Cell size={3}>
                <Card className={'album-card'}>
                    <Media>
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
