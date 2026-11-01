import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { Navigate, Outlet, useLocation } from "react-router";

function AdminGuard() {
  const role = useSelector((state: RootState) => state.auth.role);
  const location = useLocation();

  if (role !== "ROLE_ADMIN" && role !== "ADMIN") {
    return <Navigate to={role ? "/dashboard" : "/login"} state={{ from: location }} replace />;
  }
  return <Outlet />;
}

export default AdminGuard;
