import React, { Component } from "react";
import GRCover from '../img/Gravitys_Rainbow.jpg'

class Home extends Component {
  render() {
    return (
      <div className="container ">
        <div className="row ">
          <div id="quote" className="col-lg text-center font-italic shadow p-4">
          "We have invaded space with our rocket and for the first time. We have used space as a bridge 
            between two points on the earth; we have proved rocket propulsion practicable for space travel. 
            This third day of October, 1942, is the first of a new era, one of new transportation—that of space travel."
            <br></br>            <br></br>
            —General Walter Dornberger
          </div>
          <div className="col-sm ">
            <h3 className="mb-4">The V2 Rocket</h3>
            So this...is the true power of V2 Rockets...
          </div>
          <div className="col-sm ">
            <h3 className="mb-4">Thomas Pynchon</h3>
            <p>Inspired by Gravity's Rainbow</p>             

          </div>

        </div>
             <img
              src={GRCover}
              alt="GR Cover"
              className="cover img-fluid rounded float-right "
            />
      </div>
    );
  }
}

export default Home;
