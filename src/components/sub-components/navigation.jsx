import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="header">
        <Link to="/home">
          <img
            className="logo"
            src={require("../../styles/images/logo.png")}
            alt="Cate K - Software & Blockchain Developer"
          />
        </Link>

        <div className="nav-links">
          <Link className="nav-link" to="/home">
            <p>Home</p>
          </Link>

          <Link className="nav-link" to="/portfolio">
            <p>Portfolio</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;