import React, { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

type MovieDetailProps = {
  params: Promise<{ id: string }>;
};

// 공통 로딩 컴포넌트 분리
const Loading = ({ message }: { message: string }) => <h1>{message}</h1>;

export async function generateMetadata(props: MovieDetailProps) {
  try {
    const { id } = await props.params; // 비동기 처리
    const { title } = await getMovie(id);
    return {
      title: title || "Movie Detail",
    };
  } catch (error) {
    console.error("Failed to generate metadata:", error);
    return {
      title: "Movie Detail",
    };
  }
}

export default async function MovieDetail(props: MovieDetailProps) {
  const { id } = await props.params; // 비동기 처리

  return (
    <div>
      <Suspense fallback={<Loading message="Loading movie info" />}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<Loading message="Loading movie videos" />}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
