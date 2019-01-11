import React from "react";
import Sidebar from "react-sidebar";
import SideNav from "../SideNav";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/IconButton';
import logo from '../../Assets/moravianLogo.png';

const styles = {
    sideNavBar: {
        height: "70px",
        background: "#323031",
    },
    sideNavBarWidth: {
        marginRight: '5%',
        marginLeft: '5%'
    },
    icon: {
        top: '10px'
    },
    iconColor: {
        color: 'white',
    },
    sideNav: {
      width: '100%',
      maxWidth: '50%',
    },
    logo: {
        float: 'right',
        margin: '10px',
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
                <Toolbar style={styles.sideNavBar}/>
                <Sidebar
                    sidebar={<SideNav/>}
                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    styles={{ sidebar: styles.sideNav} }
                >
                    <div style={styles.sideNavBarWidth}>
                        <Button onClick={() => this.onSetSidebarOpen(true)} style={styles.icon}>
                            <MenuIcon style ={styles.iconColor}/>
                        </Button>

                        <img src={logo} alt="" width="50" height="50" style={styles.logo}/>
                    </div>
                </Sidebar>
            </AppBar>
        );
    }
}

export default SideNavBar;


