import React from 'react';
import Bar from './Bar';

interface BarChartProps {
  stats: number[];
}

const StatBarChart = (props: BarChartProps) => {
  return (
    <div className="w-full">
      <h2 className="text-center mb-2">Stat graph</h2>
      <div className="graph mx-4">
        {props.stats.map((bar, index) => (
          <Bar label={index + 1 + ''} barPercent={50} />
        ))}
      </div>
    </div>
  );
};

export default StatBarChart;
