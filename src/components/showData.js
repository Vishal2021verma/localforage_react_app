import localforage from "localforage";

function ShowData(props){

    function handleDelete(){
        localforage.getItem("my_data",function (err, value){
            value.splice(props.id,1);
            localforage.setItem("my_data", value, function(err, dataItem){
                console.log("Item deleted");
            });
        })
    
    }
    return (
        <>
        <h3>{props.name}</h3>
        <button onClick={handleDelete}>Delete</button>
        <button conclick={}>Update</button>
        </>
    );

}
export default ShowData;