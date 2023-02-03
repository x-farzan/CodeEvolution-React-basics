import React from "react";

function Person({ person }) {
  return (
    <div>
      <h1>
        Name: {person.name}, Age: {person.age}, Skill: {person.skill}
      </h1>
    </div>
  );
}

export default Person;
