import React from "react";

import styles from "./movie-videos.module.css";
import { API_URL } from "../constants/constant";

async function getVideos(id: string) {
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <div key={video.id}>
          <iframe
            src={`https://www.youtube.com/embed/${video.key}`}
            title={video.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            key={video.id}
          />
        </div>
      ))}
    </div>
  );
}
