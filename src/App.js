import './App.css';
import React,{useState,useEffect} from 'react';

function App() {
  var [array,setArray] = useState([4,2,1,6,9,7,3,8]);
  var toSortArray = array;
  var size = 8;

  useEffect(()=>{
  console.log("rendered");
  },[array]);

  const bubblesort=()=>{
    for(let i=0;i<size;i++){
    for(let j=0;j<size;j++){
    if(toSortArray[i]<toSortArray[j]){
      var swap=toSortArray[i];
        toSortArray[i]=toSortArray[j];
        toSortArray[j]=swap;
        setArray([...toSortArray]);
        }
      }
    }
  }
  return (
    <div className="container">
      {array.map(element=><div className="App" style={{height:element*10}}></div>)}
      <div>
        {array}
        <button onClick={()=>bubblesort()}>sort</button>
      </div>
    </div>
  );
}

export default App;