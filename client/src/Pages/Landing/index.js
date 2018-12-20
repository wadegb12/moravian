import React from 'react'
import './landing.css'
import { Page, Footer} from '../../Components'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import photo from '../../Assets/Header.jpg';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';

// const styles = theme => ({
//     button: {
//         margin: theme.spacing.unit,
//       },
// })

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      minWidth: 300,
      width: '100%',
    },
    image: {
      position: 'relative',
      height: 200,
      [theme.breakpoints.down('xs')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
      },
      '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $imageBackdrop': {
          opacity: 0.15,
        },
        '& $imageMarked': {
          opacity: 0,
        },
        '& $imageTitle': {
          border: '4px solid currentColor',
        },
      },
    },
    focusVisible: {},
    imageButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white,
    },
    imageSrc: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
      position: 'relative',
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
    },
  });

  const images = [
    {
      url: photo,
      title: 'Quote',
      width: '10%',
    },
  ];



const Landing = (props) => {
    const { history, classes } = props
    
    return (
        <Page history={history}>
            {/* <div style={{ textAlign:"center"}}> 
                <Typography style={{ fontSize: 40, padding: 10}}> 
                        Let us 
                        <Button variant="outlined" color="primary" >
                            cater
                        </Button>
                        your event 
                    <Typography style={{ fontSize: 20, padding: 10}}> 
                         Oklahoma City, OK
                    </Typography>
                </Typography>
                
                 <img src={photo} width="100%" height="50%" />
            </div>   */}
            
                <div className={classes.root}>
                {images.map(image => (
                <ButtonBase
                    focusRipple
                    key={image.title}
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}
                    style={{
                    width: image.width,
                    }}
                >
                    <span
                    className={classes.imageSrc}
                    style={{
                        backgroundImage: `url(${image.url})`,
                    }}
                    />
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
                    <Typography
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        className={classes.imageTitle}
                    >
                        {image.title}
                    </Typography>
                    </span>
                </ButtonBase>
                ))}
            </div>
            <Footer />
         </Page>
    )
}

Landing.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landing);





