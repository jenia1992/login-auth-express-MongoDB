import React, { Component } from "react"
import { connect } from "react-redux";
import {LOGIN_USER} from "../Url/Url";
import { getDataFromServer } from "../ManagerAxios/ManagerAxios";
import {setToken} from "../LocalStorage/LocalStorage";
import * as actionType from "../Store/action/Index";

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
        email:"",
        password:"",
        isErr:false,
        isFull:false

  }
}
  onChangeHandler=(event)=>{
    // console.log(event.target.name,":",event.target.value)
    this.setState({[event.target.name]:event.target.value},()=>{
      if(this.state.email !=="" && this.state.password !==""){
        this.setState({isFull:true})
      }
      
    })
  }
  SubmitHandler=(event)=>{
    event.preventDefault()
    let data = {
      url: LOGIN_USER,
      method: "post",
      data: {email:this.state.email,password:this.state.password},
      headers: "",
      params: ""
  }

    getDataFromServer(data).then(res => {
      console.log("RESSSSSSSS",res.data.message)
      if(res.data.message === "Auth successful"){
        setToken(res.data.token)
        this.props.history.push("/landingpage")
      }else if(res.data.message === "Auth failed"){
        this.setState({isErr:true})
      }
      
    }).catch(err => {
        console.log(err)
    })

  }

    render() {
        return (
        <div className="mt-5">
          
          <h1 className="LoginLogo">LOGIN</h1>
          <form onSubmit={this.SubmitHandler} className="d-flex flex-column align-items-center">
          {this.state.isErr&&<p style={{color:"red"}}>check your password</p>}
            <label  htmlFor="email">Email</label>
            <input placeholder="example@gmail.com" type="email" id="email" onChange={event=>this.onChangeHandler(event)} name="email"/>
            
            <label   htmlFor="password">Password</label>
            <input placeholder="password" type="password" id="password" onChange={event=>this.onChangeHandler(event)} name="password"/>
            
            
            {this.state.isFull?<input className="btn btn-primary mt-5" type="submit" value="Submit"/>:<input className="btn btn-primary mt-5" type="submit" value="Submit" disabled/>}
          </form>
          

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

export default connect(mapStateHandler, null)(Login) 