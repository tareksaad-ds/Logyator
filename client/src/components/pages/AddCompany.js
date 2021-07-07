import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { createCompany } from "../../actions/companyActions";
import { useHistory } from "react-router-dom";

const AddCompany = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      name: "",
      shipping_type: "",
      avg_period: Number,
      avg_payment: Number,
    },
    onSubmit: (values) => {
      dispatch(createCompany(values));
      window.setTimeout(() => {
        history.push("/companies");
      }, 4000);
    },
  });
  return (
    <Container>
      <Form onSubmit={formik.handleSubmit} className="add-company">
        <h1>Add Company </h1>
        <br />
        <Form.Group controlId="name">
          <Form.Label>Company Name</Form.Label>
          <Form.Control
            onChange={formik.handleChange}
            value={formik.values.name}
            type="text"
            placeholder="Enter Company Name"
          />
        </Form.Group>
        <br />

        <Form.Group controlId="shipping_type">
          <Form.Label>Shipping Type</Form.Label>
          <Form.Control
            as="select"
            onChange={formik.handleChange}
            value={formik.values.shipping_type}
          >
            <option disabled>Shipping Type</option>
            <option>Sea</option>
            <option>Air</option>
            <option>Land</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="avg_period">
          <Form.Label>Period in Days</Form.Label>
          <Form.Control
            type="number"
            onChange={formik.handleChange}
            value={formik.values.avg_period}
          />
        </Form.Group>
        <br />
        <Form.Group controlId="avg_payment">
          <Form.Label>Price per qunatity</Form.Label>
          <Form.Control
            type="number"
            onChange={formik.handleChange}
            value={formik.values.avg_payment}
          />
        </Form.Group>
        <br />

        <Button variant="warning" type="submit">
          Add
        </Button>
        <br />
      </Form>
    </Container>
  );
};

export default AddCompany;
