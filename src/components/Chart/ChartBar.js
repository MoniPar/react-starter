import './ChartBar.css'

const ChartBar = (props) => {

    let barFillHeight = '0%';

    if (props.maxValue > 0) {
        // Get the % fill for each bar
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    return (
      <div className="chart-bar">
        <div className="chart-bar__inner">
          <div
            className="chart-bar__fill"
            // Dynamically style an object
            style={{ height: barFillHeight }}
          ></div>
        </div>
        <div className="chart-bar__label">{props.label}</div>
      </div>
    );
}

export default ChartBar;