import { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleReset = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <div className="bg-emerald-400 text-xl p-10 flex flex-col gap-4 rounded-md mx-auto mt-4">
      <h1 className="font-bold text-6xl text-center">{seconds}</h1>
      <button className="bg-red-400 p-2 rounded-lg" onClick={() => setIsRunning(false)}>Pause</button>
      <button className="bg-red-400 p-2 rounded-lg" onClick={() => setIsRunning(true)}>
        {seconds === 0 ? "Play" : "Resume"}
      </button >
      <button className="bg-red-400 p-2 rounded-lg" onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Timer;
