import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import instagramLogo from '../../Assets/instagram.png';
import facebookLogo from '../../Assets/facebookLogo.png';

const styles = theme => ({
    footer: {
        backgroundColor: "#323031",
        padding: theme.spacing.unit * 4,
    },
    footerTextColor: {
        color: "#DCDCDE"
    },
    imageSize: {
        width: "25px",
        height: "25px"
    }
})

const Footer = ({classes }) => {

    return (<footer className={classes.footer}>
        <div className="Footer" align="center" >
            <Typography className={classes.footerTextColor} variant="title" gutterBottom>
                Contact Us
            </Typography>
            <div>
                <a href="https://www.instagram.com/moraviancoffee/">
                    <img src={instagramLogo} alt="" className={classes.imageSize} style={{margin:"0 10px 0 0"}}/>
                </a>
                <a href="https://www.facebook.com/MoravianCoffee/">
                    <img src={facebookLogo} alt="" className={classes.imageSize}/>
                </a>
            </div>
        </div>
    </footer>)
}

export default withStyles(styles)(Footer);