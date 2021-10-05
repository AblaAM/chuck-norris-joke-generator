import React from "react";
import "./index.scss";
import img from "../../assets/animated-chuck.gif";

const Footer: React.FC = () => {
  return (
    <div className="header">
      <div className="header-left">
        <img src={img} className="logo-image" />
      </div>
      <div className="header-right">
        <a className="nav" href="#">
          Joke Generator
        </a>
        <a
          className="nav"
          href="https://github.com/AblaAM/chuck-norris-joke-generator"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repository
        </a>
        <a
          className="nav"
          href="https://api.chucknorris.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          API
        </a>
      </div>
    </div>
  );
};

export default Footer;
