import React, { createContext, useReducer } from 'react';
import './App.css';
import Value from './Value';


export const CountContext = createContext()
const initialState = 0

const reducer = (state, action) => {
   switch(action){
     case 'increment':
       return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;

   }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  console.log(count)
  
  return (
    <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>    
    <>
    <h1>{count}</h1>

      <Value/>
    </>
    </CountContext.Provider>
  );
}

export default App;
