import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import logo from '../../Assets/Logo.png';

const styles = {
};

const SideNav = ({ user, history }) => {
    return (
        <List 
            component="nav" 
            style={styles.root}
        >   
            <div>
                <img src={logo} width="50" height="50" style={{margin:"0 10px 0 0"}}/>
            </div>
            <Button component={Link} to="/">
                <Typography> Home </Typography>
            </Button>
            <Divider/>
            <Button component={Link} to="/GetAQuote">
                <Typography> Get A Quote </Typography>
            </Button>
            <Divider/>
            <Button component={Link} to="/AboutUs">
                <Typography > About Us </Typography>
            </Button>
        </List>
    );
}

export default withStyles(styles)(SideNav);