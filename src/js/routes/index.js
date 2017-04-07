const React = require('react')
const { Route, browserHistory, IndexRoute } = require('react-router')
const App = require('../app').default
const Home = require('../pages/home').default
const NotFoundRoute = require('./404').default

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="*" component={NotFoundRoute} />
  </Route>
)

export default routes 
