import React from "react";
import { Row, Col, Nav} from "react-bootstrap";
import "../assets/styles/index.scss"

const Footer = () => {
  return (
    <div>
    <div className="mt-5 text-light">
      <footer>
        <Row style={{ backgroundColor: "#004D40" }}>
          <Col className="mt-3 mx-5">
            <div>
            <blockquote className="blockquote">
                <p style={{ fontWeight: "bold" }}>About Us </p>
                <p style={{ fontSize: "16px", marginRight: "25px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                  in voluptate, possimus voluptatem quae ducimus dolor
                  similique. Quas, at reprehenderit eius culpa dolorum tempora
                  quis maiores. Eos corrupti quod officiis.
                </p>
              </blockquote>
            </div>
          </Col>
          <Col>
            <div className="mt-3">
              <blockquote className="blockquote mb-0">
                <p className="fw-bold"> Newsletter </p>
                <p style={{ fontSize: "16px", marginRight: "25px" }}>
                  stay updated with our last trends
                </p>
                <input placeholder="Email Address"></input>
                <button className="btn btn-primary mx-2 mb-1">Go</button>
              </blockquote>
            </div>
          </Col>
          <Col className="mt-3 mb-5">
            <div>
              <blockquote className="blockquote mb-0">
                <p className="fw-bold mx-3">Support Us</p>
                <Nav.Link className="navLink" style={{ fontSize: "16px"}}>
                  Term & Conditions
                </Nav.Link>
                <Nav.Link className="navLink" style={{ fontSize: "16px"}}>Privacy Policy</Nav.Link>
                <Nav.Link className="navLink" style={{ fontSize: "16px"}}>Report a payment issue</Nav.Link>
              </blockquote>
            </div>
          </Col>
        </Row>
      </footer>
    </div>
    </div>
  );
};

export default Footer;
