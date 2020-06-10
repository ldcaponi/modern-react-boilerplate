import React from "react";
import icon from "./files-and-folders.svg";

function App(props) {
  return (
    <main className="app">
      this is the app{" "}
      <img src={icon} style={{ height: 50 }} alt="folder icon"></img>
      <div className="test-icon-div"></div>
    </main>
  );
}

export default App;
