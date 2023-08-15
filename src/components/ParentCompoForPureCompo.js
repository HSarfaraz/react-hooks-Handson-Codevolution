import React, { Component } from "react";
import MemoCompo from "./MemoCompo";
// import MyPureComp from "./MyPureComp";
// import RegComp from "./RegComp";

class ParentCompoForPureCompo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Hussain",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Hussain",
      });
    }, 2000);
  }
  render() {
    console.log(
      "********************** Parent Component ********************************"
    );
    return (
      <div>
        Parent Component
        {/* <RegComp name={this.state.name} />
        <MyPureComp name={this.state.name} /> */}
        <MemoCompo name={this.state.name} />
      </div>
    );
  }
}

export default ParentCompoForPureCompo;
