/**
 * Created by aliginch on 7/18/16.
 */

import React  from 'react'
import {Link} from 'react-router'

export default React.createClass({
    // getIssues: function(){
    //     $.ajax({
    //         url: 'http://localhost:8000/issuel/list,
    //         type: 'POST',
    //         dataType: 'JSON',
    //         cache: false,
    //         success: function(data) {
    //
    //         }.bind(this),
    //         error: function(xhr, status, err) {
    //             console.log(this.props.url, status, err.toString());
    //         }.bind(this)
    //     });
    // },
    render(){
        return(
            <div>
                <div className="page-head">
                    <div className="page-title">
                        <h1>Зөрчлийн мэдээлэл
                            <small>Бүртгэгдсэн зөрчлүүд</small>
                        </h1>
                    </div>
                </div>
                <ul className="page-breadcrumb breadcrumb">
                    <li>
                        <Link to="/about">Үндсэн хуудас</Link>
                        <i className="fa fa-circle"></i>
                    </li>
                    <li>
                        <span className="active">Зөрчлийн мэдээлэл</span>
                    </li>
                </ul>
                <div className="portlet box blue">
                    <div className="portlet-title">
                        <div className="caption">
                            <i className="fa fa-cogs"></i>Бүртгэгдсэн зөрчлүүд </div>
                        <div className="tools">
                            <a href="javascript:;" className="collapse" data-original-title="" title=""> </a>
                            <a href="#portlet-config" data-toggle="modal" className="config" data-original-title="" title=""> </a>
                            <a href="javascript:;" className="reload" data-original-title="" title=""> </a>
                            <a href="javascript:;" className="remove" data-original-title="" title=""> </a>
                        </div>
                    </div>
                    <div className="portlet-body">
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                <tr>
                                    <th> № </th>
                                    <th> Зураг </th>
                                    <th> Table heading </th>
                                    <th> Table heading </th>
                                    <th> Table heading </th>
                                    <th> Table heading </th>
                                    <th> Table heading </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td> 1 </td>
                                    <td> Table cell </td>
                                    <td> Table cell </td>
                                    <td> Table cell </td>
                                    <td> Table cell </td>
                                    <td> Table cell </td>
                                    <td> Table cell </td>
                                </tr>
                                <tr>
                                    <td> 2 </td>
                                    <td> Table cell </td>
                                    <td> Table cell </td>
                                    <td> Table cell </td>
                                    <td> Table cell </td>
                                    <td> Table cell </td>
                                    <td> Table cell </td>
                                </tr>
                                <tr>
                                    <td> 3 </td>
                                    <td> Table cell </td>
                                    <td> Table cell </td>
                                    <td> Table cell </td>
                                    <td> Table cell </td>
                                    <td> Table cell </td>
                                    <td> Table cell </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})