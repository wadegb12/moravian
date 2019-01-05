import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: '360px',
        backgroundColor: theme.palette.background.paper,
    },
});

const SideNav = ({ user, history }) => {
    const handleChange = (event, value) => {
        history.push(value)
    };
    return (
        <List 
            component="nav" 
            className={styles.root}
            // value={history.location.pathname}
            // onChange={handleChange}
        >
          
            <ListItem button>
                <ListItemText primary="Home" value="/"/>
            </ListItem>
            <Divider />
            <ListItem button divider>
                <ListItemText primary="Get A Quote" value="/GetAQuote"/>
            </ListItem>
            <ListItem button divider>
                <ListItemText primary="About Us" value="/AboutUs"/>
            </ListItem>

        </List>

      
    );
}

export default withStyles(styles)(SideNav);