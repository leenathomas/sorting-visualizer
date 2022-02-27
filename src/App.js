import "./App.css";
import React, { useState, useEffect, useRef } from "react";

function App() {
  var [array, setArray] = useState([]);
  var size = array.length;
  const timeoutRef = useRef();
  var [i,setI] = useState(0);
  var [j,setJ] = useState(0);

  useEffect(()=>{
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        bubblesort();
      }, 500); 
  },[i,j]);

  const handleChange = (e) => {
    var str = e.target.value;
    setArray(str.split(",").map((i) => Number(i)));
  };

  const bubblesort = () => {
    var dataArray = [...array];
    var swap = dataArray[j];

    if(j === size-i-1){
      setJ(0); 
      setI(i+1);
    }
    
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
    setJ(0); 
    setI(0);
    document.getElementById('input').value = "";
  }
  return (
    <div>
      <h1 className="container">Bubble Sort Visualizer</h1>
      <div className="container">  
        <label className="label">Enter the values as array</label>
        <input id="input" className="input" type="text" onChange={handleChange} />
        <button className="button" onClick={() => bubblesort()}>
          sort
        </button >
        <button className="button-secondary" onClick={() => reset()}>
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
