import React, { Component } from 'react';
import {Button, Card, CardText, CardTitle, Media, MediaOverlay} from 'react-md';


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
        const { name, artist, year, imgUrl} = this.props;

        return (
            <div>
                <Card className="cards__example md-cell md-cell--6 md-cell--8-tablet">
                    <Media>
                        <img src={imgUrl} alt="Nature from lorempixel" />
                        <MediaOverlay>
                            <CardTitle title={name} subtitle={`${artist} - ${year} `}>
                                <Button onClick={this.love.bind(this, name)} className="md-cell--right" icon>favorite</Button>Love ({likes})
                            </CardTitle>
                        </MediaOverlay>
                    </Media>
                    <CardText>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eleifend odio.
                            Vivamus quis quam eget augue facilisis laoreet. Aliquam egestas turpis pellentesque
                        </p>
                    </CardText>
                </Card>
            </div>
        );
    }
}

export default Album;
