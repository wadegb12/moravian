import React from 'react'
import './landing.css'
import { Page, Footer} from '../../Components'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import photo from '../../Assets/HeaderV2.jpg';
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
      
    //   [theme.breakpoints.down('xs')]: {
    //     width: '100% !important', // Overrides inline-style
    //     height: 100,
    //   },
    //   '&:hover, &$focusVisible': {
    //     zIndex: 1,
    //     '& $imageBackdrop': {
    //       opacity: 0.15,
    //     },
    //     '& $imageMarked': {
    //       opacity: 0,
    //     },
    //     '& $imageTitle': {
    //       border: '4px solid currentColor',
    //     },
    //   },
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
    responsiveImg: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      width: '100%',
      height: '100%'
    },
    imageTitle: {
      position: 'relative',
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
    },
    landingPhotoContainer: {
        position: 'relative',
        maxWidth: '100%',
        maxHeight: '100vh'
    }
  });

  const image = [
    {
      url: photo,
      title: 'Get a Quote',
      location: 'Oklahoma City, OK',
      width: '100%',
    //   height: '50%'
    },
  ];

const ResponsiveImage = ({ src, width, height, containerClass, imgClass }) => (
    <div className={containerClass} style={{width}} >
    <div style={{ paddingBottom:'55%' }} />
      <img
        src={src}
        className={imgClass}
      />
    </div>
);

const getHeightFromWidth = width =>
    Math.floor(5.5 * (width / 10));

const Landing = ({ history, classes }) => {
    return (
        <Page history={history}>
            <ResponsiveImage
                src={photo}
                width={100000}
                // height={getHeightFromWidth(window.innerWidth)}
                containerClass={classes.landingPhotoContainer}
                imgClass={classes.responsiveImg}
            />
        
        {/* <span
            className={classes.imageSrc}
            style={{ backgroundImage: `url(${image.url})`, }}
        /> */}
            {/* <div className={classes.root}>
                 {images.map(image => (  
                 <ButtonBase 
                    focusRipple
                     key={image.title}
                     className={classes.image}
                     focusVisibleClassName={classes.focusVisible}
                     style={{ width: image.width, }}
                > 
                    <span
                        className={classes.responsiveImg}
                        style={{ backgroundImage: `url(${image.url})`, }}
                    />
                    <span className={classes.imageButton}>
                        <Typography className={classes.imageTitle}> {image.title}Get a </Typography>
                        <Button>
                        <Typography
                            component="span"
                            variant="subtitle1"
                            color="inherit"
                            className={classes.imageTitle}
                        >
                            {image.title}
                        </Typography>
                        </Button>
                    </span>
                    <span className={classes.imageButton}>
                    </span>
                 </ButtonBase>  
                ))} 
            </div> */}
            <Footer />
        </Page>
    )
}

Landing.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landing);
