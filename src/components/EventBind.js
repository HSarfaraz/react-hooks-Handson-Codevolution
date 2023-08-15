import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "hello",
    };
  }
  changeHandler = () => {
    this.setState({
      message: "Good bye",
    });
    console.log(this);
  };
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.changeHandler.bind(this)}>Click</button> */}
        {/* <button onClick={() => this.changeHandler()}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
