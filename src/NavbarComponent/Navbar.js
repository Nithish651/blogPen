import "../common/bootstrap.css";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { useState } from "react";
import Sidebar from "./SidebarComponenet/Sidebar";

export function Navbar() {
  const [isSideBarActive, setSideBarState] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(true);

  const showwSideBar = () => {
    setSideBarState(!isSideBarActive);
  };

  const clickFunction = (param) => {
    setSideBarState(!param);
  };
  return (
    <>
      <main>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-dark">
          {isLoggedIn && (
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars onClick={showwSideBar}></FaIcons.FaBars>
            </Link>
          )}

          <a className="navbar-brand text-white ml-sm-4" href="#">
            blogPen
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="form-inline my-2 my-lg-0 ml-auto">
              <input
                className="form-control col-xs-1 col-sm-10 col-lg-10 mr-sm-2"
                type="search"
                placeholder="Search Posts"
                aria-label="Search"
                size="50"
              />
              <button
                className="btn btn-outline-white my-2 my-lg-0"
                type="submit"
              >
                Search
              </button>
            </form>

            <ul className="navbar-nav ml-auto mr-sm-4">
              <li className="nav-item dropdown mr-4">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Sign in
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Google Sign In
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Facebook Sign In
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </main>
      <Sidebar showSideMenu={isSideBarActive} clickFunction={clickFunction} />
    </>
  );
}
