import { useState } from "react";

function Counter() {
  const [counter, setcounter] = useState(0);
  // let counter = 0;

  const increase = () => {
    // counter += 1;
    setcounter(counter + 1);
    console.log(counter);
  };

  const decrease = () => {
    // counter -= 1;
    setcounter(counter - 1);
    console.log(counter);
  };

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
    </>
  );
}

export default Counter;
