import React from "react";
import ReactTooltip from "react-tooltip";
import { GitHub, Linkedin } from "react-feather";

const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; {new Date().getFullYear()} Cate K</p>

      <a className="footer-links" href="https://github.com/cate-k/" data-tip="Click to view my GitHub profile"
        target="_blank" rel="noopener noreferrer">
        <GitHub />
      </a>

      <a className="footer-links" href="https://www.linkedin.com/in/caitlen-k-b8a942181/" data-tip="Click to visit my LinkedIn profile"
        target="_blank" rel="noopener noreferrer">
        <Linkedin />
      </a>

      <ReactTooltip />
    </div>
  );
};

export default Footer;