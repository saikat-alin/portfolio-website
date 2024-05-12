import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/alin.jpg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img
              src={logo}
              alt="Logo"
              style={{
                borderRadius: "50%",
                height: "100px",
                width: "100px",
                marginRight: "20px",
              }}
            />
            <span className="logo-text">Saikat Das Alin</span>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://in.linkedin.com/in/saikat-das-alin-01a6491b0">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="#">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>© Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
