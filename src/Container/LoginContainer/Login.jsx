import React from "react";
import LoginModal from "../../Components/LoginModal/LoginModal";
import classes from "./Login.module.css";
import { Col, Container, Row } from "react-bootstrap";

const Login = () => {
  return (
    <Container fluid>
      <Row className={classes.login_container}>
        <Col md={6}></Col>
        <Col md={6} className={classes.login_modal_position}>
          <LoginModal />
        </Col>
      </Row>
      <Row className={`d-md-none d-block ${classes.login_resp}`}></Row>
      <Row className={classes.login_footer}>
        <Col sm={12} md={4} lg={3} className={classes.col_1}>
          <h3>Visit Us</h3>
          <p>
            San Francisco, California,
            <br /> United States
          </p>
        </Col>
        <Col sm={12} md={4} lg={3} className={classes.col_2}>
          <h3>Contact Us</h3>
          <p>1 (877) 342 - 2023</p>
          <p>contact@logo.com.</p>
        </Col>
      </Row>
      <Row className={classes.login_footer_2}></Row>
    </Container>
  );
};

export default Login;
