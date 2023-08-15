import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Sarfaraz</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    //Short circuit operator
    // return this.state.isLoggedIn && 'Welcome Sarfaraz'
    // return this.state.isLoggedIn && "Welcome Sarfaraz"
    // return this.state.isLoggedIn && 'Welcome Sarfaraz'
    return this.state.isLoggedIn && 'Welcome Sarfaraz'

    // let message;
    // if(this.state.isLoggedIn){
    //     message = 'Welcome Sarfaraz'
    // }else{
    //     message = 'Welcome Guest'
    // }
    // return <div>{message}</div>

    // if(this.state.isLoggedIn){
    //     return (
    //         <div>Welcome Sarfaraz</div>
    //     )
    // }else{
    //     return(
    //         <div>Welcome Guest</div>
    //     )
    // }
    // return (
    //     <div>
    //   <div>Welcome Sarfaraz</div>
    //   <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting;
