import React from 'react';

interface BarProps {
  label: string;
  barPercent: number;
}

const Bar = (props: BarProps) => {
  const style = {
    '--bar-percent': `${props.barPercent}%`,
  } as React.CSSProperties;

  return (
    <div className="bar flex">
      1
      <div
        style={style}
        className="bg-black [width:var(--bar-percent)] h-8 min-h-full ml-4"
      ></div>
    </div>
  );
};

export default Bar;
