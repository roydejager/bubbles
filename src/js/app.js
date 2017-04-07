import React from 'react' 
import Header from './components/layout/header'

function App(props) {
  const { children } = props

  return(
    <div>
      {children}
    </div>
  )
}

export default App
