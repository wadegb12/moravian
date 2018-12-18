import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import logo from '../../Assets/Logo.png';

export default ({ user, history }) => {
    const handleChange = (event, value) => {
        history.push(value)
    };

    return (
        <AppBar position="static">
            {/* <Toolbar style={{ flex: 1, color: 'black', backgroundColor: 'white' }}>
                <img src={logo} width="50" height="50" />
                <Typography variant="title" style={{ flex: 1, textAlign: 'center' }}></Typography>
            </Toolbar> */}
            <img src={logo} width="50" height="50" />
            <Tabs
                value={history.location.pathname}
                onChange={handleChange}
                indicatorColor="secondary"
                scrollable
                scrollButtons="auto"
                style={styles.toolbar}
            >
                <Tab label="Home" value="/" />
                <Tab label="Book An Event" value="/BookAnEvent" />
                <Tab label="About Us" value="/AboutUs" />
        
            </Tabs>
        </AppBar>
    )
}

const styles = {
    toolbar: {
        justifyContent: 'center',
        alignItems: 'center',
        background: "linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%)",
        backgroundBlendMode: "multiply"
    }
}