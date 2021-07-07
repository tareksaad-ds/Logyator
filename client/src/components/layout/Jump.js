import React from "react";
import { Jumbotron, Form, Button } from "react-bootstrap";

const Jump = () => {
  return (
    <div>
      <br />
      <Jumbotron fluid>
        <h1 className="heading">Pick your partner </h1>
        <p style={{ color: "#001f3d;", fontWeight: "900" }}>
          here you can find many big companies in the shippings from America,
          Africa, Asia, Europe and Australia.
        </p>
        <Form.Group>
          <Form.Control
            size="lg"
            type="search"
            placeholder="Find your company"
          />
        </Form.Group>
        <Button size="lg">Find</Button>
      </Jumbotron>
    </div>
  );
};

export default Jump;
