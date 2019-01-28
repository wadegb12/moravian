import React from 'react'
import { Page } from '../../Components'
import Media from "react-media";
import SmallLandingPhoto from '../../Components/Landing/SmallLandingPage/Photo';
import SmallLandingText from '../../Components/Landing/SmallLandingPage/Text';
import LargeLandingPage from '../../Components/Landing/LargeLandingPage';

const LandingPage = ({ history }) => {

    return (
        <Page history={history}>
            <div >
                <Media query="(max-width: 961px)"> 
                    <div>
                        <SmallLandingPhoto/>
                        <SmallLandingText/>
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

