import React, { useState } from "react";
import "./index.scss";
import img from "../../assets/chucknorris_logo_coloured_small@2x.png";
import chuckNorris from "../../assets/chuck-norris.png";

import JokeModel from "../../models/jokeModel";
interface HttpResponse<T> extends Response {
  parsedBody?: T;
}
const JokeContainer: React.FC<{ category: string }> = ({ category }) => {
  const [data, dataSet] = useState<JokeModel>();
  const [loading, loadingSet] = useState<boolean>(false);
  const [error, errorSet] = useState<boolean>(false);

  async function fetchJoke<T>(request: RequestInfo): Promise<HttpResponse<T>> {
    loadingSet(true);
    const response: HttpResponse<T> = await fetch(request);
    response.parsedBody = await response.json();
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    loadingSet(false);
    return response;
  }

  const clickButton = async () => {
    let response: HttpResponse<JokeModel>;
    try {
      response = await fetchJoke<JokeModel>(
        category === "all"
          ? "https://api.chucknorris.io/jokes/random"
          : `https://api.chucknorris.io/jokes/random/?category=${category}`
      );
      dataSet(response.parsedBody);
      errorSet(false);
    } catch (response) {
      console.log(response);
      errorSet(true);
    }
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
          {!loading && data && !error ? (
            <div className="joke-body">
              <h1 className="categorie">
                {data.categories ? data.categories[0] : null}
              </h1>
              <img src={data.icon_url}></img>
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
