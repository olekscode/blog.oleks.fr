import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

// import * as MYSELF from "../../constants/myself";
import * as ROUTES from "../../constants/routes";

import logo from "./img/logo.png";

class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <a className="logo" href="/#">
          <img src={logo} alt="" />
          <p>Oleksandr's Blog</p>
        </a>
        <Link className="menu-item" to={ROUTES.LANDING}>About</Link>
        <Link className="menu-item" to={ROUTES.LANDING}>Articles</Link>
        <Link className="menu-item" to={"drafts"}>Categories</Link>
      </nav>
    );
  }
}

export default Navigation;
