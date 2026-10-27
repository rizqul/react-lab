import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./components/pages/Login";
import MainLayout from "./components/layout/MainLayout";
import Home from "./components/pages/Home";
import About from "./components/pages/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
