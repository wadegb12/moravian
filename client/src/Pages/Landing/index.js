import React from 'react'
import { Page } from '../../Components'
import Media from "react-media";
import SmallLandingPhoto from '../../Components/Landing/SmallLandingPage/Photo';
import SmallLandingText from '../../Components/Landing/SmallLandingPage/Text';
import LargeLandingPhoto from '../../Components/Landing/LargeLandingPage/Photo';
import LargeLandingText from '../../Components/Landing/LargeLandingPage/Text';

const LandingPage = ({ history }) => {

    return (
        <Page history={history}>
            <div >
                <Media query="(max-width: 805px)"> 
                    <div>
                        <SmallLandingPhoto/>
                        <SmallLandingText/>
                    </div>
                </Media>
                <Media query="(min-width: 806px) ">
                    <div>
                        <LargeLandingPhoto/>
                        <LargeLandingText/>
                    </div>
                </Media> 
            </div>
        </Page>
    )
}

export default LandingPage;

