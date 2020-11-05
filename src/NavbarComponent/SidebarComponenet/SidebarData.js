import * as FaIcons from "react-icons/fa";

export const SidebarData = [
  {
    title: "New Post",
    path: "/new-post",
    icon: <FaIcons.FaPlus />,
    cName: "nav-text",
  },

  {
    title: "Posts",
    path: "/posts",
    icon: <FaIcons.FaPollH />,
    cName: "nav-text",
  },
  {
    title: "Comments",
    path: "/comments",
    icon: <FaIcons.FaCommentAlt />,
    cName: "nav-text",
  },
  {
    title: "Reading List",
    path: "/saved-posts",
    icon: <FaIcons.FaBookmark />,
    cName: "nav-text",
  },
];
