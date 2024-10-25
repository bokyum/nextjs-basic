import React, { use } from "react";

/**
 {
  params: Promise {
    id: '12334',
} 
 */
export default function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return <h1>Movie {id}</h1>;
}

// export default function MovieDetail({ params }) {
//   const { id }: { id: string } = use(params);
//   return <h1>Movie {id}</h1>;
// }
