import React, { Component } from "react";
import LifecycleB from "./LifecycleB";
class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Sarfaraz",
    };
    console.log("LifecycleA constructor");
  }

  //this method is called, when the component is re-rendered
  static getDerivedStateFromProps(props, state) {
    console.log("Lifecycle A getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("lifecycle A componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("Lifecycle A shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Lifecycle A getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("Lifecycle A componentDidUpdate");
  }

  changeState = () => {
    this.setState({
      name: "Sarfaraz Hussain",
    });
  };

  //read props and state and return JSX
  render() {
    console.log("Lifecycle A render");
    return (
      <div>
        <div>
          <div>Lifecycle A </div>
          <button onClick={this.changeState}>Change state</button>
          <LifecycleB />
        </div>
      </div>
    );
  }
}

export default LifecycleA;
