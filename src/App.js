import "./App.css";
import localforage from "localforage";
import { useState } from "react";
import ReadData from "./components/readData";
import CreateData from "./components/createData";

function App() {
  
  return (
    <div className="App">
      <h1>Local Forage Crud Application</h1>
      <p>Local Forage Data</p>
      <CreateData />
    </div>
  );
}

export default App;
