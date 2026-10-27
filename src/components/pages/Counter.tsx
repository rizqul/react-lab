import CounterDisplay from "../molecules/CounterDisplay";
import CounterControl from "../molecules/CounterControl";

function Counter() {
  return (
    <div className="bg-red-950 text-4xl p-10 flex-col gap-4 rounded-md mx-auto mt-4">
      <CounterDisplay />
      <CounterControl />
    </div>
  );
}

export default Counter;
