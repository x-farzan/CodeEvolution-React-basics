import React from "react";
import Person from "./Person";

function PersonList() {
  const persons = [
    {
      name: "Farzan",
      age: "24",
      skill: "MERN",
    },
    {
      name: "Hamza",
      age: "24",
      skill: "Laravel",
    },
  ];

  const personList = persons.map((person) => {
    return <Person person={person} />;
  });

  return <div>{personList}</div>;
}

export default PersonList;
