import { createChart, type IChartApi, type CandlestickData, type ISeriesApi, CandlestickSeries } from "lightweight-charts";
import { useEffect, useRef } from "react";

interface Prop {
  data: CandlestickData[]
}

const ChartArea: React.FC<Prop> = ({ data }) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const candleSeriesRef = useRef<ISeriesApi<"Candlestick"> | null>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    // init chart
    chartRef.current = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: chartContainerRef.current.clientHeight,
      grid: {
        vertLines: {
          color: '#EBEBEB'
        },
        horzLines: {
          color: '#EBEBEB'
        }
      },
      rightPriceScale: {
        borderVisible: false
      },
      timeScale: {
        borderVisible: false
      },
    });

    // draw candlestick
    candleSeriesRef.current = chartRef.current.addSeries(CandlestickSeries);
    candleSeriesRef.current.setData(data);


    // responsive resize chart
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        if (entry.contentRect.width && chartRef.current) {
          chartRef.current.applyOptions({ width: entry.contentRect.width });
        }

        if (entry.contentRect.height && chartRef.current) {
          chartRef.current.applyOptions({ height: entry.contentRect.height });
        }
      }
    });
    resizeObserver.observe(chartContainerRef.current);

    return () => {
      resizeObserver.disconnect();
      chartRef.current?.remove();
    }
  }, [data]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
      <div
        ref={chartContainerRef}
        style={{ background: '#fff', width: '100%', height: 'calc(100% - 39px)', borderTopLeftRadius: '3px', overflow: 'hidden' }}
      />
      <div style={{ background: '#fff', width: '100%', height: '38px', borderTop: 'solid 1px #EBEBEB', borderBottomLeftRadius: '3px' }} />
    </div>
  );
}

export default ChartArea;