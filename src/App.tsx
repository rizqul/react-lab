import "./App.css";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";

// ada 3 cara styling
// 1. inline styling
// 2. internal styling
// 3. external styling (css biasa dan module css)

function App() {
  return (
    <div className="flex flex-col">
      {/* <Login /> */}
      <Register />
    </div>
  );
}

export default App;
