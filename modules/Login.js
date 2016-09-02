import React from 'react'
import { Link } from 'react-router'

import cookie from 'react-cookie'

import Loginform from './Forms/Loginform'
import Forgotten from './Forms/Forgotten'
import Register  from './Forms/Register'

import './../metronic/login_styles.css'

require('script!./../metronic/global/plugins/jquery-validation/js/jquery.validate.min.js');
require('script!./../metronic/global/plugins/jquery-validation/js/additional-methods.min.js');
require('script!./../metronic/global/plugins/select2/js/select2.full.min.js');
require('script!./../metronic/pages/scripts/login.min.js');

export default React.createClass({
    componentWillMount: function(){
        document.body.classList.add('login');
    },
    render() {
        return(
            <div>
                <div className="logo">
                    <a href="index.html">
                        <img src="metronic/pages/img/logo-big-white.png" style={{height: 17}} /> </a>
                </div>
                <div className="content">
                    <Loginform />
                    <Forgotten />
                    <Register />
                </div>
                <div className="copyright hide"> 2016 © Метатек ХХК </div>
            </div>
        )
    }
})