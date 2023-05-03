import { useState, useEffect } from "react";
// import axios from "axios";
import axios from "axios";
function Fetch() {
  const [myData, setMyData] = useState([]);
  const [error,setError] = useState("");
//   console.log(myData[0].price)
  // useEffect(() => {
  //   axios.get("https://dummyjson.com/products")
  //   .then((res) => {
  //     // console.log("the data is ", res.data);
  //     setMyData(res.data.products);
  //   })
  //   .catch((error)=>{
  //     // console.log("The Error is" ,error);
  //     setError(error.message);
  //   });
  // }, []);
  
  //  Using Async Await
  const getApi = async()=>{
    
    try{
    const res = await axios.get("https://dummyjson.com/products")
    setMyData(res.data.products)
      
    } catch(error){
       setError(error.message);
    }

  }
  
   useEffect (()=>{
     getApi();
   },[]
  )
  
  return (
    <div className="App">
      {error != "" && <h1>{error}</h1>}
      {myData.map((post) => {
        const {id,title} = post;
        return (
          <div key={id}>
            <h2>{title.toUpperCase()} </h2>
          </div>
        );
      })}
    </div>
  );
}

export default Fetch;
