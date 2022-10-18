import React from "react"
import { useState, useEffect } from "react";

function Calculator() {
  const [prevState, setPrevState] = useState("");
  const [currentState, setCurrentState] = useState("");
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);

  const inputNum = (e) => {
    if (currentState.includes(".") && e.target.innerText === ".") {
      {
        setInput("");
        return;
      }
    }

    if (total === true) {
      setPrevState("0");
    }
  

    currentState
      ? setCurrentState((pre) => pre + e.target.innerText)
      : setCurrentState(e.target.innerText);
    7;
    setTotal(false);
  };
  useEffect(() => {
    setInput(currentState);
  }, [currentState]);
  useEffect(() => {
    setInput("0");
  }, []);
  const operatorType = (e) => {
    setTotal(false);
    setOperator(e.target.innerText);
    if (currentState === "") {
      return;
    }
    if (prevState !== "") {
      equals();
    }
    setPrevState(currentState);
    setCurrentState("");
  };
  const minusPlus = () => {
    setCurrentState(-currentState);
  };
  const percent = () => {
    setCurrentState(currentState / 100);
  };
  const reset = () => {
    setPrevState("");
    setCurrentState("");
    setInput("0");
    setOperator(null);
    setTotal(false);
  };
  const equals = (e) => {
    if (e?.target.innerText === ".") {
      setTotal(true);
    }

    let calc;
    switch (operator) {
      case "/":
        calc = String(parseFloat(prevState) / parseFloat(currentState));
        break;
      case "+":
        calc = String(parseFloat(prevState) + parseFloat(currentState));
        break;
      case "-":
        calc = String(parseFloat(prevState) - parseFloat(currentState));
        break;
      case "x":
        calc = String(parseFloat(prevState) * parseFloat(currentState));
        break;
      default:
        return;
    }
    setInput(calc);
    setPrevState(prevState + " " + operator + " " + currentState);
    setCurrentState(calc);
    setOperator(null);
  };
  

  return (
    <>
      <div className="calculatorWrapper">
        <div className="screen">
          <p className="prev">{prevState}</p>
          <h1 className="current">{input}</h1>
        </div>
        <div className="buttons">
          <div className="buttonRow">
            <button className="reset" onClick={reset}>AC</button>
            <button className="operator" onClick={minusPlus}>+/-</button>
            <button className="operator" onClick={percent}>%</button>
            <button className="operator" onClick={operatorType}>
              /
            </button>
          </div>
          <div className="buttonRow">
            <button onClick={inputNum}>7</button>
            <button onClick={inputNum}>8</button>
            <button onClick={inputNum}>9</button>
            <button className="operator" onClick={operatorType}>
              +
            </button>
          </div>
          <div className="buttonRow">
            <button onClick={inputNum}>4</button>
            <button onClick={inputNum}>5</button>
            <button onClick={inputNum}>6</button>
            <button className="operator" onClick={operatorType}>
              -
            </button>
          </div>
          <div className="buttonRow">
            <button onClick={inputNum}>1</button>
            <button onClick={inputNum}>2</button>
            <button onClick={inputNum}>3</button>
            <button className="operator" onClick={operatorType}>
              x
            </button>
          </div>
          <div className="buttonRow">
            <button className="double" onClick={inputNum}>
              0
            </button>
            <button onClick={inputNum}>.</button>
            <button id="equals" onClick={equals}>
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;
