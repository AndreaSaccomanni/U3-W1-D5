import { Container, Row } from "react-bootstrap";
import Gallery from "./Gallery";

const MainSection = ({ title, movies }) => {
  return (
    <>
      <Container fluid className="px-5 py-4  bg-dark">
        <h2 className="text-light text-center text-sm-start">{title}</h2>
        <Row>
          <Gallery movies={movies} />
        </Row>
      </Container>
    </>
  );
};

export default MainSection;
