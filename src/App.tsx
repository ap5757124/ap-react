import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {AppRouter} from "./router";

function App() {

  return (
    <div className="App">
      <AppRouter />
    </div>
  )
}

export default App
