import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const styles = {
};

const SideNav = ({ user, history }) => {
    return (
        <List 
            component="nav" 
            style={styles.root}
        >   
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