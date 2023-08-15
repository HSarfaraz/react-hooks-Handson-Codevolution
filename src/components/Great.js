import React from "react";

// function Greet() {
//   return <h1>Hello Sarfaraz</h1>;
// }

// const Greet = () => {
//   return <h1>Hello Sarfaraz</h1>;
// };

// const Greet = (props) => <h1>Hello {props.name}</h1>;
// const Greet = (props) => <h1>Hello {props.name}</h1>;
const Greet = (props) => {
  const { name, heroName, children } = props;
  console.log(name, heroName, children);
  return (
    <div>
      <h1>
        Hello {name} a.k.a. {heroName}{" "}
      </h1>
      <p>{children}</p>
    </div>
  );
};

export default Greet;
