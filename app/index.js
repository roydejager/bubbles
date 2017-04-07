require("babel-register")()
require.extensions['.css'] = () => null
const express = require('express')
const path = require('path')
const port = process.env.PORT || 3000
const React = require('react')
const routes = require('../src/js/routes').default
const { renderToString } = require('react-dom/server')
const { match } = require('react-router') //match RoutingContext
const app = express()
const renderApp = require('./middleware/app').default

//Set the templating engine
app.set('view engine', 'ejs')
app.set('views', 'app/views')

app.use(require('./middleware'))

//The folder to host static files
app.use(express.static(path.join(__dirname, 'static')))

app.get('*', (request, response) => {
  match({ routes, location: request.url }, (err, redirectLocation, renderProps) => {
    
    response.render('index', { root: renderToString(renderApp(renderProps)) })
  })
})

//Starts the server
app.listen(port)
console.log("server started on port " + port)
