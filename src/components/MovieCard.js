import React from "react";

const MovieCard = ({ title, description, posterURL, rating, year, stars }) => {
  return (
    <div>
      <h1>{title}</h1>
      <br />
      <p>{description}</p>
      <br />
      <h2>Rating:{rating}</h2>
      <br />
      <h2>Year:{year}</h2>
      <br />
      <h3>Top Cast:{stars}</h3>
      <br />
      <img src={posterURL} width={500} />
      <br />
    </div>
  );
};

export default MovieCard;
