import React from "react";
import { Button, Container, Form } from "react-bootstrap";

const Contact = () => {
  return (
    <Container>
      <Form className="contact">
        <h1>Send Your Message </h1>
        <br />
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
        <br />

        <Form.Group controlId="name">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
        <br />

        <Form.Group controlId="message">
          <Form.Label>Enter Your Message</Form.Label>
          <Form.Control as="textarea" rows={5} />
        </Form.Group>
        <br />

        <Button variant="danger">Send</Button>
        <br />
      </Form>
    </Container>
  );
};

export default Contact;
