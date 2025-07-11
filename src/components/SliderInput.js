import React from 'react';

const SliderInput = ({ 
  label, 
  value, 
  onChange, 
  min, 
  max, 
  step = 1, 
  unit = '',
  className = '' 
}) => {
  const percentage = ((value - min) / (max - min)) * 100;
  
  const sliderStyle = {
    background: `linear-gradient(to right, #c4262e 0%, #c4262e ${percentage}%, #e5e7eb ${percentage}%, #e5e7eb 100%)`
  };

  const formatValue = (val) => {
    if (unit === '$') {
      return `$${val.toFixed(2)}`;
    }
    return `${val}${unit}`;
  };

  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium text-gray-700">{label}</label>
        <span className="text-sm font-semibold text-nvent-red">
          {formatValue(value)}
        </span>
      </div>
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(parseFloat(e.target.value))}
          className="w-full h-2 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-nvent-red focus:ring-opacity-50"
          style={sliderStyle}
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>{formatValue(min)}</span>
          <span>{formatValue(max)}</span>
        </div>
      </div>
    </div>
  );
};

export default SliderInput;