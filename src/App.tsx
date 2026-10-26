import "./App.css";
import AppProviders from "./providers/AppProviders";
import CounterDisplay from "./context/CounterDisplay";
import CounterControl from "./context/CounterControl";

function App() {
  return (
    <div className="flex flex-col">
      <AppProviders>
        <CounterDisplay />
        <CounterControl />
      </AppProviders>
    </div>
  );
}

export default App;
