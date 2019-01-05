import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';
import logo from '../../Assets/Logo.png';

const styles = {
    toolbar: {
        justifyContent: 'center',
        alignItems: 'center',
        background: "#323031",
        backgroundBlendMode: "multiply"
    }
}

const NavBar = ({ user, history }) => {
    const handleChange = (event, value) => {
        history.push(value)
    };
    return (
        <AppBar position="static">
            <Tabs
                value={history.location.pathname}
                onChange={handleChange}
                indicatorColor="secondary"
                scrollable
                scrollButtons="auto"
                style={styles.toolbar}
            >
                <img src={logo} width="50" height="50" style={{margin:"0 10px 0 0"}}/>
                <Tab label="Home" value="/" />
                <Tab label="About Us" value="/AboutUs" />
                <Tab label="Get A Quote" value="/GetAQuote" />
        
            </Tabs>
        </AppBar>
    )
}

export default withStyles(styles)(NavBar);