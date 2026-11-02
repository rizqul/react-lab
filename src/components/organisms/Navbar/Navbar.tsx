import { useSelector } from "react-redux";
import { NavLink } from "react-router";
import type { RootState } from "../../../store/store";

function Navbar() {
  const fullName = useSelector((state: RootState) => state.auth.fullname);

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex min-h-16 max-w-7xl flex-wrap items-center gap-4 px-4 py-3 sm:px-6 lg:px-8 justify-between">
        <NavLink to="/dashboard" className="mr-4 text-lg font-semibold text-slate-900">
          Tokonyadia
        </NavLink>
        <span className="text-sm text-slate-500">{fullName}</span>
      </div>
    </header>
  );
}

export default Navbar;
