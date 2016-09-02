/**
 * Created by aliginch on 7/18/16.
 */

import React    from 'react'
import {render} from 'react-dom'
import cookie   from 'react-cookie'

export default React.createClass({
    getInitialState: function() {
        return {
            email   : '',
            password: ''
        };
    },
    handleEmailChange: function(e) {
        this.setState({ email: e.target.value});
    },
    handlePasswordChange: function(e) {
        this.setState({password: e.target.value});
    },
    checkLogin: function (e) {
        e.preventDefault();
        var email = this.state.email.trim();
        var password = this.state.password.trim();

        if (!email || !password) {
            return;
        }

        $.ajax({
            url: 'http://localhost:8000/auth/check/'+email+'/'+password+'/',
            type: 'POST',
            dataType: 'JSON',
            cache: false,
            success: function(data) {
                if(data.status == 'success'){
                    cookie.save('_token', data.token);
                    cookie.save('_cp_mail', email);
                    location.reload();
                }
                if(data.status == 'fail'){
                    // render(
                    //     <div className="alert alert-danger">
                    //         <button className="close" data-close="alert"></button>
                    //         <span> Хэрэглэгчийн нэр эсвэл нууц үг буруу байна. </span>
                    //     </div>,
                    //     document.getElementById("loginInfo")
                    // );
                    alert('Хэрэглэгчийн нэр эсвэл нууц үг буруу байна.');
                }
            }.bind(this),
            error: function(xhr, status, err) {
                console.log(this.props.url, status, err.toString());
            }.bind(this)
        });

        this.setState({email: '', password: ''});
    },
    render() {
        return (
            <form className="login-form" onSubmit={this.checkLogin}>
                <div className="form-title">
                    <span className="form-title">Тавтай морилно уу.</span>
                </div>
                <div className="alert alert-danger display-hide">
                    <button className="close" data-close="alert"></button>
                    <span> Шаардлагатай талбаруудыг бөглөнө үү! </span>
                </div>
                <div className="form-group">
                    <label className="control-label visible-ie8 visible-ie9">Имейл хаяг</label>
                    <input className="form-control form-control-solid placeholder-no-fix" onChange={this.handleEmailChange} value={this.state.email} type="email" placeholder="Имейл хаяг" />
                </div>
                <div className="form-group">
                    <label className="control-label visible-ie8 visible-ie9">Нууц үг</label>
                    <input className="form-control form-control-solid placeholder-no-fix" onChange={this.handlePasswordChange} value={this.state.password} type="password" placeholder="Нууц үг" />
                </div>
                <div className="form-actions">
                    <input type="submit" className="btn red btn-block uppercase" value="Нэвтрэх" />
                </div>
                <div className="form-actions">
                    <div className="pull-left">
                        <label className="rememberme check">
                            <input type="checkbox" name="remember" value="1" />Намайг сана </label>
                    </div>
                    <div className="pull-right forget-password-block">
                        <a href="javascript:;" id="forget-password" className="forget-password">Нууц үгээ мартсан уу?</a>
                    </div>
                </div>
                <div className="login-options">
                    <ul className="social-icons pull-right">
                        <li>
                            <a className="social-icon-color facebook" data-original-title="facebook" href="javascript:;"></a>
                        </li>
                        <li>
                            <a className="social-icon-color twitter" data-original-title="Twitter" href="javascript:;"></a>
                        </li>
                        <li>
                            <a className="social-icon-color googleplus" data-original-title="Goole Plus" href="javascript:;"></a>
                        </li>
                        <li>
                            <a className="social-icon-color linkedin" data-original-title="Linkedin" href="javascript:;"></a>
                        </li>
                    </ul>
                </div>
                <div className="create-account">
                    <p>
                        <a href="javascript:;" className="btn-primary btn" id="register-btn">Бүртгүүлэх</a>
                    </p>
                </div>
            </form>
        );
    }
});