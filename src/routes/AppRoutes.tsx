import { Route, Routes } from "react-router";
import MainLayout from "../components/layout/MainLayout";
import About from "../components/pages/About";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import NotFound from "../components/pages/NotFound";
import TodoList from "../components/pages/TodoList";
import User from "../components/pages/User";
import StudentGuard from "./StudentGuard";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/todos" element={<TodoList />} />
        <Route element={<StudentGuard />}>
          <Route path="/users" element={<User />} />
        </Route>
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
