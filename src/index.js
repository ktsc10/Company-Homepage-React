import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './i18n'
import './style.css'
import Solutions from './views/solutions'
import Home from './views/home'
import Contact from './views/contact'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Solutions} exact path="/solutions" />
        <Route component={Home} exact path="/" />
        <Route component={Contact} exact path="/contact" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
