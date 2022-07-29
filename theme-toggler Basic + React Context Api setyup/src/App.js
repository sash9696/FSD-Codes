import React, { useContext } from 'react';
import {ThemeContext} from './ThemeProvider';
import './App.css'

function App() {
  const {toggle, toggleFunction} = useContext(ThemeContext)
 
  return (
    <div className='app' style={{backgroundColor: toggle ? 'pink' : 'white'}} >
       <h1> Context API</h1>
       <button onClick={toggleFunction} > Change the theme</button>
    </div>

  )
}

export default App