import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";


// App components
import Header from "./Header";
import About from "./About";
import Images from "./Images";
import OLMapFragment from "./OLMapFragment";
import Footer from './Footer'

// Images

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>        
        <Route exact path="/" component={OLMapFragment} />
        <Route path="/about" component={About} />
        <Route path="/images" component={Images} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
