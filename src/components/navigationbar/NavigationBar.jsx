import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import useWindowScrollPosition from "@rehooks/window-scroll-position";
import { Nav, Navbar } from 'react-bootstrap' 
import './NavigationBar.css'
import {Link} from 'react-router-dom'


const NavigationBar = ()  => {
    const [change, setChange] = useState(false);
        const changePosition = 100;
      
        let position = useWindowScrollPosition();
        // position == { x: 0, y: 0 }
      
        if (position.y > changePosition && !change) {
          setChange(true);
        }
      
        if (position.y <= changePosition && change) {
          setChange(false);
        }

        let style = {
            backgroundColor: change ? "transparent" : "transparent",
            transition: "400ms ease-out",
            
            position: "top",
            
        }
    return (
        
        <Navbar style={style} sticky={'top'} className="Navhead" expand="lg">
            <Link className="navbar-brand" to="/"><img alt="Logo"/></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar.nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                    <Link to="/services" className="nav-link"> 
                            Servicios 
                    </Link>
                    </Nav.Item>
                    
                    <Nav.Item>
                        <Link to="/" className="nav-link">
                            
                             Home 
                            
                        </Link>
                    </Nav.Item>
                    
                    <Nav.Item>
                        <Link to="/" className="nav-link">
                            
                                Home 
                            
                        </Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar
