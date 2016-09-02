/**
 * Created by aliginch on 7/18/16.
 */

import React from 'react'

export default React.createClass({
    render(){
        return (
            <form className="forget-form" method="post">
                <div className="form-title">
                    <span className="form-title">Нууц үгээ мартсан тохиолдолд </span><br/>
                    <span className="form-subtitle">Имейл хаягаа доорх талбарт оруулснаар дахин сэргээх боломжтой.</span>
                </div>
                <div className="form-group">
                    <input className="form-control placeholder-no-fix" type="text" autoComplete="off" placeholder="Имейл хаяг" name="email" /> </div>
                <div className="form-actions">
                    <button type="button" id="back-btn" className="btn btn-default">Буцах</button>
                    <button type="submit" className="btn btn-primary uppercase pull-right">Илгээх</button>
                </div>
            </form>
        )
    }
})