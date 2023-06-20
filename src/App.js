import React from "react"
import Header from "./components/Header";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Footer from "./components/Footer";
import "./styles/App.scss"
import "./styles/Header.scss"
import "./styles/Home.scss"
import Home from "./components/Home";
import Contact from "./components/Contact"
import "./styles/Service.scss"
import Service from "./components/Service";
import "./styles/mediaquery.scss"


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/services" element={<Service/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
