import './App.css';
import Chart from './Chart';

function App() {
  const columnChartConfig = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Monthly Sales Data'
    },
    xAxis: {
      categories: ['January', 'February', 'March', 'April', 'May', 'June']
    },
    yAxis: {
      title: {
        text: 'Values'
      }
    },
    series: [{
      name: 'Sales',
      data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0]
    }, {
      name: 'Costs',
      data: [19.4, 52.3, 87.1, 95.6, 112.5, 145.8]
    }]
  };

  const lineChartConfig = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Temperature Trends'
    },
    xAxis: {
      categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4']
    },
    yAxis: {
      title: {
        text: 'Temperature (°C)'
      }
    },
    series: [{
      name: 'City A',
      data: [15, 18, 22, 20]
    }, {
      name: 'City B',
      data: [10, 12, 16, 18]
    }, {
      name: 'City C',
      data: [20, 22, 25, 23]
    }]
  };

  const pieChartConfig = {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Market Share Distribution'
    },
    series: [{
      name: 'Share',
      data: [
        { name: 'Product A', y: 35.5 },
        { name: 'Product B', y: 28.2 },
        { name: 'Product C', y: 20.8 },
        { name: 'Product D', y: 15.5 }
      ]
    }]
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React 18 + react-highcharts 16.1.0 Test</h1>
      </header>
      <div className="charts-container">
        <div className="chart-wrapper">
          <Chart config={columnChartConfig} />
        </div>
        <div className="chart-wrapper">
          <Chart config={lineChartConfig} />
        </div>
        <div className="chart-wrapper">
          <Chart config={pieChartConfig} />
        </div>
      </div>
    </div>
  );
}

export default App;
