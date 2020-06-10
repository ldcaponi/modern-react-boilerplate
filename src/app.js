import React from "react";
import icon from "./images/files-and-folders.svg";

function App(props) {
  return (
    <main className="app">
      this is the app{" "}
      <img src={icon} style={{ height: 50 }} alt="folder icon"></img>
    </main>
  );
}

export default App;
