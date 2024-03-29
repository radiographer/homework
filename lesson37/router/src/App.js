// import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import About from "./pages/About";
// import Home from "./pages/Home";
// import Users from "./pages/Users";

// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <div>
//           <nav>
//             <ul>
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/about">About</Link>
//               </li>
//               <li>
//                 <Link to="/users">Users</Link>
//               </li>
//             </ul>
//           </nav>

//           {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//           <Switch>
//             <Route path="/about">
//               <About />
//             </Route>
//             <Route path="/users">
//               <Users />
//             </Route>
//             <Route path="/">
//               <Home />
//             </Route>
//           </Switch>
//         </div>
//       </Router>
//     </div>
//   );
// }
// export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Topics from "./pages/Topics";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/about">
              <About />
            </Route>

            <Route path="/users">
              <Users />
            </Route>

            <Route path="/topics">
              <Topics />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
