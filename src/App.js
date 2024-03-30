import {useState} from "react";
import "./App.css";
import * as math from "mathjs"
import Button from "./component/Button";
import Input from "./component/Input";

const App = () => {
  const [text , setText] = useState("")
  const [result , setResult] = useState("")
  const addToText = (val) =>{
    setText((text => [...text , val + ""]))
  }
 
  const CalculateResult = () =>
  {
    const input = text.join("")
    setResult(math.evaluate(input))
  }
  const resetInput = () =>{
    setText("")
    setResult("")
  }
  return (
    <div className="App">
      <div className="Clac-wrap">
        <Input text = {text} result={result} />
        <div className="row">
          <Button symbol = "7" handleClick={addToText} />
          <Button symbol = "8" handleClick={addToText}  />
          <Button symbol = "9" handleClick={addToText} />
          <Button symbol = "/"  color={"orange"} handleClick={addToText}/>
          
        </div>
        <div className="row">
          <Button  symbol = "4" handleClick={addToText}/>
          <Button symbol = "5" handleClick={addToText} />
          <Button  symbol = "6" handleClick={addToText}/>
          <Button  symbol = "*" color={"orange"} handleClick={addToText}/>
        </div>
        <div className="row">
          <Button symbol = "1" handleClick={addToText} />
          <Button symbol = "2" handleClick={addToText}/>
          <Button symbol = "3"  handleClick={addToText}/>
          <Button symbol = "+"  color={"orange"} handleClick={addToText}/>
        </div>
        <div className="row">
          <Button symbol = "0" handleClick={addToText} />
          <Button symbol = "." handleClick={addToText}/>
          <Button  symbol = "-" handleClick={addToText}/>
          <Button symbol = "=" color={"orange"} handleClick={CalculateResult} />
         
        </div>
        <Button symbol = "C" color={"red"} handleClick={resetInput}/>
      </div>
    </div>
  );
};

export default App;
