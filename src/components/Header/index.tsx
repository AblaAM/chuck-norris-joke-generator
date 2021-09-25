import React from "react";
import "./index.scss";
import img from "../../assets/chucknorris_logo_coloured_small@2x.png";
const Footer: React.FC = () => {
  return (
    <div className="header">
      <div className="header-left">
        <img src={img} className="logo-image" />
      </div>
      <div className="header-right">
        <a className="nav">Nav1</a>
        <a className="nav">Nav2</a>
        <a className="nav ">Nav3</a>
      </div>
    </div>
  );
};

export default Footer;
