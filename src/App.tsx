import "./App.css";
import AppProviders from "./providers/AppProviders";
import CounterDisplay from "./components/molecules/CounterDisplay";
import CounterControl from "./components/molecules/CounterControl";

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
