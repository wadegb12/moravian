import React from 'react'
import { Page } from '../../Components'
import Media from "react-media";
import LargeLandingPage from '../../Components/Landing/LargeLandingPage';
import SmallLandingPage from '../../Components/Landing/SmallLandingPage';

const LandingPage = ({ history }) => {

    return (
        <Page history={history}>
            <div >
                <Media query="(max-width: 961px)"> 
                    <div>
                        <SmallLandingPage/>
                    </div>
                </Media>
                <Media query="(min-width: 962px) ">
                    <div>
                        <LargeLandingPage/>
                    </div>
                </Media> 
            </div>
        </Page>
    )
}

export default LandingPage;

