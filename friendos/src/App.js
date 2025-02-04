import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

//components
import Nav from './components/Nav';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';


function App() {


  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/friends" component={FriendsList} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>

   
  );
}

export default App;