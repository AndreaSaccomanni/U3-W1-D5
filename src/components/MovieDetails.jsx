import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams();
  const id = params.movieId;

  const [movieDetails, setMovieDetails] = useState(null);

  const fetchDetails = () => {
    const apikey = "f1cd5989";
    const url = `http://www.omdbapi.com/?apikey=${apikey}&i=${id}`;

    return fetch(url)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nella chiamata");
        }
      })
      .then((data) => {
        setMovieDetails(data);
      })

      .catch((e) => {
        console.log("Errore: ", e);
      });
  };

  useEffect(() => {
    fetchDetails();
  }, [id]);

  return (
    <div className="bg-dark text-light text-center mb-0">
      {movieDetails ? (
        <>
          <h1>{movieDetails.Title}</h1>
          <p>{movieDetails.Plot}</p>
          <img src={movieDetails.Poster} alt={movieDetails.Title} />
          <p>
            <strong>Genre:</strong> {movieDetails.Genre}
          </p>
          <p>
            <strong>Director:</strong> {movieDetails.Director}
          </p>
          <p>
            <strong>Actors:</strong> {movieDetails.Actors}
          </p>
          <p className="mb-0 ">
            <strong>Released:</strong> {movieDetails.Released}
          </p>
        </>
      ) : (
        <Spinner animation="grow" variant="success" />
      )}
    </div>
  );
};

export default MovieDetails;
