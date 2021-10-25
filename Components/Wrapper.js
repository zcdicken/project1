import React from 'react';
import Block from './Block.js';
import data from "./Data.js";

function App() {
    const [list, changeList] = React.useState(data);

    let elements = list.map((itm, idx)=>
        <div key={idx}><Block data={{img:list[idx].img, name:list[idx].name, category:list[idx].category, value:list[idx].value}}></Block></div>
    )

    const All =()=>{
        changeList(data);
    }

    const Games =()=>{
        let arr = [];
        for(let i = 0; i < data.length; i++) {
            if(data[i].category === "games") {
                arr.push(data[i]);
            }
        }
        changeList(arr);
    }

    const Television =()=>{
        let arr = [];
        for(let i = 0; i < data.length; i++) {
            if(data[i].category === "television") {
                arr.push(data[i]);
            }
        }
        changeList(arr);
    }

    const Animated =()=>{
        let arr = [];
        for(let i = 0; i < data.length; i++) {
            if(data[i].category === "animation") {
                arr.push(data[i]);
            }
        }
        changeList(arr);
    }

    return (
        <div className="App">
            <div className="Nav">
                <button onClick={All}>All</button>
                <button onClick={Games}>Games</button>
                <button onClick={Television}>Television</button>
                <button onClick={Animated}>Animation</button>
            </div>
            <div className="center">
                {elements}
            </div>
        </div>
    );
}

export default App;
