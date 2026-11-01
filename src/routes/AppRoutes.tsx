import { Navigate, Route, Routes } from "react-router";
import AppShell from "../components/templates/AppShell/AppShell";
import LoginPage from "../components/pages/LoginPage/LoginPage";
import NotFound from "../components/pages/NotFound/NotFound";
import UserPage from "../components/pages/UserPage/UserPage";
import AuthLayout from "../components/templates/AuthLayout/AuthLayout";
import AuthGuard from "./AuthGuard";
import AdminGuard from "./AdminGuard";
import DashboardPage from "../components/pages/DashboardPage/DashboardPage";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
      <Route element={<AuthGuard />}>
        <Route element={<AppShell />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route element={<AdminGuard />}></Route>
          <Route path="/users" element={<UserPage />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
