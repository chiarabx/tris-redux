import React from "react";
import { Grid } from "./components/Grid/Grid";
import { EmptyButton } from "./components/EmptyButton/EmptyButton";

class App extends React.Component {
  render() {
    console.log("rendering app");
    return (
      <div className="bigContainer">
        <h1>Game Of Tris</h1>
        <Grid />
        <EmptyButton />
      </div>
    );
  }
}

export default App;
