import React from 'react'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing.unit * 6,
    },
})

const Footer = ({classes }) => {

    return (<footer className={classes.footer}>
        {/* <Typography variant="title" align="center" gutterBottom>
            Moravian
        </Typography> */}
    </footer>)
}

export default withStyles(styles)(Footer);