import { useEffect, useState } from "react";
import { Chart } from "./components/Chart";

function App() {
  const dataInitial = [
    { x: 0, y: 0 },
    { x: 1, y: 2 },
    { x: 2, y: 1 },
    { x: 3, y: 4 },
    { x: 4, y: 3 },
    { x: 5, y: 5 },
  ];
  const [data, setData] = useState([]);
  const [numX, setNumX] = useState(0);
  const [numY, setNumY] = useState(0);

  const getRandomInt = () => {
    return Math.floor(Math.random() * (51 - 0)) + 0;
  };

  useEffect(() => {
    const reading = setInterval(() => {
      // console.log("updated");
      setNumX(numX + 1);
      setNumY(getRandomInt());

      setData([...data, { x: numX, y: numY }]);
    }, 1000);
    return () => {
      clearInterval(reading);
    };
  }, [data]);

  return (
    <div className="container">
      <h1>Chart</h1>
      <div className="chart">
        <Chart data={data} />
      </div>
    </div>
  );
}

export default App;
