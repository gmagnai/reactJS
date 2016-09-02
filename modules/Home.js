/**
 * Created by aliginch on 7/17/16.
 */

import React  from 'react'

import render from 'react-dom'

import Header  from './Header'
import Sidebar from './Sidebar'
import cookie  from 'react-cookie'

import './../metronic/mandatory.css'

// require('script!./../metronic/global/plugins/bootstrap/js/bootstrap.min.js');
// require('script!./../metronic/global/plugins/js.cookie.min.js');
// require('script!./../metronic/global/plugins/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js');
// require('script!./../metronic/global/plugins/jquery.blockui.min.js');
// require('script!./../metronic/global/plugins/uniform/jquery.uniform.min.js');
// require('script!./../metronic/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js');
//
require('script!./../metronic/pages/scripts/dashboard.min.js');
require('script!./../metronic/layouts/layout4/scripts/layout.min.js');
require('script!./../metronic/layouts/layout4/scripts/demo.min.js');
require('script!./../metronic/layouts/global/scripts/quick-sidebar.min.js');
//
// // require('script!./../metronic/global/plugins/moment.min.js');
// require('script!./../metronic/global/plugins/bootstrap-daterangepicker/daterangepicker.min.js');
// // require('script!./../metronic/global/plugins/morris/raphael-min.js');
// require('script!./../metronic/global/plugins/counterup/jquery.waypoints.min.js');
// require('script!./../metronic/global/plugins/counterup/jquery.counterup.min.js');
// // require('script!./../metronic/global/plugins/amcharts/amcharts/amcharts.js');
// // require('script!./../metronic/global/plugins/amcharts/amcharts/serial.js');
// // require('script!./../metronic/global/plugins/amcharts/amcharts/pie.js');
// // require('script!./../metronic/global/plugins/amcharts/amcharts/themes/light.js');
// // require('script!./../metronic/global/plugins/amcharts/amcharts/themes/patterns.js');
// // require('script!./../metronic/global/plugins/amcharts/amcharts/themes/chalk.js');
// // require('script!./../metronic/global/plugins/amcharts/ammap/ammap');
// // require('script!./../metronic/global/plugins/amcharts/ammap/maps/js/worldLow.js');
// // require('script!./../metronic/global/plugins/amcharts/amstockcharts/amstock.js');
// require('script!./../metronic/global/plugins/fullcalendar/fullcalendar.min.js');
// // require('script!./../metronic/global/plugins/flot/jquery.flot.min.js');
// // require('script!./../metronic/global/plugins/flot/jquery.flot.resize.min.js');
// // require('script!./../metronic/global/plugins/flot/jquery.flot.categories.min.js');
// // require('script!./../metronic/global/plugins/jquery-easypiechart/jquery.easypiechart.min.js');
// require('script!./../metronic/global/plugins/jquery.sparkline.min.js');
// // require('script!./../metronic/global/plugins/jqvmap/jqvmap/jquery.vmap.min.js');
// // require('script!./../metronic/global/plugins/jqvmap/jqvmap/maps/jquery.vmap.europe.js');
// // require('script!./../metronic/global/plugins/jqvmap/jqvmap/maps/jquery.vmap.russia.js');
// // require('script!./../metronic/global/plugins/jqvmap/jqvmap/maps/jquery.vmap.world.js');
// // require('script!./../metronic/global/plugins/jqvmap/jqvmap/maps/jquery.vmap.germany.js');
// // require('script!./../metronic/global/plugins/jqvmap/jqvmap/maps/jquery.vmap.usa.js');
// // require('script!./../metronic/global/plugins/jqvmap/jqvmap/maps/jquery.vmap.sampledata.js');

export default React.createClass({
    componentWillMount: function(){
        document.body.classList.add('page-container-bg-solid', 'page-header-fixed', 'page-sidebar-closed-hide-logo');
    },
    render(){
        return(
            <div>
                <Header />
                <div className="clearfix"></div>
                <div className="page-container">
                    <Sidebar />
                    <div className="page-content-wrapper">
                        <div className="page-content">
                            {this.props.content}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})