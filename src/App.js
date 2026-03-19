import Input from "./components/Input";
import Button from "./components/Button";

import { Container, Content, Row } from "./styles";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [operation, setOperation] = useState("");
  const [accumulator, setAccumulator] = useState("0");
  const [lastNumber, setLastNumber] = useState(null);
  const [resetVisor, setResetVisor] = useState(false);

  const handleOnClear = () => {
    setCurrentNumber("0");
    setLastNumber(null);
    setAccumulator("0");
    setResetVisor(true);
    setOperation("");
  };

  const handleAddNumber = (num) => {
    if (resetVisor) {
      setCurrentNumber(num);
      setResetVisor(false);
    } else {
      setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${num}`);
    }
  };

  const handleSumNumbers = () => {
    setOperation("+");
    const current = Number(currentNumber);

    if (accumulator === "0") {
      setAccumulator(current);
      setCurrentNumber("0");
    } else {
      const result = accumulator + current;
      setAccumulator(result);
      setCurrentNumber(String(result));
    }
    setResetVisor(true);
  };

  const handleMinusNumbers = () => {
    setOperation("-");
    const current = Number(currentNumber);

    if (accumulator === "0") {
      setAccumulator(current);
      setCurrentNumber("0");
    } else {
      const result = accumulator - current;
      setAccumulator(result);
      setCurrentNumber(String(result));
    }
    setResetVisor(true);
  };

  const handleMultiply = () => {
    setOperation("x");
    const current = Number(currentNumber);

    if (accumulator === "0") {
      setAccumulator(current);
      setCurrentNumber("0");
    } else {
      const result = accumulator * current;
      setAccumulator(result);
      setCurrentNumber(String(result));
    }
    setResetVisor(true);
  };

  const handleDiv = () => {
    setOperation("/");
    const current = Number(currentNumber);

    if (accumulator === "0") {
      setAccumulator(current);
      setCurrentNumber("0");
    } else {
      const result = Number(accumulator) / current;
      setAccumulator(result);
      setCurrentNumber(result);
    }
    setResetVisor(true);
  };

  const handleEquals = () => {
    console.log(operation);
    if (operation !== "" && currentNumber !== "0" && accumulator !== "0") {
      switch (operation) {
        case "+":
          handleSumNumbers();
          break;
        case "-":
          handleMinusNumbers();
          break;
        case "x":
          handleMultiply();
          break;
        case "/":
          handleDiv();
          break;
        default:
          break;
      }
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="x" onClick={handleMultiply} />
          <Button label="/" onClick={handleDiv} />
          <Button label="c" onClick={handleOnClear} />
          <Button label="." />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="-" onClick={handleMinusNumbers} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="=" onClick={handleEquals} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber("0")} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
