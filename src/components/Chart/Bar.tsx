import React from 'react';

interface BarProps {
  label: string;
  barPercent: number;
  barColor: string;
}

const Bar = (props: BarProps) => {
  const style = {
    '--bar-percent': `${props.barPercent}%`,
    '--bar-color': props.barColor,
  } as React.CSSProperties;

  return (
    <div className="bar flex items-center mb-1">
      {props.label}
      <div
        style={style}
        className="[background:var(--bar-color)] [width:var(--bar-percent)] h-8 min-h-full ml-4"
      ></div>
    </div>
  );
};

export default Bar;
