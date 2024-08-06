import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [totalBox, setTotalBox] = useState(Array(5).fill(null));
  const [boxRandomColor, setBoxRandomColor] = useState(null);
  const [win, setWin] = useState(0);
  const [correntBoxSelect, setCorrectBox] = useState(null);
  const [wrongBoxSelect, setWrongBox] = useState(null);

  useEffect(() => {
    return clearInterval(timer);
  }, [boxRandomColor]);

  let timer;

  const changeColor = () => {
    timer = setInterval(() => {
      const randomValue = parseInt((Math.random() * 10) % 5);
      setBoxRandomColor(randomValue);
      setWrongBox(null);
      setCorrectBox(null);
    }, 500);
  };

  const boxSelect = (index) => {
    if (index === boxRandomColor) {
      setWin(win + 1);
      setCorrectBox(index);
    } else {
      setWrongBox(index);
    }
  };

  return (
    <div className="App">
      <div className="box-container">
        {totalBox.map((item, index) => {
          return (
            <div
              onClick={() => boxSelect(index)}
              className={`box-style ${
                boxRandomColor === index ? "blue-style" : null
              }
              ${correntBoxSelect === index ? "green-style" : ""}          
              ${wrongBoxSelect === index ? "red-style" : null}
            
              `}
            ></div>
          );
        })}
      </div>
      total score = {win}
      <button onClick={changeColor}>start</button>
    </div>
  );
}
