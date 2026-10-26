import "./App.css";
import TraineeCard from "./components/cards/TraineeCard";
import useLoading from "./hooks/useLoading";
import { Children, useCallback, useEffect, useRef } from "react";
import { useToggleWithCallback, useToggleWithoutCallback } from "./hooks/useToggle";

function App() {
  // const isLoading = useLoading(5000);

  // Tanpa menggunakan callback
  const without = useToggleWithoutCallback();
  // Menggunakan callback
  const withCallback = useToggleWithCallback();

  // simpan reference
  const prevWithout = useRef(without.toggle);
  const prevWithCallback = useRef(withCallback.toggle);

  useEffect(() => {
    console.log("toggle tanpa useCallback, referensinya sama", Object.is(prevWithout.current, without.toggle));

    console.log("toggle dengan useCallback, referensinya sama", Object.is(prevWithCallback.current, withCallback.toggle));

    prevWithout.current = without.toggle;
    prevWithCallback.current = withCallback.toggle;
  });

  // if (isLoading) {
  //   return (
  //     <div className="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
  //       <div className="flex animate-pulse space-x-4">
  //         <div className="size-10 rounded-full bg-gray-200"></div>
  //         <div className="flex-1 space-y-6 py-1">
  //           <div className="h-2 rounded bg-gray-200"></div>
  //           <div className="space-y-3">
  //             <div className="grid grid-cols-3 gap-4">
  //               <div className="col-span-2 h-2 rounded bg-gray-200"></div>
  //               <div className="col-span-1 h-2 rounded bg-gray-200"></div>
  //             </div>
  //             <div className="h-2 rounded bg-gray-200"></div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="flex flex-col">
      {/* <h1>Belajar HOC dengan withLoading</h1> */}
      {/* <TraineeCard firstName="King" lastName="Tashim" username="king_tashim" /> */}

      <h1>Belajar custom hooks useToggle with and without useCallback</h1>
      <h3>Tanpa menggunakan useCallback</h3>
      <p>{without.value ? "ON" : "OFF"}</p>
      <button onClick={without.toggle}>Toggle tanpa useCallback</button>

      <h3>Menggunakan useCallback</h3>
      <p>{withCallback.value ? "ON" : "OFF"}</p>
      <button onClick={withCallback.toggle}>Toggle menggunakan useCallback</button>
    </div>
  );
}

export default App;
