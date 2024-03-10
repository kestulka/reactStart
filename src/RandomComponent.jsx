import React, { useState } from "react";

function MyComp() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    setName("Spongebob");
  };

  const incrementAge = () => {
    setAge(age + 1);
  };

  const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set name</button>

      <p>Age: {age}</p>
      <button onClick={incrementAge}>incrementAge</button>

      <p>Is employed?: {isEmployed ? "yes" : "no"}</p>
      <button onClick={toggleEmployedStatus}>Toggle status</button>
    </div>
  );
}

export default MyComp;
