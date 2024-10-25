"use client";
import React, { use, useEffect } from "react";

export default function Page() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [movies, setMovies] = React.useState([]);

  const getMovies = async () => {
    const response = await fetch(
      "https://nomad-movies.nomadcoders.workers.dev/movies"
    );
    const data = await response.json();
    setMovies(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return <div>{isLoading ? "Loading..." : JSON.stringify(movies)}</div>;
}
