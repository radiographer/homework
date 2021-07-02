import React, { useState, useEffect } from "react";

const Timer = ({}) => {
  console.log("timer");
  const [date, setDate] = useState(new Date());
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const inervalID = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(inervalID);
    };
  }, []);

  const header = <h1>Timer {date.toLocaleString()}</h1>;

  return (
    <div>
      {header}Counter: {counter}
      <button onClick={() => setCounter(counter + 1)}>Click</button>
    </div>
  );
};

export default Timer;
