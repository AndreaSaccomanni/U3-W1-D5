import { Col, Container, Row } from "react-bootstrap";
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <>
      <Footer className="text-light pt-5 mb-0">
        <Container fluid>
          <Row>
            <Col xs={2}></Col>
            <Col xs={12} md={8}>
              <div className="d-flex mb-3 gap-3">
                <Facebook />
                <Instagram />
                <Twitter />
                <Youtube />
              </div>
            </Col>
          </Row>
        </Container>
      </Footer>
    </>
  );
};
export default Footer;
