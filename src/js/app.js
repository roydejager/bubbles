import React from 'react' 
import Header from './components/layout/header'

function App(props) {
  const { children } = props

  return(
    <div>
      <Header/>
      <div>oegaboega</div>
      {children}
    </div>
  )
}

export default App
