import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Paper from "@material-ui/core/Paper";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {submit} from '../redux/loginReducers';
import { connect } from 'react-redux';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            user:{}
        }
    }
    handleSubmit() {
        var userObject= {};
        var username= document.getElementById('username').value;
        var pwd= document.getElementById('password').value;
        if(username!=""&& pwd!=""){
            userObject.username = username;
            userObject.password = pwd;
            this.props.addSubmit(userObject)
            this.props.history.push('./counterapp')            
        }else {
            alert("username or password should not be empty.")
        }
        
    }
    componentWillReceiveProps(newProps) {
       if(newProps){
           this.setState({user:newProps.user.login.user})
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
                            <Button className="" size="medium" variant="raised" color="primary" onClick={this.handleSubmit.bind(this)}>
                                Login
                            </Button>
                        </div>            
                    </form>
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
		user:state
	}
}
const mapDispatchToProps = dispatch => {
    return {
        addSubmit:user=>dispatch(submit(user))
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Login));