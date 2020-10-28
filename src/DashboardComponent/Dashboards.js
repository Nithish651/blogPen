import { Navbar } from "../NavbarComponent/Navbar";
import "../common/bootstrap.css";
import "./Dashboard.scss";

export function Dashboard() {
  return (
    <>
      <Navbar></Navbar>
      <div className="mh-100" style={{ height: "2em", color: "red" }}></div>
      <div className="mh-100" style={{ height: "2em", color: "red" }}></div>
      <div className="container d-flex flex-column center-box">
        <div className="posts  d-flex col-sm-12 col-lg-10 ml-auto">
          <div className="title-image"></div>
        </div>
        <div className="posts  col-sm-12 col-lg-10 ml-auto"></div>
        <div className="posts  col-sm-12 col-lg-10 ml-auto"></div>
        <div className="posts  col-sm-12 col-lg-10 ml-auto"></div>
        <div className="posts  col-sm-12 col-lg-10 ml-auto"></div>
      </div>
    </>
  );
}
