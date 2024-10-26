import React from "react";
import { API_URL } from "../app/(home)/page";

async function getVideos(id: string) {
  console.log(`Fetching Videos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  throw new Error("I'm sorry, I can't do that");
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <div>{JSON.stringify(videos)}</div>;
}
