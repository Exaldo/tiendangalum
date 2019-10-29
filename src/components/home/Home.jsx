import React from "react";
import CardLinks from "../cardlinks/CardLinks";
import { Container, Carousel, Row, Col, Image } from "react-bootstrap";
import "./Home.css";
// import img from '../../assets/Photos/carosel1.jpg'

const Home = () => {
  return (
    <React.Fragment>
      <Container className="home-c">
        <Row className="justify-content-center">
          <Col xs={12} sm={12} md={12} lg={6}>
            <Image
              src={require("../../assets/Photos/logo.png")}
              alt="logo"
              fluid
            />
          </Col>
          <Col xs={12} sm={12} md={12} lg={6}>
            <h2 className="home-title">NG ALUMINIO Y VIDRIO</h2>
            <p className="home-text1">
              SERIEDAD Y COMPROMISO CON NUESTROS CLIENTES NOS DISTINGUEN{" "}
            </p>
            <p className="home-text2">13 AÑOS DE EXPERIENCIA</p>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} className="">
            <p className="home-text3 text-glow">
              OFERTAS
              <br /> Y <br /> PROMOCIONES
            </p>
          </Col>
        </Row>

        <Row className="landpage-container">
          <Col
            xs={11}
            sm={12}
            md={12}
            lg={12}
            className="landpage-container-child"
          >
            <Image
              className="landpage-image"
              src={require("../../assets/Photos/homebg1.jpg")}
              alt="cover"
              fluid
            ></Image>
          </Col>
        </Row>

        <div id="home"></div>
      </Container>
      <CardLinks />
    </React.Fragment>
  );
};

export default Home;
