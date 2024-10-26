import { API_URL } from "../app/(home)/page";
import styles from "./movie-info.module.css";
/**
 {
  "adult": false,
  "backdrop_path": "https://image.tmdb.org/t/p/w1280/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
  "belongs_to_collection": null,
  "budget": 100000000,
  "genres": [
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 36,
      "name": "History"
    }
  ],
  "homepage": "https://www.universalpictures.com/movies/oppenheimer",
  "id": 872585,
  "imdb_id": "tt15398776",
  "origin_country": [
    "US"
  ],
  "original_language": "en",
  "original_title": "Oppenheimer",
  "overview": "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
  "popularity": 157.438,
  "poster_path": "https://image.tmdb.org/t/p/w780/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
  "production_companies": [
    {
      "id": 9996,
      "logo_path": "https://image.tmdb.org/t/p/w300/3tvBqYsBhxWeHlu62SIJ1el93O7.png",
      "name": "Syncopy",
      "origin_country": "GB"
    },
    {
      "id": 33,
      "logo_path": "https://image.tmdb.org/t/p/w300/8lvHyhjr8oUKOOy2dKXoALWKdp0.png",
      "name": "Universal Pictures",
      "origin_country": "US"
    },
    {
      "id": 507,
      "logo_path": "https://image.tmdb.org/t/p/w300/aRmHe6GWxYMRCQljF75rn2B9Gv8.png",
      "name": "Atlas Entertainment",
      "origin_country": "US"
    },
    {
      "id": 15123,
      "logo_path": "https://image.tmdb.org/t/p/w300null",
      "name": "Breakheart Films",
      "origin_country": "US"
    },
    {
      "id": 239215,
      "logo_path": "https://image.tmdb.org/t/p/w300null",
      "name": "Peters Creek Entertainment",
      "origin_country": "US"
    }
  ],
  "production_countries": [
    {
      "iso_3166_1": "GB",
      "name": "United Kingdom"
    },
    {
      "iso_3166_1": "US",
      "name": "United States of America"
    }
  ],
  "release_date": "2023-07-19",
  "revenue": 952000000,
  "runtime": 181,
  "spoken_languages": [
    {
      "english_name": "Dutch",
      "iso_639_1": "nl",
      "name": "Nederlands"
    },
    {
      "english_name": "English",
      "iso_639_1": "en",
      "name": "English"
    }
  ],
  "status": "Released",
  "tagline": "The world forever changes.",
  "title": "Oppenheimer",
  "video": false,
  "vote_average": 8.086,
  "vote_count": 9130
}
 */

export async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);

  return (
    <div className={styles.container}>
      <img className={styles.poster} src={movie.poster_path} />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>

        <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>

        <p>{movie.overview}</p>
        <a href={movie.homepage} target="_blank">
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}
