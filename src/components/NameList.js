import React from "react";
import Person from "./Person";

function NameList() {
  //   const names = ["Virat Kohli", "Rohit Sharma", "KL Rahul"];
  //   const nameList = names.map((name) => {
  //     return name;
  //   });
  const names = [
    "Shubhman Gill",
    "Shubhman Gill",
    "Prithivi Shaw",
    "Sarfaraz Khan",
  ];
  const persons = [
    {
      id: 1,
      name: "Rohit",
      age: 33,
      skill: "Batsman",
    },
    {
      id: 2,
      name: "Dhoni",
      age: 40,
      skill: "Keeper",
    },
    {
      id: 3,
      name: "Chahal",
      age: 31,
      skill: "Bowler",
    },
    {
      id: 4,
      name: "Ravindra",
      age: 33,
      skill: "All rounder",
    },
  ];
  //   const personList = persons.map((person) => (
  //     <Person key={person.id} person={person} />
  //   ));

  const namesList = names.map((name, index) => {
    return (
      <h2 key={index}>
        {index} {name}
      </h2>
    );
  });

  return (
    // <div>
    //   <h2>{nameList}</h2>
    // </div>
    <div>
      {/* <h2>{personList}</h2> */}
      <div>{namesList}</div>
    </div>
    // <div>
    //     <h2>{names[0]}</h2>
    //     <h2>{names[1]}</h2>
    //     <h2>{names[2]}</h2>
    // </div>

    // <div>
    //   {names.map((name) => (
    //     <h2>{name}</h2>
    //   ))}
    // </div>
  );
}

export default NameList;
