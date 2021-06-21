import { useState } from "react";

export function Button() {

  //let counter = 0;

  const [counter, setCounter] = useState(0);

  function incr() {
    setCounter(counter + 1);
    console.log(counter);
  }

  return(
    <button onClick={incr}>{counter}</button>
  )
}