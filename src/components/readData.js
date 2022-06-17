import localforage from "localforage";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../App"
import ShowData from "./showData";



const ReadData = ()=>{
    const [data,setData] = useState([]);

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
    },[data]); 

    return (
        <>{data.map((dataItem, index) => {
            return <>
            <ShowData 
            key={index}
            id={index}
            name={dataItem}
            />
            </>
        })}
        </>
    );
    
    
    
};
export default ReadData;