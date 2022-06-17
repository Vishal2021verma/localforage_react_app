import { useContext, useEffect, useState } from "react";
import { DataContext } from "../App"

const ReadData = ()=>{
    const [data,setData] = useState([]);
    const num = useContext(DataContext);
    useEffect(() => {
        return setData(num);
    },[num]); 

    return (
        <>{data.map((dataItem, index) => {
            return <h3>{dataItem}</h3>
        })}
        </>
    );
    
    
    
};
export default ReadData;