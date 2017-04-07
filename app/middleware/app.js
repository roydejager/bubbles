import React from 'react'
import { RouterContext } from 'react-router'


function renderApp(renderProps) {

  return <RouterContext { ...renderProps} />
}

export default renderApp