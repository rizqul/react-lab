import { useEffect, useState } from "react";
import "./App.css";
import TraineeCard from "./components/cards/TraineeCard";
import withLoading from "./hoc/withLoading";

function App() {
  const [loading, setLoading] = useState(true);
  const TraineeCardWithLoading = withLoading(TraineeCard);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col">
      <h1>Belajar HOC dengan withLoading</h1>

      <TraineeCardWithLoading loading={loading} firstName="King" lastName="Tashim" username="king_tashim" />
    </div>
  );
}

export default App;
