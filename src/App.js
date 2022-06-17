import "./App.css";
import localforage from "localforage";
import { useState } from "react";
import { cloneElement } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import ReadData from "./components/readData";

export const DataContext = createContext();
function App() {
  const [data, setData] = useState([]);

  function createData() {
    localforage.setItem(
      "my_data",
      ["Anurag", "Vishal", "Kabir", "Rahul", "Alok"],
      function (err, value) {
        if (err) console.log(err);
        else console.log(value);
      }
    );
  }

  function readData() {
    localforage.getItem("my_data", function (err, value) {
      if (value) {
        setData(value);
      } else {
        console.log(err);
      }
    });
  }

  useEffect(() => {
    readData();
  }, []);

  return (
    <div className="App">
      <h1>Local Forage Crud Application</h1>
      <p>Local Forage Data</p>
      <DataContext.Provider value={data}>
        <ReadData />
      </DataContext.Provider>
    </div>
  );
}

export default App;
