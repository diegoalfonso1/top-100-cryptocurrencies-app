import { useState } from "react";
import "./Calculator.css";


const Calculator = (props) => {
  const { cryptos } = props;

  const [selected, setSelected] = useState("Please select a coin!");
  const [input, setInput] = useState("");
 

  const selectedHandler = (e) => {  
    setSelected(e.target.value);
  };

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const total = (input, prices) => {
    let product = input * prices;
    return product.toLocaleString("en-US");
  };

  return (
    <div>
      <div className="calculator-container">
        <div className="select">
          <select onChange={selectedHandler}>
            {cryptos.map((item, id) => (
              <option value={item.current_price} key={id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="selected-coin">{selected}</div>
        <div>
          <input type="number" onChange={inputHandler} />
          <div>
            <h4>Total</h4>
            {input && <h5>$ {total(input, selected)}</h5>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
