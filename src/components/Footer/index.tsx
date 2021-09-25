import React from "react";
import "./index.scss";

const Footer: React.FC = () => {
  const getYear = () => {
    return new Date().getFullYear();
  };
  return (
    <div className="footer">
      <div className="footer-links">
        <a href="#" className="social">
          Facebook
        </a>
        <a href="#" className="social">
          Instagram
        </a>
        <a href="#" className="social">
          Twitter
        </a>
      </div>

      <p className="copyright">© Joke Generator {getYear()}</p>
    </div>
  );
};

export default Footer;
