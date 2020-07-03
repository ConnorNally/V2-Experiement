import React, { Component } from "react";
import GRCover from "../img/GRjapanese.jpg";

class About extends Component {
  render() {
    return (
      <div>
        <h2 class="pynchonquote ml-4">
          A screaming comes <br></br>
          across the sky...
        </h2>
        <div className="container-lg">
          <div className="row">
            <div className="col-sm-6">
              <h2 className="mt-4 mb-4">The V2 Rocket</h2>
              During World War II humanity entered the space age with the
              development of the V2. For the first few months this was happening
              without anyone being aware. The rockets travelled faster than the
              speed of sound, so the explosion and impact would be heard before
              the sound of the rocket itself. It happened so fast that the
              public would have no prior warning, unlike the air raid siren
              informing of an incoming bombing.
              <br></br> <br></br>
              “On the horizon, I saw three streaks go up into the air and
              disappear into the stratosphere,” he recalls. “I’m quite certain
              these were V2 rockets being launched to crash somewhere – where I
              don’t know.”
              <hr></hr>
            </div>
            <div
              id="quote"
              className="col-sm-4 text-center font-italic shadow p-4 float-left"
            >
              "We have invaded space with our rocket and for the first time. We
              have used space as a bridge between two points on the earth; we
              have proved rocket propulsion practicable for space travel. This
              third day of October, 1942, is the first of a new era, one of new
              transportation—that of space travel."
              <br></br> <br></br>
              —General Walter Dornberger
            </div>

            <div className="col-12 text-center">
              <img
                src={GRCover}
                alt="GR Cover"
                className="cover img-fluid rounded"
              />
            </div>

            <div className="col-12 mt-5">
            <hr></hr>
              <h2 className="mb-4">Gravity's Rainbow</h2>
              Gravity's Rainbow is a 1973 novel by American writer Thomas
              Pynchon. Lengthy, complex, and featuring a large cast of
              characters, the narrative is set primarily in Europe at the end of
              World War II, and centers on the design, production and dispatch
              of V-2 rockets by the German military. In particular, it features
              the quest undertaken by several characters to uncover the secret
              of a mysterious device named the "Schwarzgerät" ("black device"),
              slated to be installed in a rocket with the serial number "00000".
              Traversing a wide range of knowledge, Gravity's Rainbow
              transgresses boundaries between high and low culture, between
              literary propriety and profanity, and between science and
              speculative metaphysics.
              <br></br>
              <br></br>
              It shared the 1974 U.S. National Book
              Award for Fiction with A Crown of Feathers and Other Stories by
              Isaac Bashevis Singer.[1] Although selected by the Pulitzer Prize
              jury on fiction for the 1974 Pulitzer Prize for Fiction, the
              Pulitzer Advisory Board was offended by its content, some of which
              was described as "'unreadable,' 'turgid,' 'overwritten' and in
              parts 'obscene'".[2] No Pulitzer Prize was awarded for fiction
              that year.[2][3] The novel was nominated for the 1973 Nebula Award
              for Best Novel.[4] Time named Gravity's Rainbow one of its
              "All-Time 100 Greatest Novels", a list of the best
              English-language novels from 1973 to 2005[5] and it is considered
              by many critics to be one of the greatest American novels ever
              written.[6]
            </div>
            <div className="col-12 mt-5 mb-5">
            <hr></hr>
              <h2 className="mb-4">Concept</h2>
              This was built as a way to personally teach myself programing, primarily React.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
