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
        background: "linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%)",
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
                <Tab label="Get A Quote" value="/GetAQuote" />
                <Tab label="About Us" value="/AboutUs" />
        
            </Tabs>
        </AppBar>
    )
}

export default withStyles(styles)(NavBar);