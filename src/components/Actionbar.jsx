import { Container, Dropdown } from "react-bootstrap";
import { Grid3x3GapFill } from "react-bootstrap-icons";

const Actionbar = () => {
  return (
    <>
      <Container fluid className="px-5 d-flex justify-content-between align-items-center bg-dark">
        <div className="d-flex align-items-center">
          <h1 className="me-5 text-light">TV Shows</h1>
          <Dropdown align="end">
            <Dropdown.Toggle variant="outline-light" className="text-white bg-black border-1 rounded-0">
              Genres
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu-dark">
              <Dropdown.Item>Thriller</Dropdown.Item>
              <Dropdown.Item>Horror</Dropdown.Item>
              <Dropdown.Item>Commedia</Dropdown.Item>
              <Dropdown.Item>Romantico</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="d-flex p-1 border border-light justify-content-between text-light gap-2">
          {/* <TextLeft className="iconLeft me-2 p-2"  style={{ color: "white" }} /> */}
          <i className="bi bi-text-left text-white "></i>

          <Grid3x3GapFill className="mt-1 " />
        </div>
      </Container>
    </>
  );
};
export default Actionbar;
