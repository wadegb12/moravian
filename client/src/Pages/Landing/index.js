import React from 'react'
import './landing.css'
import { Page, Footer} from '../../Components'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    
})

const Landing = (props) => {

    const { history } = props
    return (
        <Page history={history}>
            <div> test </div>
            <Footer />
        </Page>
    )
}

Landing.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landing);





