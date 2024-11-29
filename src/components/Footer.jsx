import { Col, Container, Row, Button } from "react-bootstrap";
import { Facebook, Instagram, Twitter, Youtube, Circle } from "react-bootstrap-icons";

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
              <Row className="g-3 mb-3">
                <Col xs={12} sm={6} md={4} lg={3}>
                  <a href="#" className="text-decoration-none footerColor">
                    Audio and Subtitles
                  </a>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                  <a href="#" className="text-decoration-none footerColor">
                    Media Center
                  </a>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                  <a href="#" className="text-decoration-none footerColor">
                    Privacy
                  </a>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                  <a href="#" className="text-decoration-none footerColor">
                    Contact Us
                  </a>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                  <a href="#" className="text-decoration-none footerColor">
                    Help Center
                  </a>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                  <a href="#" className="text-decoration-none footerColor">
                    Jobs
                  </a>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                  <a href="#" className="text-decoration-none footerColor">
                    Cookie Performances
                  </a>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                  <a href="#" className="text-decoration-none footerColor">
                    Gift Cards
                  </a>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                  <a href="#" className="text-decoration-none footerColor">
                    Terms of Use
                  </a>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                  <a href="#" className="text-decoration-none footerColor">
                    Corporate Information
                  </a>
                </Col>
              </Row>
              <div className=" d-flex flex-column align-items-start">
                <Button className="footerColor border border-1 rounded-0 mb-3">Service Code</Button>
                <div className="d-flex align-items-center fs-6">
                  <Circle className="pb-2 footerColor ps-2" />
                  <p className="pb-2 footerColor ps-2">1997-2019 Netflix, Inc.</p>
                </div>
              </div>
            </Col>
            <Col xs={2}></Col>
          </Row>
        </Container>
      </Footer>
    </>
  );
};
export default Footer;
