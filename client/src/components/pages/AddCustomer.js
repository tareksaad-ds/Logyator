import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { createCustomer } from "../../actions/customerActions";
import { useHistory } from "react-router";

const AddCustomer = (id) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      email: "",
    },
    onSubmit: (values) => {
      dispatch(createCustomer(values));
      window.setTimeout(() => {
        history.push("/companies");
      }, 4000);
    },
  });
  return (
    <Container>
      <Form onSubmit={formik.handleSubmit} className="add-company">
        <h1>Enter Your Informations </h1>
        <br />
        <Form.Group controlId="name">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            onChange={formik.handleChange}
            value={formik.values.name}
            type="text"
            placeholder="Enter Your Full Name"
          />
        </Form.Group>
        <br />
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            onChange={formik.handleChange}
            value={formik.values.address}
            type="text"
            placeholder="Enter Your Address"
          />
        </Form.Group>
        <br />

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </Form.Group>
        <br />

        <Button variant="success" type="submit">
          Next
        </Button>
        <br />
      </Form>
    </Container>
  );
};

export default AddCustomer;
