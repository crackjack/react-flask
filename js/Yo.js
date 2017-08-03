import React from 'react';

var Yo = React.createClass({
  incrementCount(){
    this.setState({
      count: this.state.count + 1
    });
  },
  
  getInitialState(){
    return {
      count: 0
    }
  },
  
  render() {
    return (
      <div className="one">
        <h5>Yo, people.</h5>
        <p>There are currently {this.state.count } people here</p>
        <button type="button" onClick={this.incrementCount}>+1 Yo</button>
      </div>
    );
  }
});

export default Yo;
