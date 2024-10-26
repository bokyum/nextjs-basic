import React, { Suspense, use } from "react";
import { API_URL } from "../../../(home)/page";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

/**
 {
  params: Promise {
    id: '12334',
} 
 */

export default async function MovieDetail({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  return (
    <div>
      <h1>Movie Detail Page</h1>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie video</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
