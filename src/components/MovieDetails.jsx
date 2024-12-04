// import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams();
  const id = params.movieId;

  return <h1>{id}</h1>;

  // <Card >
  //   <Card.Img variant="top" src="" />
  //   <Card.Body>
  //     <Card.Title>Card Title</Card.Title>
  //     <Card.Text>
  //       Some quick example text to build on the card title and make up the
  //       bulk of the card's content.
  //     </Card.Text>
  //     <Button variant="primary">Go somewhere</Button>
  //   </Card.Body>
  // </Card>
};

export default MovieDetails;
