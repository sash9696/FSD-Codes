import React, { useContext } from 'react';

export const UserContext = React.createContext();

export default function App() {
  return (
    <UserContext.Provider value="James Bond">
      <User />
    </UserContext.Provider>
  )
}

function User() {
    const context = useContext(UserContext)
  return (
    // <UserContext.Consumer>
    //   {value => <h1>{value}</h1>} 
    //   {/* prints: James Bond */}
    // </UserContext.Consumer> OR
    <h1>{context}</h1>


  )
}