import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function About() {
  return (
    <div id="about-us">
      <h1 style={{ textAlign: "center", margin: "55px" }}>ABout Us</h1>
      <Container>
        <Row>
          <Col>
            <img
              src="/image/cr7shirt.jpg"
              style={{ width: "522px", borderRadius: "10px" }}
            ></img>
          </Col>
          <Col style={{ margin: "80px" }}>
            <p>
              Cristiano Ronaldo dos Santos Aveiro is a Portuguese professional
              footballer who plays as a forward for Premier League club
              Manchester United and captains the Portugal national team. Often
              considered the best player in the world and widely regarded as one
              of the greatest players of all time, Ronaldo has won five Ballon
              d'Or awards and four European Golden Shoes, the most by a European
              player.
            </p>
            <a href="https://www.cristianoronaldo.com/#season-highlights">
              <Button variant="primary"> View More</Button>{" "}
            </a>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col style={{ margin: "80px" }}>
            <p>
              Cristiano Ronaldo dos Santos Aveiro is a Portuguese professional
              footballer who plays as a forward for Premier League club
              Manchester United and captains the Portugal national team. Often
              considered the best player in the world and widely regarded as one
              of the greatest players of all time, Ronaldo has won five Ballon
              d'Or awards and four European Golden Shoes, the most by a European
              player.
            </p>
            <a href="https://www.redbubble.com/shop/cr7+t-shirts">
              <Button variant="primary"> View More</Button>{" "}
            </a>
          </Col>
          <Col>
            <img
              src="/image/cr7shirt2.jpg"
              style={{ width: "522px", borderRadius: "10px" }}
            ></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
