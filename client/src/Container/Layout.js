import React, { Component } from 'react';
import Header from "./Header"
class Layout extends Component {
  constructor(props){
    super(props);
  }
  
  render(){
    return (
      <div >
        <Header/>
        <div className="container text-center">
          {this.props.children}
        </div>
           
      </div>
      
    );
  }
}

export default Layout;