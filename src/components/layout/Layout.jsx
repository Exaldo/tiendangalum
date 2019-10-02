import React from 'react'
import Container from 'react-bootstrap/Container';
import './Layout.css'


const Layout = (props) => {
    return (
        <Container id="layout">
            {props.children}
        </Container>
    )
}

export default Layout;
