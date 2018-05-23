import React, {Component} from 'react';

import { increment, decrement, reset} from '../redux/reducers'
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
          <input type="button" value="increment" onClick={this.incrementCount.bind(this)}/>
          <input type="button" value="decrement" onClick={this.decrementCount.bind(this)}/>
        </div>
        <div>
          <span>count: </span>
          <span>{this.state.count}</span>
        </div>
        <div>
          <input type="button" value="RESET COUNT" onClick={this.reset.bind(this)}/>
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
