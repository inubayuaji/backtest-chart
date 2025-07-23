import type { CandlestickData } from 'lightweight-charts';
import './App.css';
import ChartArea from './components/ChartArea';

function App() {
  const candlestickData: CandlestickData[] = [
    { time: '2023-07-01', open: 100, high: 110, low: 90, close: 105 },
    { time: '2023-07-02', open: 105, high: 115, low: 100, close: 110 },
    { time: '2023-07-03', open: 110, high: 112, low: 108, close: 109 },
    { time: '2023-07-04', open: 109, high: 118, low: 107, close: 115 },
    { time: '2023-07-05', open: 115, high: 120, low: 112, close: 117 },
  ];

  return (
    <div className='container'>
      <div className='col no-grow'>
        <div style={{ background: '#fff', width: '52px', height: '100vh', marginRight: '4px' }} />
      </div>
      <div className='col'>
        <div className='row no-grow'>
          <div style={{ background: '#fff', width: '100%', height: '38px', marginBottom: '4px', borderBottomLeftRadius: '3px' }} />
        </div>
        <div className='row'>
          <ChartArea data={candlestickData} />
        </div>
        <div className='row no-grow'>
          <div style={{ background: '#fff', width: '100%', height: '38px', marginTop: '4px', borderTopLeftRadius: '3px' }} />
        </div>
      </div>
      <div className='col no-grow'></div>
    </div>
  )
}

export default App;
