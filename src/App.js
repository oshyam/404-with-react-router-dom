import React from 'react'
import './App.css';

//React-Router DOM
import {BrowserRouter as Router, Route,Switch,Link} from "react-router-dom"

//Components
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";


const App=()=> {
  return (
    <Router>
       <div>
    <ul>
      <li><Link to="/Home">Back to Home</Link></li>
      <li><Link to="/About">About</Link></li>
      <li><Link to="/Contact">Contact</Link></li>

    </ul>
    </div>


    <Switch>
    <Route exact path="/Home" component={Home}/>
    <Route exact path="/About" component={About}/>
    <Route exact path="/Contact" component={Contact}/>
    <Route exact path="/*" component={PageNotFound}/>

    </Switch>
  </Router>
  )
}

export default App;