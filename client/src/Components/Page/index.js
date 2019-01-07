import React, { Component } from 'react'
import './Page.css'
import NavBar from '../NavBar'
import Media from "react-media";
import SideNavBar from '../SideNavBar';
import Footer from '../Footer'

class Page extends Component {
    render() {

        const { children, history, user } = this.props

        return (
                <div className="Page">
                    <Media query="(max-width: 599px)">
                        <SideNavBar user={user} history={history} />
                    </Media>
                    <Media query="(min-width: 600px)">
                        <NavBar user={user} history={history} />
                    </Media>
                    {children}

                    <Footer/>
                </div>
        )
    }
}

export default Page;