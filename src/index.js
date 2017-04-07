import React from 'react'
import ReactDOM from 'react-dom'
import routes from './js/routes'
import App from './js/app'
import './style/main.css'
import { Router, browserHistory } from 'react-router'

ReactDOM.render(
  <Router history={browserHistory}>
    { routes }
  </Router>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept(routes, () => {
    render(
    <Router history={browserHistory}>
      { routes }
    </Router>,
    document.getElementById('root'));
  })
}
