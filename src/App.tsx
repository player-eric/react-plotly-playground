import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Plot from "react-plotly.js";
import CalendarHeatmap from "./CalendarHeatmap";

function MyChart() {
  const data: any = [
    {
      x: [1, 2, 3],
      y: [2, 6, 3],
      type: "scatter",
      mode: "lines+markers",
      marker: { color: "red" },
    },
  ];

  const layout = {
    title: "A Simple Plot",
  };

  return <Plot data={data} layout={layout} />;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <MyChart></MyChart>
      <CalendarHeatmap></CalendarHeatmap>
    </>
  );
}

export default App;
