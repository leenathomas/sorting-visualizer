import React, { useEffect, useRef, useState } from "react";
import BubbleSort from "../Sort/Sort";
import "./Home.css";

function Home(props) {
    const [array, setArray] = useState([]);
    const timeoutRef = useRef();
    const [i, setI] = useState(0);
    const [j, setJ] = useState(0);

    const handleChange = (e) => {
        const str = e.target.value;
        setArray(str.split(",").map((i) => Number(i)));
    };
    useEffect(()=>{
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          BubbleSort({ array, setArray, i, j, setI, setJ });
        }, 500); 
    }, [i,j]);
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
                <button className="button" onClick={() => BubbleSort({ array, setArray, i, j, setI, setJ })}>
                sort
                </button >
                <button className="button-secondary" onClick={() => reset()}>
                reset
                </button>
            </div>
            <div style={{ textAlign: "center" }}>
                {array.map((element, i) => (
                <div className="App" key={i} style={{ height: (element + 1) * 10 }}>
                    {element}
                </div>
                ))}
            </div>
        </div>
    )
}

export default Home;