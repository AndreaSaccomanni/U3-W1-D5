import { Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Gallery = ({ movies }) => {
  const navigate = useNavigate();

  return (
    <Row className="g-2">
      {movies.map((movie) => (
        <Col key={movie.imdbID} xs={12} sm={6} md={4} lg={2} className="d-flex justify-content-center p-1 mb-4">
          <Card>
            <Card.Img
              variant="top"
              src={movie.Poster}
              alt={movie.Title}
              onClick={() => {
                navigate("/MovieDetails/" + movie.imdbID);
              }}
              className="img-fluid rounded-0 h-100 w-100"
            />
          </Card>
        </Col>
      ))}
    </Row>
  );
};
export default Gallery;
