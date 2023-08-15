import React, { Component } from "react";

class RefDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.callbacksRef = null;
    //method used to se the ref
    this.setCallbackRef = (element) => {
      this.callbacksRef = element;
    };
    this.state = {};
  }

  componentDidMount() {
    if (this.callbacksRef) {
      this.callbacksRef.focus();
    }
    this.inputRef.current.focus();
    console.log(this.inputRef);
  }
  clickHandler = () => {
    // alert(this.inputRef.current.value);
    alert(this.inputRef.current.value);
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setCallbackRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default RefDemo;
