import React from 'react'
import { Container, Row, Col, Button, ButtonToolbar } from 'react-bootstrap';
import Iframe from 'react-iframe'
import { Link } from 'react-router-dom';

import './GoogleMaps.css'

const GoogleMaps = () => {
  return (

<Row>
  <Col xs={12} sm={12} md= {12} lg={12}>
    <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7468.248030060683!2d-103.3975855768265!3d20.62380129487619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428adaf160aabed%3A0x442b7469a803018c!2sEl%20Sauz%2C%20Guadalajara%2C%20Jal.!5e0!3m2!1ses!2smx!4v1571108957536!5m2!1ses!2smx"
            position="relative"
            width="100%"
            id="myId"
            className="myClassname"
            height="600px"
            styles={{}}/>
    </Col>
    <Col xs={12} sm={12} md= {12} lg={12}>
    <ButtonToolbar className="button-back">
          <Link to="/"> 
            <Button variant="dark" size="lg">Regresar</Button>
          </Link>
    </ButtonToolbar>
    </Col>
  </Row>
            
  )
          }

export default GoogleMaps
