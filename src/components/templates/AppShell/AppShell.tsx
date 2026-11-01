import { Outlet } from "react-router";
import Footer from "../../organisms/Footer/Footer";
import Navbar from "../../organisms/Navbar/Navbar";
import Sidebar from "../../organisms/Sidebar/Sidebar";

function AppShell() {
  return <div className="flex min-h-screen flex-col bg-slate-50">
    <Navbar />
    <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col md:flex-row">
      <Sidebar />
      <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8"><Outlet /></main>
    </div>
    <Footer />
  </div>;
}

export default AppShell;
