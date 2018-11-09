import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {Avatar, Button, Card, CardText, CardTitle, Cell, Chip, Media, MediaOverlay} from 'react-md';


class Artist extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        const {name, imgUrl} = this.props;

        return (
            <div className={'artist-chip-container'}>
                <Link to={`/artist/${name.replace(' ', '-').toLowerCase().replace('.','')}/albums`} className={'artist-link'}>
                    <Chip
                        className={'artist-chip'}
                        label={name}
                        avatar={<Avatar src={imgUrl} role="presentation" />}
                    />
                </Link>
            </div>
        );
    }
}

export default Artist;
