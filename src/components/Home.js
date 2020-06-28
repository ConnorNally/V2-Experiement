import React, { Component } from "react";
import GRCover from '../img/Gravitys_Rainbow.jpg'

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg">
            <p>So this...is the true power of V2 rockets</p>
          </div>
          <div className="col-sm">
            <h3 className="mb-4">The V2 Rocket</h3>
            <p>
              The V-2 (German: Vergeltungswaffe 2, "Retribution Weapon 2"),
              technical name Aggregat 4 (A4), was the world's first
              long-range[4] guided ballistic missile. The missile, powered by a
              liquid-propellant rocket engine, was developed during the Second
              World War in Germany as a "vengeance weapon", assigned to attack
              Allied cities as retaliation for the Allied bombings against
              German cities. The V-2 rocket also became the first artificial
              object to travel into space by crossing the Kármán line with the
              vertical launch of MW 18014 on 20 June 1944.[5]
            </p>
          </div>
          <div className="col-sm">
            <h3 className="mb-4">Thomas Pynchon</h3>
            <p>Inspired by Gravity's Rainbow</p>
            <img
              src={GRCover}
              alt="GR Cover"
              className="img-fluid rounded mx-auto d-none d-sm-block"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
