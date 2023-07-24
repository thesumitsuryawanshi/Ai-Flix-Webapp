import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import FetchingTable from "./components/FetchingTable";
import Movies from "./components/Movies";
import Trending from "./components/Trending";



function App() {
  return (


 <div className="App">
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route path="/">
            <Home />
            <Footer /> 
          </Route> 
        </Switch>
      </Router>
    </div> 
  );
}

export default App;