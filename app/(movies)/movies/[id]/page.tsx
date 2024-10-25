import React, { use } from "react";
import { API_URL } from "../../../(home)/page";

/**
 {
  params: Promise {
    id: '12334',
} 
 */

async function getMovie(id: string) {
  console.log(`Fetching Movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}
async function getVideos(id: string) {
  console.log(`Fetching Videos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  console.log("start fetching");
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  //   const movie = await getMovie(id);
  //   const videos = await getVideos(id);
  console.log("end fetching");
  return <h1>Movie {id}</h1>;
}

// export default function MovieDetail({ params }) {
//   const { id }: { id: string } = use(params);
//   return <h1>Movie {id}</h1>;
// }
