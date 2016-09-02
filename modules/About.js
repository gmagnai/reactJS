/**
 * Created by aliginch on 7/16/16.
 */

import React from 'react'

export default React.createClass({
    render() {
        return (
            <div>
                <div className="page-head">
                    <div className="page-title">
                        <h1>Dashboard
                            <small>dashboard & statistics</small>
                        </h1>
                    </div>
                </div>
                <ul className="page-breadcrumb breadcrumb">
                    <li>
                        <a href="index.html">Home</a>
                        <i className="fa fa-circle"></i>
                    </li>
                    <li>
                        <span className="active">Dashboard</span>
                    </li>
                </ul>
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="dashboard-stat blue">
                            <div className="visual">
                                <i className="fa fa-comments"></i>
                            </div>
                            <div className="details">
                                <div className="number">
                                    <span data-counter="counterup" data-value="1349">0</span>
                                </div>
                                <div className="desc"> New Feedbacks </div>
                            </div>
                            <a className="more" href="javascript:;"> View more
                                <i className="m-icon-swapright m-icon-white"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="dashboard-stat red">
                            <div className="visual">
                                <i className="fa fa-bar-chart-o"></i>
                            </div>
                            <div className="details">
                                <div className="number">
                                    <span data-counter="counterup" data-value="12,5">0</span>M$ </div>
                                <div className="desc"> Total Profit </div>
                            </div>
                            <a className="more" href="javascript:;"> View more
                                <i className="m-icon-swapright m-icon-white"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="dashboard-stat green">
                            <div className="visual">
                                <i className="fa fa-shopping-cart"></i>
                            </div>
                            <div className="details">
                                <div className="number">
                                    <span data-counter="counterup" data-value="549">0</span>
                                </div>
                                <div className="desc"> New Orders </div>
                            </div>
                            <a className="more" href="javascript:;"> View more
                                <i className="m-icon-swapright m-icon-white"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="dashboard-stat purple">
                            <div className="visual">
                                <i className="fa fa-globe"></i>
                            </div>
                            <div className="details">
                                <div className="number"> +
                                    <span data-counter="counterup" data-value="89"></span>% </div>
                                <div className="desc"> Brand Popularity </div>
                            </div>
                            <a className="more" href="javascript:;"> View more
                                <i className="m-icon-swapright m-icon-white"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
        )
    }
})