import React from 'react';

import './App.css';

function App() {
  const [number, setNumber] =React.useState(0);
  const [oddNumber, setOddNumber]=React.useState(0);
  const [divisible, setDivisable] =React.useState(0);
  const [reset, setReset] = React.useState(0);
  const [boxes, setBoxes] = React.useState([]);
  const [mess, setMess]=React.useState("");
  let boxEles = boxes;


  let borCol;
  let backCol;

  const block = {
    margin: "20px",
    height: "100px",
    width: "100px",
    weight: "2px",
    borderColor:  "black",
    borderStyle: "solid",
    backgroundColor: "red"
  };

  const block1 = {
      margin: "0px",
      height: "0px",
      width: "0px",
      weight: "0px"
  };

  React.useEffect(()=>{
    let ogBoxes = boxes;
    ogBoxes.push("some string");
    setBoxes(ogBoxes);
  },[number]);


  const  addItem  = ()=>{
    if (number% 2 == 0) {
      let boxEles = boxes.map((bx, idx)=>
          <div style={block}> Hello!   </div>
      );
      setBoxes(boxEles);
    }
    else {

    }
  };

  const changeColor = ()=>{
    if (number% 5 == 0) {
          backCol = "blue";
          borCol = "black";
    }
  }


  return (
      <div className="App">
        <button onClick={()=>setNumber(number + 1, addItem(), changeColor()) }>Increase</button> <br></br>
        <button onClick={()=>setReset(setNumber(0), setBoxes([]))}>Reset</button>

        <div> You clicked me :{number} times!</div>
        {mess}
        {boxEles}
      </div>
  );
}

export default App;
