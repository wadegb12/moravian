import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import logo from '../../Assets/Logo.png';

const styles = {
    root: {
        height: "100%",
        background: "#323031"
    },
    backgroundColor: {
        width: "100%",
        background: "#323031",
    },
    whiteColor: {
        color: "#ffffff"
    },
};

const SideNav = ({ user, history }) => {
    return (
        <List 
            component="nav" 
            style={styles.root}
        >   
            <div style={styles.backgroundColor}>
                <img src={logo} width="144" height="144" style={{margin:"0 10px 0 0"}}/>
            </div>
            <Button component={Link} to="/">
                <Typography style={styles.whiteColor}> Home </Typography>
            </Button>
            <Divider/>
            <Button component={Link} to="/AboutUs">
                <Typography style={styles.whiteColor}> About Us </Typography>
            </Button>
            <Divider/>
            <Button component={Link} to="/GetAQuote">
                <Typography style={styles.whiteColor}> Get A Quote </Typography>
            </Button>
        </List>
    );
}

export default withStyles(styles)(SideNav);