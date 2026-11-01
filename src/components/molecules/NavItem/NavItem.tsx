import { NavLink } from "react-router";

interface NavItemProps {
  label: string;
  to: string;
}

function NavItem({ label, to }: NavItemProps) {
  return <NavLink to={to} className={({ isActive }) => `block w-full rounded-md px-3 py-2 text-left text-sm font-medium transition-colors ${isActive ? "bg-blue-50 text-blue-700" : "text-slate-700 hover:bg-slate-100"}`}>{label}</NavLink>;
}

export default NavItem;
