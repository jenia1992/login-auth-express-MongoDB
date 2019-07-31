import React, { Component } from 'react';
import Layout from "./Container/Layout";
import Login from "./Container/Login";
import LandingPage from "./Container/LandingPage";
import SignUp from "./Container/SignUp";
import { Switch,Route } from "react-router-dom";
import './App.css';

class App extends Component { 
  componentDidMount(){

  }
  
    render(){
      const route=(
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/landingpage" component={LandingPage} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      )
    
    return (
      
      <Layout>
        {route}
      </Layout>
    );
  }
}

export default App;
