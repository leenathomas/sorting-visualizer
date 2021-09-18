import "./App.css";
import React, { useState, useEffect, useRef } from "react";

function App() {
  var [array, setArray] = useState([]);
  var size = array.length;
  const timeoutRef = useRef();
  var [i,setI] = useState(0);
  var [j,setJ] = useState(0);

  useEffect(()=>{
    if(i<size && j <size){
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        bubblesort();
      }, 500); 
    }  
  },[i,j,size]);

  const handleChange = (e) => {
    var str = e.target.value;
    setArray(str.split(",").map((i) => Number(i)));
  };

  const bubblesort = () => {
    var dataArray = [...array];
    
    if(j === size-i-1){
      setJ(0);
      setI(i+1);
    }
    var swap = dataArray[j];
    if(i<size-1 && j<size-i-1){
      if(swap > dataArray[j+1]){
      dataArray[j]=dataArray[j+1];
      dataArray[j+1] = swap;
      setArray(dataArray);
      setJ(j+1); 
      }
      else{
        setJ(j+1);
      }
    }
  
  };

  const reset = () =>{
    setArray([]);
    document.getElementById('input').value = "";
  }
  return (
    <div>
      <div className="container">
        <label className="label">Enter the values as array</label>
        <input id="input" className="input" type="text" onChange={handleChange} />
        <button className="button" onClick={() => bubblesort()}>
          sort
        </button >
        <button className="button" onClick={() => reset()}>
          reset
        </button>
      </div>
      <div style={{ textAlign: "center" }}>
        {array.map((element) => (
          <div className="App" style={{ height: (element + 1) * 10 }}>
            {element}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
