import React from 'react'
import { Link } from 'react-router'
import cookie from 'react-cookie'

import Home from './Home'
import Login from './Login'

export default React.createClass({
    render() {
        if(cookie.load('_token') != null){
            return (
                <div>
                    <Home content={this.props.children} />
                </div>
            )
        }
        else {
            return (
                <div>
                    <Login />
                </div>
            )
        }
    }
})