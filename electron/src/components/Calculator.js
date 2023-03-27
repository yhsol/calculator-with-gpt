import React, { useState } from "react";
import axios from "axios";

const Calculator = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "a") {
      setA(value);
    } else if (name === "b") {
      setB(value);
    } else if (name === "operator") {
      setOperator(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `http://localhost:3000/calculator/${operator}?a=${a}&b=${b}`;
    axios
      .get(url)
      .then((res) => {
        setResult(res.data.toString());
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="a">A:</label>
          <input
            type="number"
            name="a"
            value={a}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="operator">Operator:</label>
          <select name="operator" value={operator} onChange={handleInputChange}>
            <option value="">-- Select Operator --</option>
            <option value="add">+</option>
            <option value="subtract">-</option>
            <option value="multiply">*</option>
            <option value="divide">/</option>
          </select>
        </div>
        <div>
          <label htmlFor="b">B:</label>
          <input
            type="number"
            name="b"
            value={b}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Calculate</button>
      </form>
      <div>
        Result: <span>{result}</span>
      </div>
    </div>
  );
};

export default Calculator;
