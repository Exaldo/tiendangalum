import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./carousel.css";

export default class CustomCarousel extends Component {
  render() {
    return (
      <Carousel className="mw-100 mt-5 mb-5">
        <Carousel.Item>
          <img
            fluid
            className="d-block rounded carouselimage"
            src={this.props.image1}
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            fluid
            className="d-block rounded carouselimage"
            src={this.props.image2}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            fluid
            className="d-block  rounded carouselimage"
            src={this.props.image3}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
