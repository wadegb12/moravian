import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import instagramLogo from '../../Assets/instagram.png';
import facebookLogo from '../../Assets/facebookLogo.png';

const styles = theme => ({
    footer: {
        backgroundColor: "#323031",
        padding: theme.spacing.unit * 4,
        maxWidth: '100%',
        paddingTop: '32px',
        paddingBottom: '32px',
        paddingLeft: '0px',
        paddingRight: '0px',
    },
    footerTextColor: {
        color: "#DCDCDE"
    },
    emailText: {
        color: "#DCDCDE",
        paddingTop: '10px'
    },
    imageSize: {
        width: "25px",
        height: "25px"
    }
})

const Footer = ({classes }) => {

    return (
        <div>
            <footer className={classes.footer}>
                <div align="center" >
                    <Typography className={classes.footerTextColor} variant="title" gutterBottom>
                        Contact Us: 
                    </Typography>
                    <div>
                        <a href="https://www.instagram.com/moraviancoffee/">
                            <img src={instagramLogo} alt="" className={classes.imageSize} style={{margin:"0 10px 0 0"}}/>
                        </a>
                        <a href="https://www.facebook.com/MoravianCoffee/">
                            <img src={facebookLogo} alt="" className={classes.imageSize}/>
                        </a>
                    </div>
                    <Typography className={classes.emailText} variant="title" gutterBottom>
                        moraviancoffee@gmail.com
                    </Typography>
                </div>
            </footer>
        </div>
    )
}

export default withStyles(styles)(Footer);