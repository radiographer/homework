import React, { useState } from "react";

const Main = () => {
  const [show, setShow] = useState(false);
  const [counter, setCounter] = useState(1);

  const handleClick = () => {
    setShow(!show);
  };

  const handleCounter = () => {
    setCounter(counter + 1);
  };
  console.log(show);
  return (
    <div>
      <h1>Hej, jestem Main.</h1>
      {show === true && <h3>{counter}</h3>}
      <button onClick={handleCounter}>Counter</button>
      <button onClick={handleClick}>Show in Console boolean</button>
    </div>
  );
};

export default Main;
