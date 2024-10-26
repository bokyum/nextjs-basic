"use client";
import Link from "next/link";
import React from "react";
import styles from "../styles/movie.module.css";
import { useRouter } from "next/navigation";

interface MovieProps {
  id: string;
  title: string;
  poster_path: string;
}

export async function generateMetadata() {
  return {
    title: "Movie",
  };
}

export default function Movie({ id, title, poster_path }: MovieProps) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/movies/${id}`);
  };
  return (
    <div key={id} className={styles.movie}>
      <img src={poster_path} alt={title} onClick={handleClick} />
      <Link href={`/movies/${id}`}>{title}</Link>
    </div>
  );
}
