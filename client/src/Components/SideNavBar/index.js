import React from "react";
import Sidebar from "react-sidebar";
import SideNav from "../SideNav";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/IconButton';

const styles = {
    sideNavBackgroundColor: {
        background: "#323031",
    },
    iconColor: {
        color: "white",
    },
    sideBar: {
      background: "white",
      width: "100%",
      maxWidth: "50%",
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
                    styles={{ sidebar: styles.sideBar} }
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


