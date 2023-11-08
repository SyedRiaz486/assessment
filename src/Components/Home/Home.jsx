import React from "react";
import classes from "./Home.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Img from "../../assets/Images/tablet-while-working.png";
import Button from "../Button/Button";
import arrow from "../../assets/Images/Arrow_Right.svg";

const Home = () => {
  return (
    <Container fluid className={classes.container}>
      <Row className={classes.row}>
        <Col xs={12} md={12} lg={6} className={classes.col_1}>
          <div>
            <h1>UI is the way the world agrees.™</h1>
            <p>It's where people come together and find common ground.</p>
            <div className={classes.btn_container}>
              <Button>
                Free Trail <img src={arrow} alt="" />
              </Button>
              <Button>Free Sign-Up</Button>
            </div>
          </div>
        </Col>
        <Col xs={12} md={12} lg={6} className={classes.col_2}>
          <div>
            <img src={Img} alt="" />
            <div className={classes.btn_container_mob}>
              <Button>
                Free Trail <img src={arrow} alt="" />
              </Button>
              <Button>Free Sign-Up</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
