import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import logo from '../../Assets/moravianLogo.png';
import Footer from '../Footer'
import styles from './styles'

const SideNav = (props) => {

    const { classes } = props;

    return (
        <Drawer open={props.open} onClose={props.toggleDrawer('left', false)}>
          <div
            style={styles.sideNav}
            tabIndex={0}
            role="button"
            onClick={props.toggleDrawer('left', false)}
            onKeyDown={props.toggleDrawer('left', false)}
          >
            <List>   
              <div align="center" style={{margin:"10px"}}>
                  <img src={logo} alt="" width="144" height="144" />
              </div>
              <Button component={Link} to="/">
                  <Typography className={classes.whiteColor}> Home </Typography>
              </Button>
              <Divider/>
              <Button component={Link} to="/GetAQuote">
                  <Typography className={classes.whiteColor}> Get A Quote </Typography>
              </Button>
            </List>
            <div className={classes.footer}>
              <Footer/>
            </div>
          </div>
        </Drawer>
    );
}

SideNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideNav);

