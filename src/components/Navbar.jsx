import React from "react";
import { useState } from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import { AiFillMoneyCollect } from "react-icons/ai";
import ToggleTheme from "./ToggleTheme";

function Navbar() {
  const [sidebarState, setsidebarState] = useState(false);

  function toogleSidebar() {
    setsidebarState(!sidebarState);
    console.log(sidebarState);
  }

  return (
    <nav className="text-fuchsia-700 md:text-slate-100 py-4 px-4  bg-slate-900 top-0 z-10 sticky">
      <Container>
        <section className="flex justify-between items-center">
          <div className="text-2xl font-extrabold z-20">
            <Link
              to="/"
              onClick={() => setsidebarState(false)}
              className="flex justify-center items-center z-20 text-white gap-1"
            >
              <AiFillMoneyCollect />
              <h3>ProCVBuilder</h3>
            </Link>
          </div>
          <div className="menu hidden md:flex">
            <Link className="py-2 px-4 " to="/">
              Home
            </Link>
            <Link className="py-2 px-4" to="/about">
              About
            </Link>
            <Link className="py-2 px-4" to="/templates">
              Templates
            </Link>
            <Link className="py-2 px-4" to="/builder">
              Builder
            </Link>

            <ToggleTheme />

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
            <Link
              className="py-2 px-4   hover:bg-gray-100"
              to="/templates"
              onClick={toogleSidebar}
            >
              Templates
            </Link>
            <Link
              className="py-2 px-4   hover:bg-gray-100"
              to="/builder"
              onClick={toogleSidebar}
            >
              Builder
            </Link>
          </div>
        </section>
      </Container>
    </nav>
  );
}

export default Navbar;
