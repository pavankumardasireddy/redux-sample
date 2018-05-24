import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';

import { increment, decrement, reset} from '../redux/counterReducers'
import { connect } from 'react-redux'

class Count extends Component {
  constructor(props){
    super(props);
    this.state={
      count:0,
      user:this.props.data.login.user,
      open: false,
      vertical: null,
      horizontal: null
    }
    this.handleOpen= this.handleOpen.bind(this)
  }

  componentWillReceiveProps(newProps){
    if(newProps.data.login.user!=""&&newProps.data.counter!=""){
      var userData= newProps.data.login.user;
      var countData= newProps.data.counter;
    }  
      this.setState({
        count:countData,
        user:userData,
        open:true
      })      
  }
  componentWillMount(){
    if(!this.state.user){
      this.props.history.push('/')
    }
  }
  componentDidMount() {
    this.handleOpen();
  }
  handleOpen(){
    this.setState({
      open:true,
      vertical: 'top',
      horizontal: 'right' 
    })
  }
  handleClose = () => {
    this.setState({ open: false });
  };
  incrementCount() {
    this.props.increment()
  }
  decrementCount() {
    this.props.decrement()
  }
  reset() {
    this.props.reset()
  }

  render() {
    const { vertical, horizontal, open } = this.state;
    if(this.state.user){
      var username = this.state.user.username
    }
    return (
      <div style={{paddingTop:"150px"}}>
        <h1> Sample couter app using REDUX</h1>
        <div>
          <Grid container spacing={24}>
            <Grid item md={4} xs={3} sm={3}></Grid>
            <Grid item md={2} xs={3} sm={3}>
              <Button className="" size="small" variant="raised" color="default" onClick={this.incrementCount.bind(this)}>
                Increment
              </Button>
            </Grid>
            <Grid item  md={2} xs={3} sm={3}>
              <Button size="small" variant="raised" color="default" onClick={this.decrementCount.bind(this)}>
                Decrement
              </Button>
            </Grid> 
            <Grid item md={4} xs={3} sm={3}></Grid>
          </Grid>                
        </div>
        <div className="countPadding">
          <h3>count: {this.state.count}</h3>
        </div>
        <div className="countPadding">
        <Button size="small" variant="raised" color="secondary" onClick={this.reset.bind(this)}>
          RESET COUNT
        </Button>
        </div>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={this.state.open}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Hey!!  Welcome {username}</span>}
        />
      </div>
    )
  }
}


const mapStateToProps = (state)=>{    
	return {
		data:state
	}
}

const mapDispatchToProps = {
    increment,
    decrement,
    reset
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Count));