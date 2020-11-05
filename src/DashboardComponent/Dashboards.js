import { Navbar } from "../NavbarComponent/Navbar";
import { Post } from "../PostComponent/Post";
import "../common/bootstrap.css";
import "./Dashboard.scss";
import logo from "../resources/avatar.png";
import * as FaIcons from "react-icons/fa";
import * as ImIcons from "react-icons/im";
import { PostTestData } from "../PostComponent/PostTestData";

export function Dashboard() {
  return (
    <>
      <Navbar></Navbar>

      <div className="container m-auto p-4 d-flex flex-column center-box">
        {PostTestData.map((item, index) => {
          return (
            <Post
              key={index}
              isheaderPost={index == 0 ? "header-post" : ""}
              postData={item}
            />
          );
        })}
      </div>
    </>
  );
}
