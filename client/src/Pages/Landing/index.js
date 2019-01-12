import React from 'react'
import './landing.css'
import photo from '../../Assets/HeaderV2.jpg';
import { Page, ResponsiveImage} from '../../Components'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import pouringPhoto from '../../Assets/pouringCoffee.jpg';
import coffeeArtPhoto from '../../Assets/coffeeArt.jpg';
import Media from "react-media";
import { Typography } from '@material-ui/core';
import ButtonBase from '@material-ui/core/ButtonBase';
import styles from './styles'

// const images = [
//     {
//       url: '../../Assets/HeaderV2.jpg',
//       title: 'Breakfast',
//       width: '40%',
//     },
//   ];

const Landing = ({ history, classes, props }) => {
    // const { state } = props;

    return (
        <Page history={history}>
            <ResponsiveImage
                src={photo}
                width={100000}
                paddingBottom={55}
                containerClass={classes.landingPhotoContainer}
                imgClass={classes.responsiveImg}
            /> 
            {/* <div align= "center"  className={classes.getAQuoteContainer} >
                <Typography className={classes.getAQuoteText}>
                    Get A Quote
                </Typography>
                <Typography className={classes.getAQuoteText}>
                    Based in Oklahoma City, OK
                </Typography>
            </div> */}
            
            <Media query="(max-width: 669px)">
                <div align="center" className={classes.background}>
                    <img src={pouringPhoto} alt="" className={classes.image}/>
                    <img src={coffeeArtPhoto} alt="" className={classes.image}/>
                </div>
            </Media>
            <Media query="(min-width: 670px)">
                <div className={classes.flex}>
                    <div className={classes.largeImageContainer}>
                        <img src={pouringPhoto} alt="" className={classes.image}/>
                    </div>
                    <div className={classes.largeImageContainer}>
                    <img src={coffeeArtPhoto} alt="" className={classes.image}/>
                    </div>
                </div>
                
            </Media>
        </Page>
    )
}

Landing.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landing);




            // <div className={classes.root}>
            //     {images.map(image => (
            //     <ButtonBase
            //         focusRipple
            //         key={image.title}
            //         className={classes.image}
            //         focusVisibleClassName={classes.focusVisible}
            //         style={{
            //             width: image.width,
            //         }}
            //     >
            //         {/* <span
            //         className={classes.imageSrc}
            //         style={{
            //             backgroundImage: `url(${image.url})`,
            //         }}
            //         />*/}
            //         <span className={classes.imageBackdrop} /> 
            //         <span className={classes.imageButton}>
            //             <Typography
            //                 component="span"
            //                 variant="subtitle1"
            //                 color="inherit"
            //                 className={classes.imageTitle}
            //             >
            //                 {image.title}
            //                 <span className={classes.imageMarked} />
            //             </Typography>
            //         </span>
            //     </ButtonBase>
            //     ))}
            // </div>