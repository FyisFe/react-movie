import React from 'react'

// Styles
import { GlobalStyle } from './GlobalStyle'

// Components
import Header from './components/Header/index.js'
import Home from './components/Home.js'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  )
}

export default App
