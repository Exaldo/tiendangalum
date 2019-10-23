import React from "react";
import { Container, Row, Col, Button, ButtonToolbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Services.css";
import CustomCarousel from "../carousel/carousel";

const Services = () => {
  return (
    <React.Fragment>
      <Container id="card-container">
        <Row id="card-container-child">
          <Col xs={12} md={6} lg={4} id="box">
            <h2>Aluminios</h2>
            <h3></h3>
            <p id="services-p">
              Trabajamos con aluminios y herrajes de gran calidad, todo tipo de
              series tradicionales y españolas{" "}
            </p>
            <br />
            <Link className="btn-services"> Ver fotos </Link>
          </Col>

          <Col xs={12} md={6} lg={4} id="box">
            <h2>Vidrios</h2>
            <h3></h3>
            <p id="services-p">
              Canceles para baño, barandales, pasamanos, fachadas, puertas
              automaticas, cubiertas para mesa; así como peliculas de seguridad
              y esmerilada.
            </p>
            <br />
            <Link className="btn-services"> Ver fotos </Link>
          </Col>

          <Col xs={12} md={6} lg={4} id="box">
            <h2>Otros</h2>
            <h3></h3>
            <p id="services-p">
              Domos, Repisas, Espejos, Biselados, canteados, reparaciones y
              remodelaciones para su hogar, oficina o negocio
            </p>
            <br />

            <Link className="btn-services"> Ver fotos </Link>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12}>
            <ButtonToolbar className="button-back">
              <Link to="/">
                <Button variant="dark" size="lg">
                  Regresar
                </Button>
              </Link>
            </ButtonToolbar>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <CustomCarousel className="mycarousel" />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Services;
