import React from "react";
import SideNav from "../SideNav";
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/IconButton';
import logo from '../../Assets/moravianLogo.png';

const styles = {
    sideNavBar: {
        background: "#323031",
    },
    sideNavBarWidth: {
        marginRight: '5%',
        marginLeft: '5%',
    },
    icon: {
        top: '10px'
    },
    iconColor: {
        color: 'white',
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
            left: false,
        };
    }

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {

        console.log(this.state)
        return (
            <AppBar position="static">
                <div style={styles.sideNavBar}>
                    <div style={styles.sideNavBarWidth}>
                        <SideNav open={this.state.left} toggleDrawer={this.toggleDrawer}/>
                        <Button open={this.state.left} onClick={this.toggleDrawer('left', true)} style={styles.icon}>
                            <MenuIcon style ={styles.iconColor}/>
                        </Button>

                        <img src={logo} alt="" width="50" height="50" style={styles.logo}/>
                    </div>
                </div>
            </AppBar>
        );
    }
}

export default SideNavBar;


