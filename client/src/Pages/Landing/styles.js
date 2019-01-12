const styles = theme=> ({
    responsiveImg: {
        width:'100%',
    },
    landingPhotoContainer: {
        position: 'relative',
        width: '100%',
        maxHeight: '100vh'
    },  
    largeImageContainer: {
        width: '50%',
        background: "#323031"
    },
    image: {
        padding: '20px',
        width: '100%'
    },
    flex: {
        display: 'flex'
    },
    smallScreenImageSize: {
        padding: '20px',
        width: '100%',
    },
    background: {
        background: "#323031"
    },
    quoteText: {
        top: '25%',
        position: 'absolute',
        padding:'10px',
        border: '2px solid',
        minWidth:'250px',
        textAlign: 'center'
    },
    quoteTextContainer: {
        right: '40%',
        left: '40%'
    },
});

export default styles;