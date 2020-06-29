import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// App components
import Header from "./Header";
import Home from "./Home";
import OLMapFragment from "./OLMapFragment";
import Footer from './Footer'

// Images

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/map" component={OLMapFragment} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
