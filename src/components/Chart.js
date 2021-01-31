import React from "react";
import { Bar } from "react-chartjs-2";

const Chart = (props) => {
  return <div className="chart">
      <Bar
        data={props.data}
        options={{
            title: {
                display: true,
                text: 'Current Users Session Data'
            },
            legend: {
                display: true,
                position: 'bottom'
            }
        }}
      />
  </div>;
};
export default Chart;
