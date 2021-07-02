import React, { useState, useEffect } from "react";

function Counter({ defaultValue = 0, step = 1 }) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    console.log("useEffect");
  });

  const onMinus = (e) => {
    setValue(value - step);
  };

  const onPlus = (e) => {
    setValue(value + step);
  };
  return (
    <div>
      <button onClick={onMinus}>-</button>
      {value}
      <button onClick={onPlus}>+</button>
    </div>
  );
}

export default Counter;
