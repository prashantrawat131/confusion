// import logo from './logo.svg';
import Header from "./components/Header"
import './App.css';
import ControlPanel from "./components/ControlPanel"
import Inputs from "./components/Inputs";
import { useState } from "react";
function App() {

  const [answer, setAnswer] = useState("");
  const [inputs, setInputs] = useState(["", ""]);

  function increaseInputs() {
    // console.log("Increase Inputs");
    const newInputs = [];
    inputs.map(singleInput => newInputs.push(singleInput));
    newInputs.push("");
    setInputs(newInputs);
  }

  function decreaseInputs() {
    // console.log("Decrease Inputs");
    const newInputs = [];
    inputs.map(singleInput => newInputs.push(singleInput));
    newInputs.pop();
    setInputs(newInputs);
  }

  function goButtonClick() {
    const length = inputs.length - 1;
    const randomNumber = Math.round(Math.random() * length);
    setAnswer(inputs[randomNumber]);
  }

  if (answer !== "") {
    return (
      <div className={"answer-div"}>
        <p>{answer}</p>
      </div>
    );
  }
  else {
    return (
      <div className="main-div center-everything">
        <Header />
        <ControlPanel increaseInputs={increaseInputs} decreaseInputs={decreaseInputs} numberOfInputs={inputs.length} />
        <Inputs inputs={inputs} setInputs={setInputs} />
        <img 
        onClick={goButtonClick} 
        alt={"go button"} 
        src={"/goButton.svg"}
          className={"goButton"}
        />
      </div>
    );
  }

}

export default App;
