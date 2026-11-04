import { BrowserRouter } from "react-router";

import "./App.css";
import Counter from "./test/Counter";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <AppRoutes /> */}
        <Counter />
      </BrowserRouter>
    </>
  );
}

export default App;
