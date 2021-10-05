import React, { useState } from "react";
import "./index.scss";
import img from "../../assets/chucknorris_logo_coloured_small@2x.png";
import chuckNorris from "../../assets/chuck-norris.png";

import JokeModel from "../../models/jokeModel";
const JokeContainer: React.FC<{ category: string }> = ({ category }) => {
  const [data, dataSet] = useState<JokeModel>({
    categories: [],
    created_at: null,
    icon_url: null,
    id: null,
    updated_at: null,
    url: null,
    value: null,
  });
  const [loading, loadingSet] = useState<boolean>(false);
  const [error, errorSet] = useState<boolean>(false);

  async function fetchJoke<T>(request: RequestInfo): Promise<T> {
    loadingSet(true);
    return fetch(request).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      loadingSet(false);
      return response.json();
    });
  }

  const clickButton = () => {
    fetchJoke<JokeModel>(
      category === "all"
        ? "https://api.chucknorris.io/jokes/random"
        : `https://api.chucknorris.io/jokes/random/?category=${category}`
    )
      .then((response) => {
        dataSet(response);
        errorSet(false);
      })
      .catch((error) => {
        console.log(error);
        errorSet(true);
      });
  };
  return (
    <>
      <div className="main-container">
        <div className="joke-container">
          <button className="joke-button" onClick={clickButton}>
            Click here to generate a joke
          </button>
          <div className="image-container">
            <img src={img} className="chuck-image" />
          </div>
        </div>
        <div className="container">
          {!loading && !error && data.id !== null ? (
            <div className="joke-body">
              <h1 className="categorie">
                {data.categories ? data.categories[0] : null}
              </h1>
              <img src={data.icon_url as string}></img>
              <h1 className="joke">{data.value}</h1>
            </div>
          ) : loading && !error ? (
            <div className="loader"></div>
          ) : error ? (
            <p>PLEASE TRY AGAIN</p>
          ) : (
            <img src={chuckNorris} className="image-placeholder" />
          )}
        </div>
      </div>
    </>
  );
};

export default JokeContainer;
