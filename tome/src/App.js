import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Podcast from './components/pages/Podcast';
import Stories from './components/pages/Stories';
import Signup from './components/pages/Signup';
import Signin from './components/pages/Signin'
import Tome from './components/pages/Tome';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/stories' component={Stories} />
          <Route path='/tome' component={Tome} />
          <Route path='/tome' component={Podcast} />
          <Route path='/signin' component={Signin} />
          <Route path='/sign-up' component={Signup} />
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
