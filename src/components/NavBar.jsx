import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Search, BellFill } from "react-bootstrap-icons";
import logo from "../assets/netflix_logo.png";
import avatar from "../assets/avatar.png";
const NavBar = () => {
  return (
    <Navbar expand="md" className="border-body" bg="dark" variant="dark">
      <Container fluid className="d-flex mx-4">
        <Navbar.Brand>
          <img src={logo} className="logo" alt="Netflix Logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Item>
              <Nav.Link active>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Tv Shows</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Movies</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Recently Added</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>My List</Nav.Link>
            </Nav.Item>
          </Nav>

          <div className="d-flex align-items-center gap-4">
            <Button variant="link" className="text-light">
              <Search />
            </Button>
            <div className="text-light">KIDS</div>
            <Button variant="link" className="text-light">
              <BellFill />
            </Button>
            <NavDropdown title={<img src={avatar} alt="User Icon" className="imgProfile" />} className="text-light bg-dark" id="dropdownMenuButton" align="end">
              <NavDropdown.Item href="profile.html" className="bg-dark text-light ">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="#" className="bg-dark text-light">
                Settings
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
