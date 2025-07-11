import React from 'react';
import { AlertTriangle, CheckCircle, Clock, TrendingUp, Zap } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import { APP_DATA } from '../data/APP_DATA';

const PerformanceScreen = ({ appType }) => {
  const MetricDisplay = ({ metric, standardValue, pvtValue, unit, inverse }) => {
    const StandardIcon = inverse ? AlertTriangle : CheckCircle;
    const PVTIcon = inverse ? CheckCircle : TrendingUp;
    
    const getColorClass = (isPVT, isInverse) => {
      if (isInverse) {
        return isPVT ? 'text-green-600' : 'text-red-600';
      }
      return isPVT ? 'text-green-600' : 'text-orange-600';
    };

    return (
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-800">{metric}</h3>
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          {/* Standard SPD */}
          <div className="text-center">
            <div className="mb-3">
              <StandardIcon size={24} className="text-orange-500 mx-auto mb-2" />
              <p className="text-sm text-gray-600 font-medium">Standard SPD</p>
            </div>
            <div className={`text-3xl font-bold ${getColorClass(false, inverse)} mb-1`}>
              <AnimatedCounter value={standardValue} suffix={unit} />
            </div>
          </div>

          {/* nVent PVT */}
          <div className="text-center">
            <div className="mb-3">
              <PVTIcon size={24} className="text-green-500 mx-auto mb-2" />
              <p className="text-sm text-gray-600 font-medium">nVent PVT</p>
            </div>
            <div className={`text-3xl font-bold ${getColorClass(true, inverse)} mb-1`}>
              <AnimatedCounter value={pvtValue} suffix={unit} />
            </div>
          </div>
        </div>

        {/* Improvement Indicator */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="flex items-center justify-center space-x-2">
            <TrendingUp size={16} className="text-green-600" />
            <span className="text-sm text-gray-600">
              {inverse ? 
                `${Math.round(((standardValue - pvtValue) / standardValue) * 100)}% reduction` :
                `${Math.round(((pvtValue - standardValue) / standardValue) * 100)}% improvement`
              }
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Performance Comparison
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how nVent PVT Series surge protection devices outperform standard SPDs 
            across critical performance metrics. Real-world data demonstrates significant improvements 
            in reliability, uptime, and system protection.
          </p>
        </div>

        {/* Performance Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {APP_DATA.metrics.map((metric, index) => (
            <MetricDisplay
              key={index}
              metric={metric.label}
              standardValue={metric.standardValue}
              pvtValue={metric.pvtValue}
              unit={metric.unit}
              inverse={metric.inverse}
            />
          ))}
        </div>

        {/* Key Benefits Summary */}
        <div className="bg-gradient-to-r from-nvent-red to-red-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Choose nVent PVT Series?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Superior Protection</h3>
              <p className="text-white text-opacity-90">
                Advanced technology provides 6x fewer failures than standard SPDs
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Maximum Uptime</h3>
              <p className="text-white text-opacity-90">
                Reduce downtime by 92% with intelligent monitoring and protection
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Proven Reliability</h3>
              <p className="text-white text-opacity-90">
                6x longer MTBF ensures consistent performance and peace of mind
              </p>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Technical Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Standard SPD</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Basic surge protection</li>
                <li>• Limited monitoring capabilities</li>
                <li>• Higher failure rates</li>
                <li>• Reactive maintenance</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">nVent PVT Series</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Advanced surge protection technology</li>
                <li>• Real-time monitoring and diagnostics</li>
                <li>• Predictive maintenance capabilities</li>
                <li>• Extended warranty coverage</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceScreen;