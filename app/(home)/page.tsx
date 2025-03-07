import Link from "next/link";
import React, { use, useEffect } from "react";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";
import { API_URL } from "../../constants/constant";

export const metadata = {
  title: "Home",
};

const getMovies = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 1000));

  return fetch(API_URL).then((response) => response.json());
};

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
        />
      ))}
    </div>
  );
}
