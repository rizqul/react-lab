import "./App.css";
import CounterDisplay from "./components/molecules/CounterDisplay";
import CounterControl from "./components/molecules/CounterControl";
import { Provider } from "react-redux";
import { store } from "./store/store";
import TodoList from "./components/pages/TodoList";

function App() {
  return (
    <div className="flex flex-col">
      <Provider store={store}>
        <CounterDisplay />
        <CounterControl />
        <TodoList />
      </Provider>
    </div>
  );
}

export default App;
