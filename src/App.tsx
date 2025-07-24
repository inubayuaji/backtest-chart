import type { CandlestickData } from "lightweight-charts";
import ChartArea from "./components/ChartArea";
import LeftToolbar from "./components/LeftToolbar";
import TopToolbar from "./components/TopToolbar";
// import BottomToolbar from "./components/BottomToolbar";
// import RightToolbar from "./components/RightToolbar";

const App: React.FC = () => {
  const candlestickData: CandlestickData[] = [
    { time: "2023-07-01", open: 100, high: 110, low: 90, close: 105 },
    { time: "2023-07-02", open: 105, high: 115, low: 100, close: 110 },
    { time: "2023-07-03", open: 110, high: 112, low: 108, close: 109 },
    { time: "2023-07-04", open: 109, high: 118, low: 107, close: 115 },
    { time: "2023-07-05", open: 115, high: 120, low: 112, close: 117 },
  ];

  return (
    <div className="container">
      <div className="col">
        <div className="row">
          <TopToolbar />
        </div>
        <div className="row">
          <div className="col no-grow">
            <LeftToolbar />
          </div>
          <div className="col">
            <div className="row">
              <ChartArea data={candlestickData} />
            </div>
            <div className="row no-grow">{/* <BottomToolbar /> */}</div>
          </div>
          <div className="col no-grow">{/* <RightToolbar /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default App;
