import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {

    // Calculate the total maxValue by finding the biggest value across all months
    // Using the map method, transform our array of objects into an array of numbers
    // Using the spread operator, pull out all the array elements and add them as standalone
    // arguments to the max method.
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

    return (
      <div className="chart">
        {props.dataPoints.map((dataPoint) => (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        ))}
      </div>
    );
};

export default Chart;