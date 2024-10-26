import React from "react";
import { API_URL } from "../app/(home)/page";
import styles from "./movie-videos.module.css";
/**
 [
  {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "'Oppenheimer' Wins Best Cinematography | 96th Oscars (2024)",
    "key": "O_hKC3gRvzw",
    "site": "YouTube",
    "size": 1080,
    "type": "Featurette",
    "official": true,
    "published_at": "2024-04-11T19:00:07.000Z",
    "id": "66187a326f31af01639a3ff5"
  },
  {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "'Oppenheimer' Wins Best Film Editing | 96th Oscars (2024)",
    "key": "YkPvQ2hqnMY",
    "site": "YouTube",
    "size": 1080,
    "type": "Featurette",
    "official": true,
    "published_at": "2024-04-10T19:00:06.000Z",
    "id": "66187a3af9aa47017d33e12c"
  },
  {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "Cillian Murphy | Best Actor in a Leading Role | Oscars 2024 Press Room Speech",
    "key": "EJdFH02RnFQ",
    "site": "YouTube",
    "size": 1080,
    "type": "Featurette",
    "official": true,
    "published_at": "2024-03-11T17:25:06.000Z",
    "id": "65ef60451b7c590162b0e52d"
  },
  {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "Christopher Nolan | Best Directing | 'Oppenheimer' | Oscars 2024 Press Room Speech",
    "key": "TwHY-yqSkLY",
    "site": "YouTube",
    "size": 1080,
    "type": "Featurette",
    "official": true,
    "published_at": "2024-03-11T17:03:41.000Z",
    "id": "65ef603c85702e01626c68fd"
  },
  {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "Best Cinematography | 'Oppenheimer' | Hoyte van Hoytema | Oscars 2024 Press Room Speech",
    "key": "apU5P6Fp3Mc",
    "site": "YouTube",
    "size": 1080,
    "type": "Featurette",
    "official": true,
    "published_at": "2024-03-11T16:52:43.000Z",
    "id": "65ef603527d9cc0131978fc0"
  },
  {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "Best Picture | Oppenheimer | Oscars 2024 Press Room Speech",
    "key": "Eym-eR4wrbQ",
    "site": "YouTube",
    "size": 1080,
    "type": "Featurette",
    "official": true,
    "published_at": "2024-03-11T03:15:09.000Z",
    "id": "65eee5cd001bbd01867fb530"
  },
  {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "Best Film Editing | 'Oppenheimer' | Jennifer Lame | Oscars 2024 Press Room Speech",
    "key": "f9Ze0FnNx7I",
    "site": "YouTube",
    "size": 1080,
    "type": "Featurette",
    "official": true,
    "published_at": "2024-03-11T02:02:47.000Z",
    "id": "65eee5c0efe37c0163ee03a7"
  },
  {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "Cillian Murphy drew inspiration from David Bowie to play Oppenheimer | EE BAFTA Film Awards 2024",
    "key": "4BefYJQWxoU",
    "site": "YouTube",
    "size": 1080,
    "type": "Featurette",
    "official": true,
    "published_at": "2024-02-29T16:38:30.000Z",
    "id": "65e255b1a806730161a997a5"
  },
  {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "Oppenheimer wins Best Film | EE BAFTA Film Awards 2024",
    "key": "ZEXP9aV7Vtw",
    "site": "YouTube",
    "size": 1080,
    "type": "Featurette",
    "official": true,
    "published_at": "2024-02-19T13:04:43.000Z",
    "id": "65d3526c3876510163319c06"
  },
  {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "Christopher Nolan wins Director for Oppenheimer | EE BAFTA Film Awards 2024",
    "key": "iYlNtbpn7AQ",
    "site": "YouTube",
    "size": 1080,
    "type": "Featurette",
    "official": true,
    "published_at": "2024-02-18T21:43:37.000Z",
    "id": "65d32a958de0ae0163d87477"
  },
  {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "Cillian Murphy collects his Leading Actor BAFTA for Oppenheimer | EE BAFTA Film Awards 2024",
    "key": "ULf_t62bLwc",
    "site": "YouTube",
    "size": 1080,
    "type": "Featurette",
    "official": true,
    "published_at": "2024-02-18T21:41:31.000Z",
    "id": "65d32a9f4bc38b0189553f2e"
  },
  {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "Oppenheimer wins Editing | EE BAFTA Film Awards 2024",
    "key": "jBg078PNChU",
    "site": "YouTube",
    "size": 1080,
    "type": "Featurette",
    "official": true,
    "published_at": "2024-02-18T20:33:19.000Z",
    "id": "65d32ab228d7fe017c35708e"
  },
  {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "Oppenheimer wins Cinematography | EE BAFTA Film Awards 2024",
    "key": "Tcqn0MHVuwA",
    "site": "YouTube",
    "size": 1080,
    "type": "Featurette",
    "official": true,
    "published_at": "2024-02-18T20:22:42.000Z",
    "id": "65d32abae04d8a0163988f4e"
  },
  {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "Robert Downey Jr. wins Supporting Actor for his role in Oppenheimer | EE BAFTA Film Awards 2024",
    "key": "NxtmKwm51Qg",
    "site": "YouTube",
    "size": 1080,
    "type": "Featurette",
    "official": true,
    "published_at": "2024-02-18T20:05:28.000Z",
    "id": "65d32ad48de0ae0149d8276f"
  },
  {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "Atmosphere TV Spot",
    "key": "hlZO437mwXQ",
    "site": "YouTube",
    "size": 1080,
    "type": "Teaser",
    "official": true,
    "published_at": "2024-01-30T15:31:13.000Z",
    "id": "65b9184b8c3159017bf27ca9"
  },
  {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "Most Important",
    "key": "G_DMV5uYqfI",
    "site": "YouTube",
    "size": 1080,
    "type": "Teaser",
    "official": true,
    "published_at": "2024-01-29T12:40:14.000Z",
    "id": "65b7a2b1dbad500163851d63"
  },
  {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "Ensemble",
    "key": "u6xoq-Xtr_U",
    "site": "YouTube",
    "size": 1080,
    "type": "Behind the Scenes",
    "official": true,
    "published_at": "2024-01-16T22:19:57.000Z",
    "id": "65aee4b8158c8500ebb9a464"
  },
  {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "Director",
    "key": "kyXNephyqL0",
    "site": "YouTube",
    "size": 1080,
    "type": "Behind the Scenes",
    "official": true,
    "published_at": "2024-01-09T20:37:31.000Z",
    "id": "65a3e82f266778012e646ca8"
  },
  {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "Review",
    "key": "qiuSBWVdgLI",
    "site": "YouTube",
    "size": 1080,
    "type": "Trailer",
    "official": true,
    "published_at": "2024-01-09T16:51:46.000Z",
    "id": "659f6ee1397561012d102ed8"
  },
  {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "Screenplay",
    "key": "0mSQo3z73Uk",
    "site": "YouTube",
    "size": 1080,
    "type": "Behind the Scenes",
    "official": true,
    "published_at": "2024-01-05T21:09:15.000Z",
    "id": "659f6f043975610121102da1"
  },
  {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "'Oppenheimer' | Scene at The Academy",
    "key": "kt4k8s1fVv4",
    "site": "YouTube",
    "size": 1080,
    "type": "Featurette",
    "official": true,
    "published_at": "2024-01-04T17:00:06.000Z",
    "id": "659750e2ef9d7279a012b66e"
  },
  {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "Florence Pugh",
    "key": "oYNY8MM9ytg",
    "site": "YouTube",
    "size": 1080,
    "type": "Behind the Scenes",
    "official": true,
    "published_at": "2023-12-16T00:35:21.000Z",
    "id": "659f6ec539549a012c3926c7"
  },
  {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "Matt Damon",
    "key": "KakdiNZ9Ssw",
    "site": "YouTube",
    "size": 1080,
    "type": "Behind the Scenes",
    "official": true,
    "published_at": "2023-12-16T00:35:01.000Z",
    "id": "659f6eb9946318012250024f"
  },
  {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "Robert Downey, Jr.",
    "key": "fU43oLToUTY",
    "site": "YouTube",
    "size": 1080,
    "type": "Behind the Scenes",
    "official": true,
    "published_at": "2023-12-16T00:34:40.000Z",
    "id": "659f6eabed96bc01304f2c6d"
  },
  {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "Emily Blunt",
    "key": "1xrBobulfJ4",
    "site": "YouTube",
    "size": 1080,
    "type": "Behind the Scenes",
    "official": true,
    "published_at": "2023-12-16T00:34:16.000Z",
    "id": "659f6e9e3679a10131abc1c5"
  },
  {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "Cillian Murphy",
    "key": "D_uVhv5Dk3U",
    "site": "YouTube",
    "size": 1080,
    "type": "Behind the Scenes",
    "official": true,
    "published_at": "2023-12-16T00:33:54.000Z",
    "id": "659f6e970328b901248a8b7f"
  },
  {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "Costumes",
    "key": "4iRwYGyBcmo",
    "site": "YouTube",
    "size": 1080,
    "type": "Behind the Scenes",
    "official": true,
    "published_at": "2023-12-16T00:33:17.000Z",
    "id": "659f6e910328b9012a8a8bea"
  },
  {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "Sound Editing",
    "key": "FWgOPGK589Q",
    "site": "YouTube",
    "size": 1080,
    "type": "Behind the Scenes",
    "official": true,
    "published_at": "2023-12-13T20:44:49.000Z",
    "id": "659f6e5058efd3012d8f6c6f"
  },
  {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "Production Design",
    "key": "7zYM550uw20",
    "site": "YouTube",
    "size": 1080,
    "type": "Behind the Scenes",
    "official": true,
    "published_at": "2023-12-13T20:44:32.000Z",
    "id": "659f6e4aed96bc01244f2dc4"
  },
  {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "Cinematography",
    "key": "Dpo6QwdEkj0",
    "site": "YouTube",
    "size": 1080,
    "type": "Behind the Scenes",
    "official": true,
    "published_at": "2023-12-11T20:03:38.000Z",
    "id": "659f6e41e24e3a01306e6a79"
  },
  {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "Picture",
    "key": "jKsK0HJGQi0",
    "site": "YouTube",
    "size": 1080,
    "type": "Featurette",
    "official": true,
    "published_at": "2023-12-11T20:03:24.000Z",
    "id": "659f6dd876eecf012d65421c"
  },
  {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "Director",
    "key": "mG5rlu6LTO0",
    "site": "YouTube",
    "size": 1080,
    "type": "Behind the Scenes",
    "official": true,
    "published_at": "2023-12-11T20:03:05.000Z",
    "id": "659f6dcde24e3a012d6e697e"
  },
  {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "Editing",
    "key": "0Q90x09QeWw",
    "site": "YouTube",
    "size": 1080,
    "type": "Behind the Scenes",
    "official": true,
    "published_at": "2023-12-11T20:02:27.000Z",
    "id": "659f6dc73679a10122abc065"
  },
  {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "Hair and Makeup",
    "key": "30mf5MGnc3g",
    "site": "YouTube",
    "size": 1080,
    "type": "Behind the Scenes",
    "official": true,
    "published_at": "2023-12-11T20:02:01.000Z",
    "id": "659f6dba3679a1012babbfea"
  },
  {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "Visual Effects",
    "key": "RiHhQ8zc-UU",
    "site": "YouTube",
    "size": 1080,
    "type": "Behind the Scenes",
    "official": true,
    "published_at": "2023-12-11T20:01:43.000Z",
    "id": "659f6db30328b9012a8a8bad"
  },
  {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "Score",
    "key": "HkHWSvZUPy8",
    "site": "YouTube",
    "size": 1080,
    "type": "Behind the Scenes",
    "official": true,
    "published_at": "2023-12-11T20:01:28.000Z",
    "id": "659f6dabed96bc01244f2d93"
  },
  {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "Yours to Own Promo",
    "key": "UdFeVo0cODs",
    "site": "YouTube",
    "size": 1080,
    "type": "Teaser",
    "official": true,
    "published_at": "2023-10-17T13:00:24.000Z",
    "id": "652e887bea84c7010c1d8436"
  },
  {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "Oppenheimer 70mm film reel running in the BFI IMAX",
    "key": "e25RoI3rykw",
    "site": "YouTube",
    "size": 1080,
    "type": "Featurette",
    "official": true,
    "published_at": "2023-08-03T10:00:35.000Z",
    "id": "64dbc2d3d100b600ada3225b"
  },
  {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "Oppenheimer's cast on their first viewing of Christopher Nolan's film",
    "key": "-nlQtxwdfR4",
    "site": "YouTube",
    "size": 1080,
    "type": "Featurette",
    "official": true,
    "published_at": "2023-07-28T13:00:08.000Z",
    "id": "64c4235295ce2400af1a8f96"
  },
  {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "Get Tickets NOW",
    "key": "pPG8TS23xR4",
    "site": "YouTube",
    "size": 1080,
    "type": "Teaser",
    "official": true,
    "published_at": "2023-07-22T21:22:29.000Z",
    "id": "64e3afd2c9054f01386dc814"
  },
  {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "Christopher Nolan, Cillian Murphy, Emily Blunt and Matt Damon on Oppenheimer",
    "key": "afaeQS_Lgcc",
    "site": "YouTube",
    "size": 1080,
    "type": "Featurette",
    "official": true,
    "published_at": "2023-07-21T12:46:46.000Z",
    "id": "64c03edc0582240151f3bc05"
  },
  {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "The Score",
    "key": "SJXNUJS5TU8",
    "site": "YouTube",
    "size": 1080,
    "type": "Behind the Scenes",
    "official": true,
    "published_at": "2023-07-18T19:00:11.000Z",
    "id": "64e3b0405258ae00add2743d"
  },
  {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "Trinity Test",
    "key": "5ZYD-H4V2M0",
    "site": "YouTube",
    "size": 1080,
    "type": "Behind the Scenes",
    "official": true,
    "published_at": "2023-07-16T11:29:00.000Z",
    "id": "64e3b03ae0ca7f011ddb33b8"
  },
  {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "UK Premiere",
    "key": "Z98ojw6sK_w",
    "site": "YouTube",
    "size": 1080,
    "type": "Featurette",
    "official": true,
    "published_at": "2023-07-13T18:29:03.000Z",
    "id": "64b049e58a0e9b0100c61482"
  },
  {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "Opening Look",
    "key": "sOsIKu2VAkM",
    "site": "YouTube",
    "size": 1080,
    "type": "Clip",
    "official": true,
    "published_at": "2023-07-13T16:00:40.000Z",
    "id": "64b040ad3e2ec800cbd1327c"
  },
  {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "Christopher Nolan & Cast Interviews",
    "key": "wearzXv7WIE",
    "site": "YouTube",
    "size": 1080,
    "type": "Featurette",
    "official": true,
    "published_at": "2023-07-13T03:27:43.000Z",
    "id": "64b001b98a0e9b00c6ce47d6"
  },
  {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "The Cast",
    "key": "l5QXphRn-TM",
    "site": "YouTube",
    "size": 1080,
    "type": "Behind the Scenes",
    "official": true,
    "published_at": "2023-07-11T14:00:34.000Z",
    "id": "64aef62a3e2ec8014f4aaf57"
  },
  {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "Pushing The Button",
    "key": "Y9EiLF7l8ug",
    "site": "YouTube",
    "size": 1080,
    "type": "Behind the Scenes",
    "official": true,
    "published_at": "2023-07-10T16:30:07.000Z",
    "id": "64ac3c153e2ec8010dacd59e"
  },
  {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "Shooting For IMAX",
    "key": "jrMdXEtAse8",
    "site": "YouTube",
    "size": 1080,
    "type": "Behind the Scenes",
    "official": true,
    "published_at": "2023-06-01T12:00:09.000Z",
    "id": "6478a7fb0e29a200dcb99eaf"
  },
  {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "New Trailer",
    "key": "uYPbbksJxIg",
    "site": "YouTube",
    "size": 1080,
    "type": "Trailer",
    "official": true,
    "published_at": "2023-05-08T07:01:04.000Z",
    "id": "6458a73277d23b0170372259"
  },
  {
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "Official Trailer",
    "key": "bK6ldnjE3Y0",
    "site": "YouTube",
    "size": 1080,
    "type": "Trailer",
    "official": true,
    "published_at": "2022-12-19T00:29:01.000Z",
    "id": "639fb365223e20007d3d3618"
  }
]
 */
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
