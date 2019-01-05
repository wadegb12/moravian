import React from 'react'

import { Page, GetAQuoteForm } from '../../Components'

const AboutUs = (props) => {
    return ( 
        <Page history={props.history}>
           <GetAQuoteForm />
        </Page>
    )
}

export default AboutUs