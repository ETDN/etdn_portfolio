import React from "react";
import ReactDOM from "react-dom";
import "../index.css";
import "../fonts/ARAME-REGULAR.TTF";
import Nav from "./Navbar";

function Home() {
  return (
    <>
      <Nav />
      <div className="container_home">
        <h2>Hi, I'am</h2>
        <h1>Emilie Teodoro Do Nascimento</h1>
        <h2>Front-End / Software Development & UI Enthusiast</h2>
        <h3>
          <a href="www.linkedin.com/in/etdn">Learn more &gt;</a>
        </h3>
      </div>
    </>
  );
}

export default Home;
