import "./Post.scss";
import logo from "../resources/avatar.png";
import * as FaIcons from "react-icons/fa";
import * as ImIcons from "react-icons/im";

import { useState } from "react";

export function Post(props) {
  const [isDisplayed, setDisplay] = useState(false);
  const clickFunction = () => {
    console.log("clicked");
    setDisplay(!isDisplayed);
  };
  console.log("display" + isDisplayed);
  return (
    <>
      <div className={"posts " + props.isheaderPost + " col-sm-12 col-lg-10"}>
        <img src={logo} className="title-image" />
        <div className="d-flex flex-column ml-3">
          <div>
            <p className="postTitle">{props.postData.postTitle}</p>
          </div>
          <div className="d-flex">
            <p className="postDetail-mob  postDetail">
              {props.postData.postStatus + " . "}
            </p>
            <p className="postDetail-Date">{props.postData.postModified}</p>
          </div>
        </div>
        <div className="flex-grow-1"></div>
        <div className="d-flex align-items-center menu-container">
          <div className="m-3">
            <FaIcons.FaPaperPlane />
            <p className="tooltipText">Publish</p>
          </div>
          <div className="m-3">
            <ImIcons.ImBin2 />
            <p className="tooltipText">Delete</p>
          </div>
          <div className="m-3">
            <FaIcons.FaTags />
            <p className="tooltipText">AddTags</p>
          </div>
          <div className="m-3">
            <FaIcons.FaEye />
            <p className="tooltipText">Preview</p>
          </div>
        </div>
        <div className={isDisplayed ? "show" : "hide" + " d-flex flex-column"}>
          <div>
            <FaIcons.FaPaperPlane />
            <p className="tooltipText">Publish</p>
          </div>
          <div>
            <ImIcons.ImBin2 />
            <p className="tooltipText">Delete</p>
          </div>
          <div>
            <FaIcons.FaTags />
            <p className="tooltipText">AddTags</p>
          </div>
          <div>
            <FaIcons.FaEye />
            <p className="tooltipText">Preview</p>
          </div>
        </div>
        <FaIcons.FaEllipsisV
          className="post-mob-menu"
          onClick={clickFunction}
        ></FaIcons.FaEllipsisV>
      </div>
    </>
  );
}
