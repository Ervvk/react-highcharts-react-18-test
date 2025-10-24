import { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';

function SafeChart({ config }) {
  const chartRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    if (!chartRef.current) {
      chartRef.current = Highcharts.chart(containerRef.current, config);
    }

    return () => {
      if (chartRef.current) {
        try {
          if (chartRef.current.renderTo && chartRef.current.renderTo.parentNode) {
            chartRef.current.destroy();
          }
        } catch (error) {
          console.warn('Chart cleanup warning:', error);
        }
        chartRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (chartRef.current && config) {
      chartRef.current.update(config, true);
    }
  }, [config]);

  return <div ref={containerRef} />;
}

export default SafeChart;

