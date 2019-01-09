import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import logo from '../../Assets/moravianLogo.png';

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

const SideNav = ({ classes }) => {
    return (
        <List 
            component="nav" 
            style={styles.root}
        >   
            <div align="center" style={{margin:"10px"}}>
                <img src={logo} width="144" height="144" />
            </div>
            <Button component={Link} to="/">
                <Typography className={classes.whiteColor}> Home </Typography>
            </Button>
            {/* <Divider/>
            <Button component={Link} to="/AboutUs">
                <Typography className={classes.whiteColor}> About Us </Typography>
            </Button> */}
            <Divider/>
            <Button component={Link} to="/GetAQuote">
                <Typography className={classes.whiteColor}> Get A Quote </Typography>
            </Button>
        </List>
    );
}

export default withStyles(styles)(SideNav);