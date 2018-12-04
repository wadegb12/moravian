import React, { Component } from 'react'
import './Page.css'
import NavBar from '../NavBar'

class Page extends Component {
    render() {

        const { children, history, user } = this.props

        return (
                <div className="Page">
                    <NavBar user={user} history={history} />
                    {children}
                </div>
        )
    }
}

export default Page;