import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCompany } from "../../actions/companyActions";
import { useHistory, useParams } from "react-router";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import { addService } from "../../actions/serviceActions";
import { BsChevronContract } from "react-icons/bs";

const GetComp = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    dispatch(getCompany(id));
  }, [dispatch, id]);
  const company = useSelector((state) => state.companyReducer.company);
  const getCustomer = localStorage.getItem("customer");
  const customer = JSON.parse(getCustomer);
  const formik = useFormik({
    initialValues: {
      customer_id: customer.data.customer.id,
      quantity: 0,
      payment: 0,
    },
    onSubmit: (values) => {
      dispatch(addService(id, values));
      window.setTimeout(() => {
        history.push("/");
      }, 5000);
    },
  });

  const changePayment = useCallback(
    (e) => {
      formik.setFieldValue("quantity", e.target.value);
      formik.setFieldValue("payment", company.avg_payment * e.target.value);
    },
    [formik, company]
  );

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h2>
              Company: <span>{company.name}</span>
              <h4>
                Customer Name : <span>{customer.data.customer.name}</span>
              </h4>
            </h2>
          </Col>
          <Col>
            <h3>
              Shipping Type:<span>{company.shipping_type}</span>
            </h3>
          </Col>
          <Col>
            <h3>
              Period:{" "}
              <span>
                {company.avg_period} {"  "} Days
              </span>
            </h3>
          </Col>

          <Col>
            <h3>
              Price:<span> $ {company.avg_payment}</span>
            </h3>
          </Col>
        </Row>
      </Container>
      <Container id="booking">
        <Form onSubmit={formik.handleSubmit} className="add-service">
          <h1 className="book">
            <BsChevronContract /> Book Now <BsChevronContract />{" "}
          </h1>
          <br />
          <Form.Group controlId="customer_id">
            <Form.Label>Customer ID</Form.Label>
            <Form.Control value={formik.values.customer_id} type="text" />
          </Form.Group>
          <br />
          <Form.Group controlId="quantity">
            <Form.Label>The Quantity</Form.Label>
            <Form.Control
              onChange={changePayment}
              value={formik.values.quantity}
              name="quantity"
              type="number"
              placeholder="Enter The Quantity"
            />
          </Form.Group>
          <br />

          <Form.Group controlId="payment">
            <Form.Label>Total</Form.Label>
            <Form.Control
              type="number"
              name="payment"
              value={formik.values.payment}
              disabled
            />
          </Form.Group>
          <br />
          <Button type="submit" variant="danger">
            Confirm
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default GetComp;
