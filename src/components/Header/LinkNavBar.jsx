import React from "react";
import { Link } from "react-router-dom";

const LinkNavBar = ({ path, text, linkStyle }) => {
  return (
    <li className="li">
      <Link className={linkStyle ? linkStyle : ""} to={path}>
        {text}
      </Link>
    </li>
  );
};

export default LinkNavBar;
