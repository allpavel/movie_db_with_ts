import React from "react";
import { useParams } from "react-router-dom";
import { useGetMovie } from "../hooks/useGetMovie";
import { BreadCrumb } from "../components/BreadCrumb/BreadCrumb";
import { Spinner } from "../components/Spinner/Spinner";
import { MovieInfo } from "../components/MovieInfo/MovieInfo";
import { MovieInfoBar } from "../components/MovieInfoBar/MovieInfoBar";
import { Actor } from "../components/Actor/Actor";
import { Grid } from "../components/Grid/Grid";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../API/config";

export const MoviePage = () => {
  const params = useParams();
  const { movie, isLoading, loadError } = useGetMovie(params.id);

  if (isLoading) return <Spinner />;
  if (loadError) return <h1>Something go wrong...</h1>;

  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
      <Grid header={"Actors"}>
        {movie.actors.map((actor) => (
          <Actor
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            imageUrl={
              actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : "No image"
            }
          />
        ))}
      </Grid>
    </>
  );
};
