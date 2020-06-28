import React, { Component } from "react";
import mapImage from "../img/map.jpg";

class Map extends Component {
  render() {
    return (
      <div>
        <p>Hey, it's that map!</p>

        <img
          src={mapImage}
          alt="map_template"
          className="img-fluid mx-auto mt-4 d-block"
        />
      </div>
    );
  }
}

export default Map;
