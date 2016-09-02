
import React  from 'react'
import { Link } from 'react-router'

export default React.createClass({
    render() {
        return (
            <div className="page-sidebar-wrapper">
                <div className="page-sidebar navbar-collapse collapse">
                    <ul className="page-sidebar-menu   " data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200">
                        <li className="nav-item start active open">
                            <a href="javascript:;" className="nav-link nav-toggle">
                                <i className="icon-home"></i>
                                <span className="title">Удирдлагын самбар</span>
                                <span className="selected"></span>
                                <span className="arrow open"></span>
                            </a>
                            <ul className="sub-menu">
                                <li className="nav-item start">
                                    <Link to="/about" className="nav-link ">
                                        <i className="icon-bulb"></i>
                                        <span className="title">Хянах самбар</span>
                                        <span className="badge badge-success">1</span>
                                    </Link>
                                </li>
                                <li className="nav-item start">
                                    <a href="#" className="nav-link ">
                                        <i className="icon-bar-chart"></i>
                                        <span className="title">Хэрэглэгчийн веб</span>
                                        <span className="selected"></span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="heading">
                            <h3 className="uppercase">Модулиуд</h3>
                        </li>
                        <li className="nav-item  ">
                            <a href="javascript:;" className="nav-link nav-toggle">
                                <i className="fa fa-user"></i>
                                <span className="title"> Хэрэглэгч</span>
                                <span className="arrow"></span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <a href="javascript:;" className="nav-link nav-toggle">
                                <i className="fa fa-users"></i>
                                <span className="title"> Бүртгэгдсэн гишүүд</span>
                                <span className="arrow"></span>
                            </a>
                        </li>
                        <li className="nav-item  ">
                            <Link to="/issue" className="nav-link nav-toggle">
                                <i className="fa fa-thumbs-down"></i>
                                <span className="title"> Зөрчлүүдийн бүртгэл</span>
                                <span className="arrow"></span>
                            </Link>
                        </li>
                        <li className="nav-item  ">
                            <a href="javascript:;" className="nav-link nav-toggle">
                                <i className="fa fa-clipboard"></i>
                                <span className="title"> Мэдээ мэдээлэл</span>
                                <span className="arrow"></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
})