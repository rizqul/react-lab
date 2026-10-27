import React from "react";
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";
import { Outlet } from "react-router";

function MainLayout() {
  return (
    <div className="flex flex-col w-max bg-amber-200 min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
