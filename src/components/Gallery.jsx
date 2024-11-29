import { Col, Row } from "react-bootstrap";

const Gallery = ({ movies }) => {
  return (
    <Row className="g-2">
      {movies.map((movie) => (
        <Col key={movie.imdbID} xs={12} sm={6} md={4} lg={2} className="d-flex justify-content-center p-1 mb-4">
          <img
            src={movie.Poster} // Usa la proprietà "Poster" dell'API OMDB
            alt={movie.Title}
            className="img-fluid rounded-0"
          />
        </Col>
      ))}
    </Row>
  );
};
export default Gallery;
