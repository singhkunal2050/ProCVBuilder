import React from "react";
import { useState } from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

function Navbar() {
  const [sidebarState, setsidebarState] = useState(false);

  function toogleSidebar() {
    setsidebarState(!sidebarState);
    console.log(sidebarState);
  }

  return (
    <nav className="text-fuchsia-700 md:text-slate-100 py-4 px-4 border-b-2 bg-fuchsia-600 top-0 z-10 sticky">
      <Container>
        <section className="flex justify-between items-center">
          <div className="text-2xl font-extrabold z-20">
            <Link
              to="/"
              onClick={() => setsidebarState(false)}
              className="flex justify-center items-center z-20 text-white"
            >
              <h3>ProCVBuilder</h3>
            </Link>
          </div>
          <div className="menu hidden md:flex">
            <Link className="py-2 px-4   hover:bg-fuchsia-500" to="/">
              Home
            </Link>
            <Link className="py-2 px-4   hover:bg-fuchsia-500" to="/about">
              About
            </Link>
          </div>

          <div className="hamburger-menu flex justify-center items-center md:hidden">
            <button
              className="hamburger-menu-btn bg-white px-2 py-1 z-20"
              onClick={toogleSidebar}
            >
              |||
            </button>
          </div>

          <div
            className={
              "mobile-menu absolute inset-0 min-h-screen bg-white flex justify-center items-center flex-col md:hidden transition-all ease-in-out duration-500 z-10 " +
              (sidebarState ? "translate-x-0 " : "translate-x-[-100vw]")
            }
          >
            <Link
              className="py-2 px-4   hover:bg-gray-100"
              to="/"
              onClick={toogleSidebar}
            >
              Home
            </Link>
            <Link
              className="py-2 px-4   hover:bg-gray-100"
              to="/about"
              onClick={toogleSidebar}
            >
              About
            </Link>
          </div>
        </section>
      </Container>
    </nav>
  );
}

export default Navbar;
