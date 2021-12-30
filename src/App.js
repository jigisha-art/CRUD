import React from 'react';
import {BrowserRouter as  Router, Switch, Route,} from'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from './Components/Layout/Navbar';
import Contact from './Components/Contact';
import About from './Components/About';
import Home from './Components/Home';
import Userdetails from './Components/Userdetails';
import Signup from './Components/Signup';
import Adduser from './Components/Users/AddUser';
import Edituser from './Components/Users/EditUser';
import Viewusers from './Components/Users/Viewusers';
function App(props){
  return(
    <Router>
      <Navbar/>
        <Switch>
          <Route path = '/' exact component ={Home}/>
          <Route path = '/about'component ={About}/>
          <Route path = '/Contact'component ={Contact}/>
          <Route path = '/Userdetails'component ={Userdetails}/>
          <Route path = '/Signup'component ={Signup}/>
          <Route path = '/users/add'component ={Adduser}/>
          <Route path = "/users/edit/:id"component ={Edituser}/>
          <Route path = '/Viewusers/:id'component={Viewusers}/>
        </Switch>
   </Router>
  
  );
};
export default App;