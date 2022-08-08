import React, { Component, useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//fetch
//interface for fetching resources

//access or manipulates requests and response

//a basic fetch request

//fetching a JSON file across the network
//one argument the path to the resource that you want to fetch
//it directly does not return a json response body
//but it returns a promises that resolves with response object
//It does not return directly the json response body
//instead gives us a representation of HTTP response
//to extract JSON body from Response object we use json() method
//it returns a second promise and resolves , converts the response body text as JSON

// fetch("https://example.com", {
//   method: 'POST',
//   body: {id: titel}
// } );

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       items: [],
//       isLoaded: false,
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((json) => {
//         this.setState({
//           items: json,
//           isLoaded: true,
//         });
//       });
//   }

//   render() {
//     const { isLoaded, items } = this.state;

//     if (!isLoaded)
//       return (
//         <div>
//           <h1>Please wait for some time ...</h1>
//         </div>
//       );

//     return (
//       <div className="App">
//         <h1>Fetch data from an api in react</h1>
//         {items.map((item) => {
//           const { id, username, name, email } = item;
//           return (
//             <div className="col-6">
//               <div className="card">
//                 <div className="container">
//                   <h4>
//                     <b>User Name: {username} </b>
//                   </h4>
//                   <p>Full Name: {name}</p>
//                   <p>User_email {email} </p>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }

function App() {
  const [users, setUsers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  //component did mount
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setUsers(json);
  //       setIsLoaded(true);
  //     });
  // }, []);

  async function fetchUsersData() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();

      setUsers(data);
      setIsLoaded(true);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUsersData();
  }, []);

  if (!isLoaded)
    return (
      <div>
        <h1>Please wait for some time....</h1>
      </div>
    );

  return (
    <div className="App">
      <h1>Fetch data in react function component</h1>
      {users.map((user) => {
        const { id, username, name, email } = user;
        return (
          <div key={id} className="col-6">
            <div className="card">
              <div className="container">
                <h4>
                  <b>User Name: {username} </b>
                </h4>
                <p>Full Name: {name}</p>
                <p>User_email {email} </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
