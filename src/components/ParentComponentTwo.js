import React, { useCallback, useState } from "react";
import Age from "./Age";
import Salary from "./Salary";
import Title from "./Title";
import Button from "./Button";

function ParentComponentTwo() {
  console.log(`Parent Component`);

  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  //   const incrementAge = () => {
  //     setAge(age + 1);
  //   };

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  //   const incrementSalary = () => {
  //     setSalary(salary + 1000);
  //   };

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      Parent
      <Title />
      <Age age={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Salary salary={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
}

export default ParentComponentTwo;
