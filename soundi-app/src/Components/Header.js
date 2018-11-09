import React, { Component } from 'react';


class Header extends Component {

    constructor(props) {
        super(props);
        console.log(props);

    }



    render() {


        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title">{this.props.title}</h1>
                </header>
            </div>
        );
    }
}

export default Header;
