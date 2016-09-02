import React          from 'react'
import { render }     from 'react-dom'

import { Router, Route, hashHistory } from 'react-router'
import cookie         from 'react-cookie'

import Header         from './modules/Header'
import App            from './modules/App'
import About          from './modules/About'

import Issue          from './modules/Components/Issue'

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/about" component={About}/>
            <Route path="/issue" component={Issue}/>
        </Route>
    </Router>
), document.getElementById('app'))


