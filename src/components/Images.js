import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import launch from '../img/launch_site.jpg'
import strike from '../img/strike.jpg'
import waluigi from '../img/waluigi.jpg'

class Images extends Component {
  render() {
    return (
        <div id="image-container" class="container-fluid w-50 pb-10">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={launch}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Launch Site</h3>
            <p class="d">Slothrop might be nearby</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={strike}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Rocket Strike</h3>
            <p class="d">The worst V2 attack on Britain struck a Woolworths store in New Cross, 
                south east London, one afternoon in November 1944, leaving 168 people dead</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={waluigi}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>waluigi</h3>
            <p class="d">
                Watch out, he might get ya!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    );
  }
}

export default Images;