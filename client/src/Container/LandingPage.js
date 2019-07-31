import React, { Component } from "react"
import { connect } from "react-redux";
import {removeToken,getToken} from "../LocalStorage/LocalStorage"
import {LOGOUT_USER} from "../Url/Url"
import * as actionType from "../Store/action/Index"

class LandingPage extends Component {

  logOutHandle=()=>{
    let data = {
      url: LOGOUT_USER,
      method: "post",
      data: {email:this.state.email},
      headers: {token:getToken()},
      params: ""
  }

  getDataFromServer(data).then(res => {
    // console.log("RESSSSSSSS",res)
    removeToken()
    this.props.history.push("/")
  }).catch(err => {
      console.log(err)
  })

  }
    render() {
        return (<div>
          <h1 className="LoginLogo">Landing Page</h1>
          <input type="submit" value="LogOut" className="btn btn-danger" onClick={this.logOutHandle}/>
            
        </div>)
    }
}

const mapStateHandler = state => {
  return {
      
  };
};
const mapStateDispatch = dispatch => {
  return {
      
  };
};

export default connect(mapStateHandler, null)(LandingPage) 