import React from "react";
import "./index.scss";

const Footer: React.FC = () => {
  const getYear = () => {
    return new Date().getFullYear();
  };
  return (
    <div className="footer">
      <p className="copyright">© Joke Generator {getYear()}</p>
    </div>
  );
};

export default Footer;
