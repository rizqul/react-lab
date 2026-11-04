import { useState } from "react";
import Button from "../components/atoms/Button/Button";

function Counter() {
  const [counter, setCounter] = useState(0);

  function handleIncrease() {
    setCounter((counter) => counter + 1);
  }

  function handleDecrease() {
    if (counter <= 0) return;

    setCounter(counter - 1);
  }

  return (
    <div className="mt-4 flex items-center gap-3">
      <Button onClick={handleDecrease}>Minus</Button>
      <h1 aria-live="polite" className="text-sm text-slate-600">
        Counter : {counter}
      </h1>
      <Button onClick={handleIncrease}>Plus</Button>
    </div>
  );
}

export default Counter;
