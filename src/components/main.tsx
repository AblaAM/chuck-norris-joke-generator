import React from "react";
import JokeContainer from "./JokeContainer";
import Header from "./Header";
import Footer from "./Footer";

const Main: React.FC = () => {
  return (
    <>
      <Header />
      <div className="title-container">
        <p className="title">Chuck norris Joke Generator</p>
      </div>
      <JokeContainer />
      <Footer />
    </>
  );
};

export default Main;
