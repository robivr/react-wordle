import React from 'react';
import Bar from './Bar';

interface BarChartProps {
  stats: number[];
}

const StatBarChart = (props: BarChartProps) => {
  const total = props.stats.reduce((acc, val) => acc + val, 0);
  const mostWins = props.stats.indexOf(Math.max(...props.stats));

  return (
    <div className="w-full">
      <h2 className="text-center mb-2">Stat graph</h2>
      <div className="graph mx-4">
        {props.stats.map((barPercent, index) => (
          <Bar
            key={index}
            label={index + 1 + ''}
            barColor={index === mostWins ? '#6AAA64' : 'black'}
            barPercent={(barPercent / total) * 100}
          />
        ))}
      </div>
    </div>
  );
};

export default StatBarChart;
