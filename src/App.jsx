import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import { Element } from "react-scroll";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <>
      <Header />
      <Element className="main">
        <Home />
        <About />
        <Skills/>
      </Element>
    </>
  );
}

export default App;
