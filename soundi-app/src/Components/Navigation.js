import React, {Component} from 'react';
import {Button, FontIcon, NavigationDrawer} from 'react-md';
import MaterialIcon, {colorPallet} from 'material-icons-react';
import { Link } from "react-router-dom";

class Navigation extends Component {

    constructor() {
        super();
        this.state = {
            visible: false,
        };
    }

    show = () => {
        this.setState({visible: true});
    };

    hide = () => {
        this.setState({visible: false, renderNode: null});
    };

    setPage = (key, page, route) => {
        console.log('Route to: ' + route);
    };

    render() {

console.log(this.props);
        const navItemsObj = [
            {key: 0, primaryText: 'Home', route: '/', icon:  'home'},
            {key: 1, primaryText: 'Login', route: '/login', icon:  'account_circle'},
            {key: 2, primaryText: 'Top Rock Albums', route: '/genre/rock/albums', icon: 'library_music' },
            {key: 3, primaryText: 'Top Disco Albums', route: '/genre/disco/albums', icon: 'library_music' },
        ];

        const navItems = navItemsObj.map((item) => {
            return (
                <Link key={item.key} to={item.route} className={'nav-link'}>
                    <Button icon primary onClick={() => this.setPage(item.key, item.primaryText, item.route)}>
                        <div style={{color: 'hotpink'}}>
                            <FontIcon secondary>{item.icon} </FontIcon>
                        </div>
                    </Button>
                    {item.primaryText}
                </Link>
            );
        });

        return (
            <div>
                <NavigationDrawer
                    className={'main-nav'}
                    navItems={navItems}
                    mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
                    tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
                    desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
                    toolbarTitle={`SoundiApp2018 signed user:  ${this.props.user ? this.props.user.email : 'no user signed in'} `}
                    temporaryIcon={<FontIcon secondary>menu</FontIcon>}
                    persistentIcon={<MaterialIcon icon ='arrow_back'/>}
                    contentClassName="md-grid">

                    { /* Render router inside Navigation main element */ }
                    {this.props.children}

                </NavigationDrawer>
            </div>
        );
    }
}

export default Navigation;


