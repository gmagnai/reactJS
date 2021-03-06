/**
 * Created by aliginch on 7/17/16.
 */

import React  from 'react'
import cookie from 'react-cookie'
import { Link } from 'react-router'


export default React.createClass({
    getInitialState: function() {
        var username = 'Тодорхойгүй';
        var email = cookie.load('_cp_mail');
        $.ajax({
            url: 'http://localhost:8000/auth/info/'+email+'/',
            type: 'POST',
            dataType: 'JSON',
            cache: false,
            success: function(data) {
                if(data.status == 'success'){
                    cookie.save('_cp_u_name',data.info[0].name);
                }
            }.bind(this),
            error: function(xhr, status, err) {
                console.log(this.props.url, status, err.toString());
            }.bind(this)
        });
        return {
            username: cookie.load('_cp_u_name')
        };
    },
    logout: function(){
        cookie.remove('_token');
        location.reload();
    },
    render() {
        return (
            <div className="page-header navbar navbar-fixed-top">
                <div className="page-header-inner ">
                    <div className="page-logo">
                        <a href="/">
                            <img src="metronic/layouts/layout4/img/logo-light.png" alt="logo" className="logo-default" /> </a>
                        <div className="menu-toggler sidebar-toggler">
                        </div>
                    </div>
                    <a href="javascript:;" className="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse"> </a>
                    <div className="page-actions">
                        <div className="btn-group">
                            <button type="button" className="btn red-haze btn-sm dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                <span className="hidden-sm hidden-xs">Actions&nbsp;</span>
                                <i className="fa fa-angle-down"></i>
                            </button>
                            <ul className="dropdown-menu" role="menu">
                                <li>
                                    <a href="javascript:;">
                                        <i className="icon-docs"></i> New Post </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <i className="icon-tag"></i> New Comment </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <i className="icon-share"></i> Share </a>
                                </li>
                                <li className="divider"> </li>
                                <li>
                                    <a href="javascript:;">
                                        <i className="icon-flag"></i> Comments
                                        <span className="badge badge-success">4</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <i className="icon-users"></i> Feedbacks
                                        <span className="badge badge-danger">2</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="page-top">
                        <form className="search-form" action="page_general_search_2.html" method="GET">
                            <div className="input-group">
                                <input type="text" className="form-control input-sm" placeholder="Search..." name="query" />
                            <span className="input-group-btn">
                                <a href="javascript:;" className="btn submit">
                                    <i className="icon-magnifier"></i>
                                </a>
                            </span>
                            </div>
                        </form>
                        <div className="top-menu">
                            <ul className="nav navbar-nav pull-right">
                                <li className="separator hide"> </li>
                                <li className="dropdown dropdown-extended dropdown-notification dropdown-dark" id="header_notification_bar">
                                    <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                        <i className="icon-bell"></i>
                                        <span className="badge badge-success"> 7 </span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="external">
                                            <h3>
                                                <span className="bold">12 pending</span> notifications</h3>
                                            <a href="page_user_profile_1.html">view all</a>
                                        </li>
                                        <li>
                                            <ul className="dropdown-menu-list scroller" style={{height: 250}} data-handle-color="#637283">
                                                <li>
                                                    <a href="javascript:;">
                                                        <span className="time">just now</span>
                                                    <span className="details">
                                                        <span className="label label-sm label-icon label-success">
                                                            <i className="fa fa-plus"></i>
                                                        </span> New user registered. </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:;">
                                                        <span className="time">3 mins</span>
                                                    <span className="details">
                                                        <span className="label label-sm label-icon label-danger">
                                                            <i className="fa fa-bolt"></i>
                                                        </span> Server #12 overloaded. </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:;">
                                                        <span className="time">10 mins</span>
                                                    <span className="details">
                                                        <span className="label label-sm label-icon label-warning">
                                                            <i className="fa fa-bell-o"></i>
                                                        </span> Server #2 not responding. </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:;">
                                                        <span className="time">14 hrs</span>
                                                    <span className="details">
                                                        <span className="label label-sm label-icon label-info">
                                                            <i className="fa fa-bullhorn"></i>
                                                        </span> Application error. </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:;">
                                                        <span className="time">2 days</span>
                                                    <span className="details">
                                                        <span className="label label-sm label-icon label-danger">
                                                            <i className="fa fa-bolt"></i>
                                                        </span> Database overloaded 68%. </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:;">
                                                        <span className="time">3 days</span>
                                                    <span className="details">
                                                        <span className="label label-sm label-icon label-danger">
                                                            <i className="fa fa-bolt"></i>
                                                        </span> A user IP blocked. </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:;">
                                                        <span className="time">4 days</span>
                                                    <span className="details">
                                                        <span className="label label-sm label-icon label-warning">
                                                            <i className="fa fa-bell-o"></i>
                                                        </span> Storage Server #4 not responding dfdfdfd. </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:;">
                                                        <span className="time">5 days</span>
                                                    <span className="details">
                                                        <span className="label label-sm label-icon label-info">
                                                            <i className="fa fa-bullhorn"></i>
                                                        </span> System Error. </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:;">
                                                        <span className="time">9 days</span>
                                                    <span className="details">
                                                        <span className="label label-sm label-icon label-danger">
                                                            <i className="fa fa-bolt"></i>
                                                        </span> Storage server failed. </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="separator hide"> </li>
                                <li className="dropdown dropdown-extended dropdown-inbox dropdown-dark" id="header_inbox_bar">
                                    <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                        <i className="icon-envelope-open"></i>
                                        <span className="badge badge-danger"> 4 </span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="external">
                                            <h3>You have
                                                <span className="bold">7 New</span> Messages</h3>
                                            <a href="app_inbox.html">view all</a>
                                        </li>
                                        <li>
                                            <ul className="dropdown-menu-list scroller" style={{height: 275}} data-handle-color="#637283">
                                                <li>
                                                    <a href="#">
                                                    <span className="photo">
                                                        <img src="metronic/layouts/layout3/img/avatar2.jpg" className="img-circle" alt="" /> </span>
                                                    <span className="subject">
                                                        <span className="from"> Lisa Wong </span>
                                                        <span className="time">Just Now </span>
                                                    </span>
                                                        <span className="message"> Vivamus sed auctor nibh congue nibh. auctor nibh auctor nibh... </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                    <span className="photo">
                                                        <img src="metronic/layouts/layout3/img/avatar3.jpg" className="img-circle" alt="" /> </span>
                                                    <span className="subject">
                                                        <span className="from"> Richard Doe </span>
                                                        <span className="time">16 mins </span>
                                                    </span>
                                                        <span className="message"> Vivamus sed congue nibh auctor nibh congue nibh. auctor nibh auctor nibh... </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                    <span className="photo">
                                                        <img src="metronic/layouts/layout3/img/avatar1.jpg" className="img-circle" alt="" /> </span>
                                                    <span className="subject">
                                                        <span className="from"> Bob Nilson </span>
                                                        <span className="time">2 hrs </span>
                                                    </span>
                                                        <span className="message"> Vivamus sed nibh auctor nibh congue nibh. auctor nibh auctor nibh... </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                    <span className="photo">
                                                        <img src="metronic/layouts/layout3/img/avatar2.jpg" className="img-circle" alt="" /> </span>
                                                    <span className="subject">
                                                        <span className="from"> Lisa Wong </span>
                                                        <span className="time">40 mins </span>
                                                    </span>
                                                        <span className="message"> Vivamus sed auctor 40% nibh congue nibh... </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                    <span className="photo">
                                                        <img src="metronic/layouts/layout3/img/avatar3.jpg" className="img-circle" alt="" /> </span>
                                                    <span className="subject">
                                                        <span className="from"> Richard Doe </span>
                                                        <span className="time">46 mins </span>
                                                    </span>
                                                        <span className="message"> Vivamus sed congue nibh auctor nibh congue nibh. auctor nibh auctor nibh... </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="separator hide"> </li>
                                <li className="dropdown dropdown-extended dropdown-tasks dropdown-dark" id="header_task_bar">
                                    <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                        <i className="icon-calendar"></i>
                                        <span className="badge badge-primary"> 3 </span>
                                    </a>
                                    <ul className="dropdown-menu extended tasks">
                                        <li className="external">
                                            <h3>You have
                                                <span className="bold">12 pending</span> tasks</h3>
                                            <a href="?p=page_todo_2">view all</a>
                                        </li>
                                        <li>
                                            <ul className="dropdown-menu-list scroller" style={{height: 275}} data-handle-color="#637283">
                                                <li>
                                                    <a href="javascript:;">
                                                    <span className="task">
                                                        <span className="desc">New release v1.2 </span>
                                                        <span className="percent">30%</span>
                                                    </span>
                                                    <span className="progress">
                                                        <span style={{width: '40%'}} className="progress-bar progress-bar-success" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                                                            <span className="sr-only">40% Complete</span>
                                                        </span>
                                                    </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:;">
                                                    <span className="task">
                                                        <span className="desc">Application deployment</span>
                                                        <span className="percent">65%</span>
                                                    </span>
                                                    <span className="progress">
                                                        <span style={{width: '65%'}} className="progress-bar progress-bar-danger" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">
                                                            <span className="sr-only">65% Complete</span>
                                                        </span>
                                                    </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:;">
                                                    <span className="task">
                                                        <span className="desc">Mobile app release</span>
                                                        <span className="percent">98%</span>
                                                    </span>
                                                    <span className="progress">
                                                        <span style={{width: '98%'}} className="progress-bar progress-bar-success" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100">
                                                            <span className="sr-only">98% Complete</span>
                                                        </span>
                                                    </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:;">
                                                    <span className="task">
                                                        <span className="desc">Database migration</span>
                                                        <span className="percent">10%</span>
                                                    </span>
                                                    <span className="progress">
                                                        <span style={{width: '10%'}} className="progress-bar progress-bar-warning" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                                                            <span className="sr-only">10% Complete</span>
                                                        </span>
                                                    </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:;">
                                                    <span className="task">
                                                        <span className="desc">Web server upgrade</span>
                                                        <span className="percent">58%</span>
                                                    </span>
                                                    <span className="progress">
                                                        <span style={{width: '58%'}} className="progress-bar progress-bar-info" aria-valuenow="58" aria-valuemin="0" aria-valuemax="100">
                                                            <span className="sr-only">58% Complete</span>
                                                        </span>
                                                    </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:;">
                                                    <span className="task">
                                                        <span className="desc">Mobile development</span>
                                                        <span className="percent">85%</span>
                                                    </span>
                                                    <span className="progress">
                                                        <span style={{width: '85%'}} className="progress-bar progress-bar-success" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                                            <span className="sr-only">85% Complete</span>
                                                        </span>
                                                    </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:;">
                                                    <span className="task">
                                                        <span className="desc">New UI release</span>
                                                        <span className="percent">38%</span>
                                                    </span>
                                                    <span className="progress progress-striped">
                                                        <span style={{width: '38%'}} className="progress-bar progress-bar-important" aria-valuenow="18" aria-valuemin="0" aria-valuemax="100">
                                                            <span className="sr-only">38% Complete</span>
                                                        </span>
                                                    </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown dropdown-user dropdown-dark">
                                    <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                        <span className="username username-hide-on-mobile"> {this.state.username} </span>
                                        <img alt="" className="img-circle" src="metronic/layouts/layout4/img/avatar9.jpg" /> </a>
                                    <ul className="dropdown-menu dropdown-menu-default">
                                        <li>
                                            <a href="page_user_profile_1.html">
                                                <i className="icon-user"></i> Хувийн мэдээлэл </a>
                                        </li>
                                        <li>
                                            <a href="page_user_login_1.html" onClick={this.logout}>
                                                <i className="icon-key"></i> Сүлжээнээс гарах </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown dropdown-extended quick-sidebar-toggler">
                                    <span className="sr-only">Toggle Quick Sidebar</span>
                                    <i className="icon-logout" onClick={this.logout}></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {this.props.children}
            </div>
        )
    }
})