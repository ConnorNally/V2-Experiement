import React from 'react'
import Grid from '@material-ui/core/Grid'
import icon from '../img/rocket-icon.png'

// Start Openlayers imports
import { 
    Map,
    View,
    Feature,
 } from 'ol'
import {
    Tile as TileLayer,
    Vector as VectorLayer
} from 'ol/layer'
import {
    Vector as VectorSource,
    XYZ as XYZSource,
} from 'ol/source'
import { 
    ScaleLine,
    ZoomSlider,
    defaults as DefaultControls
} from 'ol/control'
import {
    Style,
} from 'ol/style'

import Icon from 'ol/style/Icon';
import Point from 'ol/geom/Point';
import { transform } from 'ol/proj'
import rocketData from './RocketData'
 
// End Openlayers imports


    var vectorSource = new VectorSource({
    });

for (var i = 0; i < rocketData.length; i++) {
    var iconFeature = new Feature({
      geometry: new Point(transform([rocketData[i][0], rocketData[i][1]], 'EPSG:4326', 'EPSG:3857')),
    });

    var iconStyle = new Style({
      image: new Icon({
        anchor: [0.5, 0.5],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        opacity: 0.75,
        src: icon
      })
    });

    iconFeature.setStyle(iconStyle);
    vectorSource.addFeature(iconFeature);
}

  
  var vectorLayer = new VectorLayer({
    source: vectorSource
  });
  



class OLMap extends React.Component {
  constructor(props) {
    super(props);
    this.updateDimensions = this.updateDimensions.bind(this);
  }
  updateDimensions() {
    const h = window.innerWidth >= 992 ? window.innerHeight : 400;
    this.setState({ height: h });
  }
  componentWillMount() {
    window.addEventListener("resize", this.updateDimensions);
    this.updateDimensions();
  }
  componentDidMount() {
    // Create an Openlayer Map instance with two tile layers
    const map = new Map({
      //  Display the map in the div with the id of map
      target: "map",
      layers: [
        new TileLayer({
          source: new XYZSource({
            url: "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            projection: "EPSG:3857",
          }),
        }),
        vectorLayer
      ],
      // Add in the following map controls
      controls: DefaultControls().extend([new ZoomSlider(), new ScaleLine()]),
      // Render the tile layers in a map view with a Mercator projection
      view: new View({
        projection: 'EPSG:3857',
        center: [80000, 6650000],
        zoom: 9,
      })
    });

  }

  
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  
  
  render() {
      
    const style = {
      width: "75%",
      height: "980px",
      backgroundColor: "#cccccc",
    };
    return (
      <div>
        <div className="container text-center mb-4">
          <div className="row">
            <div className="col-12">This map details the location of V2 Rocket strikes from 8th of September 1994, 
            to the final strike on 27th of March 1945. This information is provided by The Ministry of Home
            Security doument title "Big Ben".</div>
          </div>
        </div>
        <Grid container>
          <Grid item xs={12}>
            <div id="map" className="mb-4" style={style}></div>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default OLMap;