import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    setDisplay((prev) => prev + value);
  };

  const clearDisplay = () => {
    setDisplay("");
  };

  const calculate = () => {
    try {
      setDisplay(String(eval(display)));
    } catch {
      setDisplay("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="inputbox">
        <input type="text" value={display} readOnly />
      </div>

      <div className="btns">
        <button className="yellow" onClick={clearDisplay}>C</button>
        <button className="yellow" onClick={() => handleClick("/")}>/</button>
        <button className="yellow" onClick={() => handleClick("*")}>*</button>
        <button className="yellow" onClick={() => handleClick("-")}>-</button>

        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("7")}>7</button>
        <button className="yellow plus" onClick={() => handleClick("+")}>+</button>

        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button className="yellow" onClick={calculate}>=</button>

        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("1")}>1</button>
        <button className="green" onClick={() => handleClick("0")}>0</button>
      </div>
    </div>
  );
};

export default Calculator;

