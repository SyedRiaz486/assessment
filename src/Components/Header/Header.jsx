import React, { useState, useRef } from "react";
import classes from "./Header.module.css";
import icon from "../../assets/Images/search-normal.svg";
import pic from "../../assets/Images/01.png";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../Button/Button";
import Menu from "../../assets/Images/Menu.svg";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate, Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
const Header = () => {
  const navigate = useNavigate();
  const menuElement = useRef();
  const [selectedLink, setSelectedLink] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);
  const handleLinkClick = (index) => {
    setSelectedLink(index);
  };

  const handleLogout = () => {


    signOut(auth).then(() => {
      navigate("/");
    })
  };
  const handleMenu = () => {

    if (
      menuElement.current.style.left === "" ||
      menuElement.current.style.left === "-200px"
    ) {
      menuElement.current.style.left = 0;
    } else {

      menuElement.current.style.left = "-200px";
    }
    menuElement.current.removeEventListener("click", handleMenu);
  };



  return (
    <Container fluid className={classes.container}>
      <Row className={classes.row} ref={menuElement}>
        <Col md={2} lg={2} xl={2} className={classes.col_1}>
          <h1>LOGO</h1>
        </Col>
        <Col md={4} lg={4} xl={5} className={classes.col_2}>
          <div className={classes.input_container}>
            <img src={icon} alt="" />
            <input type="text" />
          </div>
        </Col>
        <Col md={6} lg={6} xl={5} className={classes.col_3}>
          <ul>
            <li
              className={selectedLink === 0 ? classes.selected : ""}
              onClick={() => handleLinkClick(0)}
            >

              <Link to="/">Home</Link>
            </li>
            <li
              className={selectedLink === 1 ? classes.selected : ""}
              onClick={() => handleLinkClick(1)}
            >
              <Link to="/about">About</Link>
            </li>
            <li
              className={selectedLink === 2 ? classes.selected : ""}
              onClick={() => handleLinkClick(2)}
            >
              <Link to="/document"> Add Document</Link>
            </li>
            <li
              className={selectedLink === 3 ? classes.selected : ""}
              onClick={handleLogout}
            >
              Logout
            </li>
          </ul>
          <img className={classes.pic} src={pic} alt="" />
          <Button className={classes.btn}>Get Started</Button>
          <span onClick={handleMenu}><AiOutlineClose className={classes.closeIcon} /></span>
        </Col>
      </Row>

      <Row className={classes.mob_row}>
        <Col xs={4} className={classes.col_1_mob} onClick={handleMenu}>
          <img src={Menu} alt="" />
        </Col>
        <Col xs={4} className={classes.col_2_mob}>
          <h1>LOGO</h1>
        </Col>
        <Col xs={4} className={classes.col_3_mob}>
          {/* <Button className={classes.login_btn}>Login</Button> */}
          <img className={classes.pic} src={pic} alt="" />
          {/* <Button className={classes.btn}>Get Started</Button> */}
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
