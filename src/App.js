import React from "react";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import OverView from "./Components/OverView";
import Dashboard from "./Components/Dashboard";
import Analytics from "./Components/Analytics";
import {Routes,Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="App">
   
   <BrowserRouter>
   <NavBar />
<Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="OverView" element={OverView } />
          <Route exact path="Dashboard" element={Dashboard } />
          <Route exact path="Analytics" element={Analytics} />
      </Routes>
      {/* <Footer /> */}
      </BrowserRouter>
      
      </div>
  );
}

export default App;
