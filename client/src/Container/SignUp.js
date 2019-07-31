import React, { Component } from "react"
import { connect } from "react-redux";
import * as actionType from "../Store/action/Index"
import {ADD_USER} from "../Url/Url"
import { getDataFromServer } from "../ManagerAxios/ManagerAxios";
import {setToken} from "../LocalStorage/LocalStorage"
class SignUp extends Component {
  constructor(props){
    super(props);
    this.state={
        name:"",
        email:"",
        password:"",
        passwordconfirm:"",
        isErr:false,
        isFull:false

  }
}
componentDidMount(){
  // console.log(localStorage.getItem("kaka"))
}
  onChangeHandler=(event)=>{
    // console.log(event.target.name,":",event.target.value)
    this.setState({[event.target.name]:event.target.value},()=>{
      if(this.state.name !== "" && this.state.email !== ""  && this.state.password !== ""  && this.state.passwordconfirm !== ""){
        this.setState({isFull:true})
      }
    })
  }
  SubmitHandler=event=>{
    event.preventDefault();
    console.log("SUBMIED")
    if(this.state.password === this.state.passwordconfirm){
            let data = {
                url: ADD_USER,
                method: "post",
                data: {name:this.state.name,email:this.state.email,password:this.state.password},
                headers: "",
                params: ""
            }

            getDataFromServer(data).then(res => {
              // console.log("RESSSSSSSS",res)
              setToken(res.data.token,this.state.email)
              this.props.history.push("/")
            }).catch(err => {
                console.log(err)
            })

      
    }
    else{
      this.setState({isErr:true})
    }
  }
  render() {
    return (
      <div>

        <h1 className="RegLogo">SignUp</h1>
        <form onSubmit={this.SubmitHandler} className="d-flex flex-column align-items-center">
        {this.state.isErr&&<p style={{color:"red"}}>password is not equal try again</p>}
          <label htmlFor="name">First Name</label>
          <input placeholder="First Name" type="text" value={this.state.name} onChange={event=>this.onChangeHandler(event)} id="name" name="name"  />

          <label htmlFor="email">Email</label>
          <input placeholder="example@gmail.com" type="email" value={this.state.email} onChange={event=>this.onChangeHandler(event)} id="email" name="email" />

          <label htmlFor="password">Password</label>
          <input placeholder="password" type="password" value={this.state.password} onChange={event=>this.onChangeHandler(event)} id="password" name="password" />

          <label htmlFor="passwordconfirm">Password Confirm</label>
          <input placeholder="password" type="password" value={this.state.passwordconfirm} onChange={event=>this.onChangeHandler(event)} id="passwordconfirm" name="passwordconfirm" />

          {this.state.isFull?<input className="btn btn-primary mt-1" type="submit" value="Register" />:<input className="btn btn-primary mt-1" type="submit" value="Register" disabled />}

        </form>
        

      </div>
    )
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

export default connect(mapStateHandler, null)(SignUp) 