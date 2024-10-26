import Link from "next/link";
import React, { use, useEffect } from "react";
export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

export const metadata = {
  title: "Home",
};
const getMovies = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("fetching movies");
  return fetch(API_URL).then((response) => response.json());
};

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
}
