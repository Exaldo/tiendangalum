import React from "react";
import { Container, Row, Col, Button, ButtonToolbar } from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";
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
              series tradicionales y españolas
            </p>
            <br />
            <a href="#aluminio" className="btn-services">
              <Link
                to="aluminio"
                className="btn-services"
                activeClass="active"
                spy={true}
                offset={-70}
                duration={500}
                smooth={true}
              >
                Ver fotos
              </Link>
            </a>
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
            <a href="#vidrio" className="btn-services">
              <Link
                to="vidrio"
                className="btn-services"
                activeClass="active"
                spy={true}
                offset={-70}
                duration={500}
                smooth={true}
              >
                Ver fotos
              </Link>
            </a>
          </Col>

          <Col xs={12} md={6} lg={4} id="box">
            <h2>Otros</h2>
            <h3></h3>
            <p id="services-p">
              Domos, Repisas, Espejos, Biselados, canteados, reparaciones y
              remodelaciones para su hogar, oficina o negocio
            </p>
            <br />

            <a href="#otros" className="btn-services">
              <Link
                to="otros"
                className="btn-services"
                activeClass="active"
                spy={true}
                offset={-70}
                duration={500}
                smooth={true}
              >
                Ver fotos
              </Link>
            </a>
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

      {/* =================== Carousel ================= */}
      <Container className="mw-100">
        <Row className="d-flex ">
          <Col xs={12} sm={12} md={12} lg={12} className="p-0">
            <h1 id="aluminio">Alumino</h1>
            <CustomCarousel
              image1={require("../../assets/Photos/aluminio/1.jpg")}
              image2={require("../../assets/Photos/aluminio/2.jpg")}
              image3={require("../../assets/Photos/aluminio/3.jpg")}
            />
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} className="p-0">
            <h1 id="vidrio">Vidrio</h1>
            <CustomCarousel
              image1={require("../../assets/Photos/vidrio/1.jpg")}
              image2={require("../../assets/Photos/vidrio/2.jpg")}
              image3={require("../../assets/Photos/vidrio/3.jpg")}
            />
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} className="p-0">
            <h1 id="otros">Otros</h1>
            <CustomCarousel
              image1={require("../../assets/Photos/otros/1.jpg")}
              image2={require("../../assets/Photos/otros/2.jpg")}
              image3={require("../../assets/Photos/otros/3.jpg")}
            />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Services;
