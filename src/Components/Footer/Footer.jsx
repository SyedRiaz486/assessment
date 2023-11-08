import React from "react";
import classes from "./Footer.module.css";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className={classes.container}>
      <Row className={classes.Row}>
        <Col xs={12} md={4} lg={6} className={classes.col_1}>
          <p>Copyright © 2023 LOGO</p>
        </Col>
        <Col xs={12} md={8} lg={6} className={classes.col_2}>
          <p>
            All Rights Reserved | <a href="">Terms and Conditions</a> |{" "}
            <a href="">Privacy Policy</a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
