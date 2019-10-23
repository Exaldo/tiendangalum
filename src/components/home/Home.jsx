import React from "react";
import CardLinks from "../cardlinks/CardLinks";
import { Container, Carousel, Row, Col } from "react-bootstrap";
import "./Home.css";
// import img from '../../assets/Photos/carosel1.jpg'

const Home = () => {
  return (
    <React.Fragment>
      <Container className="home-c">
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
