import React, { Component } from 'react'
import './Page.css'
import NavBar from '../NavBar'
import Media from "react-media";
import SideNav from '../SideNav';

class Page extends Component {
    render() {

        const { children, history, user } = this.props

        return (
                <div className="Page">
                    <Media query="(max-width: 599px)">
                        <SideNav user={user} history={history} />
                    </Media>
                    <Media query="(min-width: 599px)">
                        <NavBar user={user} history={history} />
                    </Media>
                    {children}
                </div>
        )
    }
}

export default Page;