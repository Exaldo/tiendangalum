import React from 'react'
import  { Container, Row, Col, Button, ButtonToolbar }  from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Services.css'
import CustomCarousel from '../carousel/carousel'


const Services = () => {
    return (
    <Container id="card-container">
        <Row id="card-container-child">
            <Col xs={12} md= {6} lg={4} id="box">
                
                    <h2>Aluminios</h2>
                    <h3>Servicio Uno</h3>
                    <p id="services-p">Lorem ipsum dolor sit amet consectetur adipisicing 
                        elit. Ipsa, numquam earum? Laborum at molestias exercitationem explicabo voluptate 
                        nemo magni provident earum rerum.
                        Cupiditate temporibus iste quas culpa quia id obcaecati!</p>
                        <Link className="btn-services">  Ver fotos  </Link>
               
            </Col>

            <Col xs={12} md= {6} lg={4} id="box" >
                    <h2>Vidrios</h2>
                    <h3>Servicio Dos</h3>
                    <p id="services-p">Lorem ipsum dolor sit amet consectetur adipisicing 
                        elit. Ipsa, numquam earum? Laborum at molestias exercitationem explicabo voluptate 
                        nemo magni provident earum rerum.
                        Cupiditate temporibus iste quas culpa quia id obcaecati!</p>
                        <Link className="btn-services">  Ver fotos  </Link>
            </Col>

            <Col xs={12} md= {6} lg={4} id="box" >
                <h2>Canceles</h2>
                <h3>Servicio Tres</h3>
                <p id="services-p">Lorem ipsum dolor sit amet consectetur adipisicing 
                    elit. Ipsa, numquam earum? Laborum at molestias exercitationem explicabo voluptate 
                    nemo magni provident earum rerum.
                     Cupiditate temporibus iste quas culpa quia id obcaecati!</p>
                     <Link className="btn-services">  Ver fotos  </Link>
            </Col>
            <Col xs={12} sm={12} md= {12} lg={12}>
                <ButtonToolbar className="button-back">
                <Link to="/"> 
                <Button variant="dark" size="lg">Regresar</Button>
          </Link>
        </ButtonToolbar>
        </Col>
        </Row>
        
        <Row>
            <Col xs={12} sm={12} md= {12} lg={12}>
                <CustomCarousel/>
            </Col>
        </Row>





    </Container>  
    )
}

export default Services;