import localforage from "localforage";
import { useEffect, useState } from "react";
import ReadData from "./readData";

const CreateData = () => {
    const [inputData,setInput] = useState("");
    
    function createData(data) {
        localforage.setItem("my_data", data, function (err, value) {
            console.log(value);
          }
        );
      }
      
      function handleChange(e){
        setInput(e.target.value);
      }

      function handleSubmit(e){
        function readData(){
            localforage.getItem("my_data",(err, value) => {
                   console.log(value);
                    value.push(inputData);
                    console.log(value);
                    createData(value); 
            });
        }
        readData();
        setInput("");
        e.preventDefault();
      }
      return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={inputData} required />
            <button type="submit"> + Add</button>
        </form>
         <ReadData />
        </>
      );

};

export default CreateData;