import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./fonts/ARAME-REGULAR.TTF";

function App() {
  return (
    <div className="background">
      <h2>Hi, I'am</h2>
      <h1>Emilie Teodoro Do Nascimento</h1>
      <h2>Front-End / Software Development & UI Enthusiast</h2>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
