import React from "react";
import CardLinks from "../cardlinks/CardLinks";
import { Container, Carousel, Row, Col, Image } from "react-bootstrap";
import "./Home.css";
// import img from '../../assets/Photos/carosel1.jpg'

const Home = () => {
  return (
    <React.Fragment>
      <Container className="home-c">
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Image
              src={require("../../assets/Photos/logo.png")}
              alt="logo"
              fluid
            />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <h2 className="home-title">NG ALUMINIO Y VIDRIO</h2>
            <p className="home-text1">
              Seriedad y compromiso <br /> con nuestros clientes nos distinguen{" "}
            </p>
            <p className="home-text2">13 AÑOS DE EXPERIENCIA</p>
            <p className="home-text3">OFERTAS Y PROMOCIONES</p>
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <div id="in-home"></div>
          </Col>
        </Row>

        <div id="home"></div>

        <CardLinks />
      </Container>
    </React.Fragment>
  );
};

export default Home;