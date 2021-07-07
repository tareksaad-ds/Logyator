import React from "react";
import { Container, Row, Col, Carousel, ListGroup } from "react-bootstrap";
import image3 from "../../assests/image3.jpg";
import image2 from "../../assests/image2.png";
import image1 from "../../assests/image1.jpg";
import Jump from "./Jump";

const Landing = () => {
  return (
    <Container id="landing">
      <Jump />
      <Row>
        <Col xs={12} md={8} lg={8}>
          <Carousel>
            <Carousel.Item interval={1000}>
              <img className="d-block w-100" src={image3} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img className="d-block w-100" src={image2} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={image1} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col xs={6} md={4} lg={4}>
          <h2>How to make a deal</h2>
          <ListGroup>
            <ListGroup.Item>
              1- Find your shipping company with the most suitable type for you.
            </ListGroup.Item>
            <br />
            <ListGroup.Item>
              2- Find your best choice by looking at the period and the payment.
            </ListGroup.Item>
            <br />
            <ListGroup.Item>3- Add the quantity that you want.</ListGroup.Item>
            <br />
            <ListGroup.Item>
              4- Confirm your bell by your cash payment method
            </ListGroup.Item>
            <br />
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Landing;
