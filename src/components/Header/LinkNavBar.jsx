import React from "react";
import { Link } from "react-router-dom";

const LinkNavBar = ({ path, text, linkStyle, fn }) => {
  return (
    <li className="li">
      <Link className={linkStyle ? linkStyle : ""} to={path} onClick={fn}>
        {text}
      </Link>
    </li>
  );
};

export default LinkNavBar;
