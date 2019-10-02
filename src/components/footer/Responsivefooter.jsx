import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ResponsiveFooter.css';

const ResponsiveFooter = () => {
    return (
        <footer>
            <Container className="footer-container" >
                <Row className="footer-icons">
                    <Col>
                    <img src="" alt="Logo" />
                    </Col>
                    <Col className="f-box" xs={12} md= {6} lg={3}>
                        <div className="box-icon" >
                        <img className="f-icon" src={require('../../assets/icons/placeholder-white.svg')} alt=""/>
                            <h5>Domicilio</h5>
                            <h5>asfasdfasfadfa</h5>
                        </div>
                    </Col>
                    
                    <Col className="f-box" xs={12} md= {6} lg={3}>
                        <div className="box-icon">
                        <img className="f-icon" src={require('../../assets/icons/phone-book.svg')} alt=""/>
                            <h5>Teléfono</h5>
                            <h5>012345678</h5>
                        </div>
                    </Col>

                    <Col className="f-box" xs={12} md= {6} lg={3}>
                        <div className="box-icon">
                            <img className="f-icon" src={require('../../assets/icons/email.svg')} alt=""/>
                            <h5>email</h5>
                            <h5>prueba@hotmail.com</h5>
                        </div>
                    </Col>
                
             
                    <Col className="text-center" xs={12} md= {6} lg={4}> 
                    
                    </Col>
                </Row>
                <div className="text-center copyright">
                        <p>&copy; <b>Ng Aluminios y Vidrios, derechos reservados</b></p>
                        
                    </div>
                <p className="text-right">Diseño web realizado por:<strong> Aldo </strong></p>

            </Container>
        </footer>
    )
}

export default ResponsiveFooter;
