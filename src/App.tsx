import "./App.css";
import TraineeCard from "./components/cards/TraineeCard";
import useLoading from "./hooks/useLoading";

function App() {
  const isLoading = useLoading(5000);

  if (isLoading) {
    return (
      <div className="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
        <div className="flex animate-pulse space-x-4">
          <div className="size-10 rounded-full bg-gray-200"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 rounded bg-gray-200"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 h-2 rounded bg-gray-200"></div>
                <div className="col-span-1 h-2 rounded bg-gray-200"></div>
              </div>
              <div className="h-2 rounded bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <h1>Belajar HOC dengan withLoading</h1>
      <TraineeCard firstName="King" lastName="Tashim" username="king_tashim" />
    </div>
  );
}

export default App;
