import React from "react";
import Person from "./Person";

function PersonList() {
  //   const persons = [
  //     {
  //       id: 1,
  //       name: "Farzan",
  //       age: "24",
  //       skill: "MERN",
  //     },
  //     {
  //       id: 2,
  //       name: "Hamza",
  //       age: "24",
  //       skill: "Laravel",
  //     },
  //   ];

  const persons = ["Bruce", "Clark", "Diana", "Bruce"];

  const personList = persons.map((person, index) => {
    return <Person key={index} person={person} />;
  });

  return <div>{personList}</div>;
}

export default PersonList;
