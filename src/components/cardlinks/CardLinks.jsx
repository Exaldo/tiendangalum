import React from 'react';
import './cardLinks.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CardLinks = () => {
    return (
        <Container className="card-container" >
            <Row  className="body-card">
            
            {/* //enlace a cotización */}
            <Col xs={12} sm={12} md= {6} lg={4} className="card">
                    <div className="face face1">
                        <div className="content">
                            <img className="card-image" src={require('../../assets/icons/phone-book.svg')} alt="Desing"/>
                            <h3>Cotización</h3>
                        </div>
                    </div>
            
                    <div className="face face2">
                        <div className="content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti</p>
                        <a className="card-links" href="#">Cotiza</a> 
                        </div>
                    </div>
            </Col>

            {/* //enlace a servicios */}
            <Col xs={12} sm={12} md= {6} lg={4} className="card">
                    <div className="face face1">
                        <div className="content">
                            <img className="card-image" src={require('../../assets/icons/customer-support.svg')} alt="Desing"/>
                            <h3>Servicios</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti</p>
                        <Link to="/services" className="card-links" >Llevame</Link> 
                        </div>
                    </div>
            </Col>
            
            {/* //enlace al mapa */}
            <Col xs={12} sm={12} md= {12} lg={4} className="card">
                    <div className="face face1">
                        <div className="content">
                            <img  className="card-image" src={require('../../assets/icons/placeholder.svg')} alt="Desing"/>
                            <h3>Mapa</h3>
                        </div>
                    </div>
            
                    <div className="face face2">
                        <div className="content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti</p>
                        <Link className="card-links" to="/map">Encuentranos</Link> 
                        </div>
                    </div>
            </Col>
            </Row>
        </Container>
            
    )
}

export default CardLinks;
