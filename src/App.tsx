import "./App.css";
import CounterDisplay from "./components/molecules/CounterDisplay";
import CounterControl from "./components/molecules/CounterControl";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <div className="flex flex-col">
      <Provider store={store}>
        <CounterDisplay />
        <CounterControl />
      </Provider>
    </div>
  );
}

export default App;
