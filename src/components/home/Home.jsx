import React from 'react'
import CardLinks from '../cardlinks/CardLinks'

import { Container, Carousel } from 'react-bootstrap'
import './Home.css'
// import img from '../../assets/Photos/carosel1.jpg'

const Home = () => {
    return (
       <React.Fragment>
       <div id="home"></div>
       <div id="in-home"></div>
       <CardLinks/>
       </React.Fragment>
       
    )
}

export default Home; 
 