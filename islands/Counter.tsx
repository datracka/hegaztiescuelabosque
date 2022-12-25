import { useState } from "preact/hooks";
import { JSX } from "preact/jsx-runtime";

export default function Counter(): JSX.Element {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue(value + 1);
    console.log("increment");
  };

  const decrement = () => {
    setValue(value - 1);
    console.log("decrement");
  };

  return (
    <>
      <div>Counter: {value}</div>
      <button type="button" onClick={increment}>
        Increment
      </button>
      <button type="button" onClick={decrement}>
        Decrement
      </button>
    </>
  );
}
