import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { logout } from "../../../features/authSlice";
import NavItem from "../../molecules/NavItem/NavItem";
import Button from "../../atoms/Button/Button";

const navigation = [
  { label: "Dashboard", to: "/dashboard" },
  { label: "Users", to: "/users" },
];

function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());

    navigate("/login", {
      replace: true,
      state: null,
    });
  };
  return (
    <aside className="border-r border-slate-200 bg-white p-3 md:w-56 flex flex-col justify-between">
      <nav aria-label="Sidebar navigation" className="space-y-1">
        {navigation.map((item) => (
          <NavItem key={item.to} {...item} />
        ))}
      </nav>
      <Button type="button" onClick={handleLogout}>
        Logout
      </Button>
    </aside>
  );
}

export default Sidebar;
