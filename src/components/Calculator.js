import { useState } from "react";
import "./Calculator.css";
import Select from "@material-ui/core/Select";


const Calculator = (props) => {
  const { cryptos } = props;



  const [selected, setSelected] = useState([]);

  const options = cryptos.map((item) => (
    <div>
      <div>{item.name}</div>
    </div>
  ));
  console.log({ options });

  return (
    <div>

    </div>
  );
};

export default Calculator;
