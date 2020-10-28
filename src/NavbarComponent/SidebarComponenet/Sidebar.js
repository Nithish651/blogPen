import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import { useState } from "react";
import { SidebarData } from "./SidebarData.js";
import "./Sidebar.scss";
import "../../common/common.scss";
import logo from "./avatar.png";

function Sidebar(props) {
  const clickFunction = props.clickFunction;
  const showSideMenu = props.showSideMenu;
  return (
    <>
      <nav className={showSideMenu ? "side-bar-active" : "side-bar"}>
        <ul
          onClick={() => clickFunction(showSideMenu)}
          className="side-bar-items"
        >
          <li className="side-bar-toggle">
            <Link to="#" className="side-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>

          <img src={logo} alt="profile-image" className="profile-image" />
          <hr className="solid" />

          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
