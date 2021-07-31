import React, { useState } from "react";

const Main = () => {
  const [show, setShow] = useState(false);
  const [numbers, setNumbers] = useState([]);
  const [counter, setCounter] = useState(1);

  const handleClick = () => {
    setShow(!show);
  };

  const handleCounter = () => {
    setCounter(counter + 1);

    if (counter > 5 && counter % 2 === 0) {
      const newNumbers = [...numbers, counter];
      setNumbers(newNumbers);
    }
  };
  console.log("show", show);
  console.log("numbers", numbers);
  return (
    <div>
      <h1>Hej, jestem Main.</h1>
      {show === true && <h3>{counter}</h3>}
      <button onClick={handleCounter}>Counter</button>
      <button onClick={handleClick}>
        {show ? "Hide value from Counter" : "Show in Console boolean"}
      </button>
    </div>
  );
};

export default Main;
