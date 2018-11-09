import React, { Component } from 'react';
import {Button, Card, CardTitle, CardText,} from 'react-md';

class LoginPage extends Component {

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log(this.props);
        // The start method will wait until the DOM is loaded.
        this.props.firebaseui.start('#firebaseui-auth-container', this.props.firebaseConfig);
    }

    logUserOut() {
        console.log('LogUserOut');
        this.props.logout();
    }

    render() {
        return (
            <Card className="md-block-centered">
                <CardText>
                    <div id="firebaseui-auth-container"></div>
                    <Button className={'logout'} flat onClick={this.logUserOut.bind(this)}>Log out</Button>
                </CardText>
            </Card>
        );
    }
}

export default LoginPage;





