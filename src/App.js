import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import About from "./components/About.jsx";
import Design from "./components/Design.jsx";
import Home from "./components/Home.jsx";
import Illustration from "./components/Illustration.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Error from "./components/Error";

function App() {
  return (
    <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/design-and-development" component={Design} />
          <Route path="/illustration" component={Illustration} />
          <Route path="/about" component={About} />
          <Route component={Error} />
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
