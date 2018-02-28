import React, {Component} from 'react';
import {Button, NavigationDrawer} from 'react-md';
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



        const navItemsObj = [
            {key: 0, primaryText: 'Home', route: '/', icon:  'home'},
            {key: 1, primaryText: 'Albums', route: '/albums', icon: 'view_stream' }
        ];

        const navItems = navItemsObj.map((item) => {
            return (
                <Link key={item.key} to={item.route}>
                    <Button  flat primary onClick={() => this.setPage(item.key, item.primaryText, item.route)}>
                        <MaterialIcon icon={item.icon} />
                    </Button>
                    {item.primaryText}
                </Link>
            );
        });

        return (
            <div>
                <NavigationDrawer
                    navItems={navItems}
                    mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
                    tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
                    desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
                    toolbarTitle="Hieno navigointi"
                    temporaryIcon={<MaterialIcon icon='menu'/>}
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


