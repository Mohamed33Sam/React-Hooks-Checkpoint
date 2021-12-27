import React, { useState } from "react";
import MovieCard from "./MovieCard";

const DATA = [
  {
    id: 1,
    title: "The Dark Knight",
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    posterURL: "https://taqeemi.com/storage/subjects/vaTziFDGJVt0oQakqqun.jpg",
    rating: 9.0,
    year: 2008,
    stars: "Christian Bale,Heath Ledger",
  },
  {
    id: 2,
    title: "Spider-Man: No Way Home",
    description:
      "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
    posterURL:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-mannowayhome_lob_crd_03.jpg",
    rating: 8.9,
    year: 2021,
    stars: "Tom Holland ,Benedict Cumberbatch,Willem Dafoe",
  },
  {
    id: 3,
    title: "البيضة والحجر",
    description:
      "مستطاع مدرس فلسفة، يستأجر غرفة فوق السطوح بحي شعبي، يُطرد من عمله بسبب اتهامه بالقيام بنشاطات سياسية مما اضطره لإحتراف مهنة الدجل والشعوذة مستغلًا في ذلك ذكاءه العقلي وجهل المجتمع حتى أصبح رجلًا معروفًا وثريًا من خلال نصبه على كثير من الناس.",
    posterURL:
      "https://upload.wikimedia.org/wikipedia/ar/a/ac/%D9%85%D9%84%D8%B5%D9%82_%D9%81%D9%8A%D9%84%D9%85_%D8%A7%D9%84%D8%A8%D9%8A%D8%B6%D8%A9_%D9%88%D8%A7%D9%84%D8%AD%D8%AC%D8%B1.jpg",
    rating: 8.0,
    year: 1990,
    stars: " أحمد زكي , معالي زايد,  ممدوح وافي ",
  },
];
const styloo = {
  width: "97%",
  padding: "17px",
  borderWidth: "1px",
  border: "2px bold black",
  borderRadius: "15px",
};
const MovieList = () => {
  const [movieList, setMovieList] = useState(DATA);
  const [search, setSearch] = useState("");
  const handleClick = () => {
    setMovieList(
      movieList.filter(
        (movie) => movie.title.toLowerCase().includes(search.toLowerCase()) //search by title
      )
    );

    // setMovieList(
    //   movieList.filter((movie) => movie.rating === parseInt(search)) // search by rate
    // );
  };
  return (
    <div>
      <div className="search-box">
        <input
          style={styloo}
          class="crayons-header--search-input crayons-textfield"
          type="text"
          id="6"
          name="q"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          aria-label="Search"
          onClick={handleClick}
          className="c-btn c-btn--icon-alone absolute inset-px left-auto mt-0 py-0 search-btn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            class="crayons-icon c-btn__icon"
          >
            <path d="m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"></path>
          </svg>
        </button>
      </div>
      {movieList.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          description={movie.description}
          posterURL={movie.posterURL}
          rating={movie.rating}
          year={movie.year}
          stars={movie.stars}
        />
      ))}
    </div>
  );
};

export default MovieList;
