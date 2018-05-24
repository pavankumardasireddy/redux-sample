import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { increment, decrement, reset} from '../redux/counterReducers'
import { connect } from 'react-redux'

class Count extends Component {
  constructor(props){
    super(props);
    this.state={
      count:0
    }
  }

  componentWillReceiveProps(newProps){
		console.log(JSON.stringify(newProps))
		this.setState({
			count:newProps.count
		})
  }
  
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
    return (
      <div>
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
          <h3>count: {this.state.count.counter}</h3>
        </div>
        <div className="countPadding">
        <Button size="small" variant="raised" color="secondary" onClick={this.reset.bind(this)}>
          RESET COUNT
        </Button>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state)=>{
	return {
		count:state
	}
}

const mapDispatchToProps = {
    increment,
    decrement,
    reset
}

export default connect(mapStateToProps,mapDispatchToProps)(Count);
