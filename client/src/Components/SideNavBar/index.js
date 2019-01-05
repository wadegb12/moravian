import React from "react";
import Sidebar from "react-sidebar";
import SideNav from "../SideNav";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/IconButton';

const styles = {
    sideNavBackgroundColor: {
        background: "linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%)",
    },
    iconColor: {
        color: "white",
    }

};

class SideNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    render() {
        return (
            <AppBar position="static">
                <Toolbar style={styles.sideNavBackgroundColor}/>
                <Sidebar
                    sidebar={<SideNav/>}
                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    styles={{ sidebar: { background: "white" } }}
                >
                    <Button onClick={() => this.onSetSidebarOpen(true)}>
                        <MenuIcon style ={styles.iconColor}/>
                    </Button>
                </Sidebar>
            </AppBar>
        );
    }
}

export default SideNavBar;


