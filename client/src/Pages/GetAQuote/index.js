import React from 'react'

import { Page } from '../../Components'
import QuoteForm from '../../Components/QuoteForm/QuoteForm'

const AboutUs = (props) => {
    return ( 
        <Page history={props.history}>
           <QuoteForm />
        </Page>
    )
}

export default AboutUs