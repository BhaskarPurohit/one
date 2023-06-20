import React from "react"
import Header from "./components/Header";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import "./styles/App.scss"
import "./styles/Header.scss"
import "./styles/Home.scss"
import Home from "./components/Home";


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
