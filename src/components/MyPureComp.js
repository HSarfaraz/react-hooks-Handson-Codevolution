import React, { PureComponent } from "react";

class MyPureComp extends PureComponent {
  render() {
    return <div>Pure component {this.props.name}</div>;
  }
}

export default MyPureComp;
