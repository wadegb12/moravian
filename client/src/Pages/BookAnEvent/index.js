import React from 'react'

import { Page, ComingSoon } from '../../Components'

const BookAnEvent = (props) => {
    return ( 
        <Page history={props.history}>
           <ComingSoon />
        </Page>
    )
}

export default BookAnEvent