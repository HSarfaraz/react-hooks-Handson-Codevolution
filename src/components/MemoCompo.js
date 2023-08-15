import React from "react";

function MemoCompo({ name }) {
  console.log("Rending memo component");
  return <div>{name}</div>;
}

export default React.memo(MemoCompo);
