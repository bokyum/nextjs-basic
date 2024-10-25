import React, { use, useEffect } from "react";
const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

export const metadata = {
  title: "Home",
};
const getMovies = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log("fetching movies");
  return fetch(URL).then((response) => response.json());
};

export default async function HomePage() {
  const movies = await getMovies();
  return <div>{JSON.stringify(movies)}</div>;
}
