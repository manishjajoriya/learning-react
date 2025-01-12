import { useState } from "react";
import "./App.css";

function App() {
  // hooks
  let [counter, setCounter] = useState(15);

  // let counter = 5;

  const addValue = () => {
    // if (counter > 20) counter = 20;
    setCounter(counter + 1);
    setCounter(counter + 2);
    setCounter(counter + 3);
    setCounter(counter + 4);
  };

  const decValue = () => {
    counter -= 1;
    if (counter < 0) counter = 0;
    setCounter(counter);
  };

  return (
    <>
      <h1>Chai and React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={decValue}>Decrease value</button>
    </>
  );
}

export default App;
