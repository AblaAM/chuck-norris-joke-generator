import React, { useEffect, useState } from "react";
import JokeContainer from "./JokeContainer";
import Header from "./Header";
import Model from "./Model";
import Footer from "./Footer";

const Main: React.FC = () => {
  const [data, setData] = useState<Array<string>>([]);
  const [category, setCategory] = useState<string>("all");

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/categories")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.log("error:", error);
      });
  }, []);

  const handleSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setCategory(event.target.value);
  };
  return (
    <div className="app-container">
      <Header />
      <div className="main-heading">
        <div className="heading"></div>
        <div className="select-container">
          <select onChange={handleSelectChange} className="select">
            <option key="0" value="all">
              all
            </option>
            {data.length &&
              data.map((item: string, index: number) => {
                return (
                  <option key={`${index}+1`} value={item}>
                    {item}
                  </option>
                );
              })}
          </select>
        </div>
      </div>
      <JokeContainer category={category} />
      <Model />
      <Footer />
    </div>
  );
};

export default Main;
