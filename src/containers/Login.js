import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Paper from "@material-ui/core/Paper";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

import {submit} from '../redux/loginReducers';
import {userSignup} from '../redux/signupReducers';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            showSignup:true,
            user:{},
            addedUser:{}
        }
    }
    componentWillReceiveProps(newProps) {
        if(newProps){
            this.setState({
                user:newProps.data.login.user,
                addedUser:newProps.data.newUserData.signUP
            })
        }
    }
    handleLogin() {
        var userObject= {};
        var username= document.getElementById('username').value;
        var pwd= document.getElementById('password').value;
        if(username!=""&& pwd!=""){
            userObject.username = username;
            userObject.password = pwd;
            if(this.state.addedUser){
                if(userObject.username===this.state.addedUser.username || userObject.password===this.state.addedUser.pswd){
                    this.props.goLogin(userObject)
                    this.props.history.push('./counterapp') 
                }else {
                    alert("username or password mismatch.")
                }
                
            }else { }                      
        }else {
            alert("username or password should not be empty.")
        }
        
    }
    handleNewUser= ()=> {
        this.setState({
            showSignup:true
        },()=>{
            document.getElementById('fname').value="";
            document.getElementById('uname').value="";
            document.getElementById('email').value="";
            document.getElementById('pwd').value="";
        })
    } 
    userSignup = () => {
        var signup={}
        var fname= document.getElementById('fname').value;
        var uname= document.getElementById('uname').value;
        var email= document.getElementById('email').value;
        var pwd= document.getElementById('pwd').value;
        if(!fname|| !uname|| !email || !pwd){
            alert("Plese fill all the feilds!!")
        }else {
            signup.fullname=fname;
            signup.username=uname;
            signup.email=email;
            signup.pswd=pwd;
            this.props.addUser(signup);
            this.setState({
                showSignup:false
            },()=>{
                if(this.state.addedUser!=""){
                    document.getElementById('username').value=this.state.addedUser.username;
                    document.getElementById('password').value=this.state.addedUser.pswd;
                }               
            })
        }
    }
  render() {    
    return (
      <div className="login-center">
        <Grid container spacing={24}>
            <Grid item md={4} xs={3} sm={3} />
            <Grid item md={4} xs={3} sm={3}>
                <Paper style={{borderRadius:"5%"}}>
                    <div>
                        <img className="img-login" src="https://i.pinimg.com/originals/89/a6/bd/89a6bd634116fa8c4892fe73d76f0b19.jpg" />
                    </div>
                    {
                        (this.state.showSignup)?( 
                            <form container noValidate autoComplete="off" >   
                                <div>
                                    <TextField
                                    id="fname"
                                    label="Full Name"
                                    className="textField"                    
                                    margin="normal"
                                    required
                                    />  
                                </div>
                                <div>
                                    <TextField
                                    id="uname"
                                    label="User Name"
                                    className="textField"                    
                                    margin="normal"
                                    required
                                    />  
                                </div>
                                <div>
                                    <TextField
                                    id="email"
                                    label="Email"
                                    placeholder="eg: abc@gmail.com"
                                    className="textField"                    
                                    margin="normal"
                                    type="email"
                                    required
                                    />  
                                </div>    
                                <div>
                                    <TextField
                                    id="pwd"
                                    label="Password"
                                    className="textField"                    
                                    margin="normal"
                                    type="password"
                                    required
                                    />  
                                </div>  
                                <div className="login-submit"> 
                                    <Button onClick={this.userSignup.bind(this)} size="medium" variant="raised" color="primary">
                                        signup
                                    </Button>
                                </div>         
                            </form>    
                        ):(
                            <form container noValidate autoComplete="off">
                                <div>
                                    <TextField
                                    id="username"
                                    label="Username"
                                    className="textField"                    
                                    margin="normal"
                                    />  
                                </div>  
                                <div>
                                    <TextField
                                    id="password"
                                    label="Password"
                                    className="textField"                    
                                    margin="normal"
                                    type="password"
                                    />  
                                </div>  
                                <div className="login-submit">
                                    <Button size="medium" variant="raised" color="primary" onClick={this.handleLogin.bind(this)}>
                                        Login
                                    </Button>
                                    <Button style={{marginLeft:"50px"}} size="medium" variant="raised" color="primary" onClick={this.handleNewUser.bind(this)}>
                                        new user
                                    </Button>
                                </div>            
                            </form>
                        )
                    }                   
                </Paper>
            </Grid>
            <Grid item md={4} xs={3} sm={3} />
        </Grid>        
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
	return {
		data:state
	}
}
const mapDispatchToProps = dispatch => {
    return {
        goLogin: user => dispatch(submit(user)),
        addUser: newuser => dispatch(userSignup(newuser))
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Login));