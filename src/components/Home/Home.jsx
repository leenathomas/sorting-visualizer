import React, { useEffect, useRef, useState } from "react";
import { bubbleSort, selectionSort } from "../Sort/Sort";
import useTrait from "../useTrait/useTrait";
import "./Home.css";

let sort = null;

function Home(props) {
    const [array, setArray] = useState([]);
    const timeoutRef = useRef();
    const [i, setI] = useState(0);
    const [j, setJ] = useState(0);
    const [option, setOption] = useState(null);
    const min = useTrait(0);

    const handleChange = (e) => {
        const str = e.target.value;
        setArray(str.split(",").map((i) => Number(i)));
    };
    useEffect(()=>{
        if (sort && array?.length) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => {
                sort({ array, setArray, min, i, j, setI, setJ });
            }, 500);
        }
    }, [i,j]);
    const reset = () =>{
        setArray([]);
        min.set(0);
        setOption(null);
        setJ(0); 
        setI(0);
        document.getElementById('input').value = "";
    }
    return (
        <div>
            <h1 className="container">Sort Visualizer</h1>
            <div className="options">
                <button className="button" onClick={() => { sort = bubbleSort; setOption("Bubble Sort")}}>Bubble Sort</button>
                <button className="button" onClick={() => { sort = selectionSort; setOption("Selection Sort")}}>Selection Sort</button>
            </div>
            {option ? <h2 className="container">{option} Visualizer</h2> : ("")}
            <div className="container">
                <label className="label">Enter the values as array</label>
                <input id="input" className="input" type="text" onChange={handleChange} />
                <button 
                    className="button" 
                    onClick={() => {
                        if (!sort) alert("Please select option")
                        else {
                            min.set(0);
                            sort({ array, setArray, min, i, j, setI, setJ }) 
                    }}
                    }
                >
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