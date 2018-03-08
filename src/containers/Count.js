import React, {Component} from 'react';

class Count extends Component {
  constructor(props){
    super(props);
    this.state={
      count:0
    }
  }
  incrementCount() {
    var count = this.state.count+1;
    this.setState({
      count
    })
  }
  decrementCount() {
    var count = this.state.count-1;
    this.setState({
      count
    })
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
      </div>
    )
  }
}

export default Count;
