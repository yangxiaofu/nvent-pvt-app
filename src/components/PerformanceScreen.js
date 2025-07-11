import React from 'react';
import { Clock, TrendingUp, Shield } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import { APP_DATA } from '../data/APP_DATA';

const PerformanceScreen = ({ appType }) => {
  const failureData = APP_DATA.failureRateData[appType] || APP_DATA.failureRateData.solar;
  const lightningData = APP_DATA.lightningImpact;

  const FailureRateCard = ({ title, failureRate, interval, dominantMode, isHistorical = false }) => (
    <div className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ${isHistorical ? 'border-l-4 border-orange-500' : ''}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        {isHistorical && (
          <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">Historical</span>
        )}
      </div>
      
      <div className="text-center mb-4">
        <div className="text-3xl font-bold text-nvent-red mb-2">
          <AnimatedCounter value={failureRate} decimals={2} suffix="/year" />
        </div>
        <p className="text-sm text-gray-600">{interval}</p>
      </div>
      
      <div className="pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-600 mb-1">Dominant Failure Mode:</p>
        <p className="text-sm font-semibold text-gray-800">{dominantMode}</p>
      </div>
    </div>
  );

  const LightningComparisonCard = ({ title, impulseRating, downtimeHours, isNVent = false }) => (
    <div className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ${isNVent ? 'border-l-4 border-green-500' : 'border-l-4 border-red-500'}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <div className={`w-3 h-3 rounded-full ${isNVent ? 'bg-green-500' : 'bg-red-500'}`}></div>
      </div>
      
      <div className="text-center mb-4">
        <div className="text-2xl font-bold text-gray-800 mb-2">
          {impulseRating}kA Impulse Rating
        </div>
        <div className={`text-3xl font-bold ${isNVent ? 'text-green-600' : 'text-red-600'} mb-2`}>
          <AnimatedCounter value={downtimeHours} decimals={1} suffix=" hrs/year" />
        </div>
        <p className="text-sm text-gray-600">Lightning-related downtime</p>
      </div>
    </div>
  );

  const getAppTypeTitle = () => {
    const titles = {
      solar: 'Solar Power Systems',
      wind: 'Wind Power Systems',
      storage: 'Energy Storage Systems'
    };
    return titles[appType] || 'Power Systems';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {getAppTypeTitle()} Performance Data
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real-world failure rate data and lightning protection performance for{' '}
            {getAppTypeTitle().toLowerCase()}. See how nVent ERICO's 5kA protection 
            significantly outperforms standard 2kA protection systems.
          </p>
        </div>

        {/* Application-Specific Failure Rate */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Application-Specific Failure Rates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FailureRateCard
              title="Current nVent ERICO Data"
              failureRate={failureData.failureRate}
              interval={failureData.equivalentInterval}
              dominantMode={failureData.dominantMode}
            />
            
            {failureData.historicalRate && (
              <FailureRateCard
                title="Historical Data (Pre-nVent)"
                failureRate={failureData.historicalRate}
                interval={failureData.historicalInterval}
                dominantMode={failureData.dominantMode}
                isHistorical={true}
              />
            )}
          </div>
        </div>

        {/* Lightning Protection Comparison */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Lightning Protection Performance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <LightningComparisonCard
              title="Standard Protection"
              impulseRating={lightningData.standard.impulseRating}
              downtimeHours={lightningData.standard[appType]}
              isNVent={false}
            />
            
            <LightningComparisonCard
              title="nVent ERICO Protection"
              impulseRating={lightningData.nVent.impulseRating}
              downtimeHours={lightningData.nVent[appType]}
              isNVent={true}
            />
          </div>
        </div>

        {/* Key Benefits Summary */}
        <div className="bg-gradient-to-r from-nvent-red to-red-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Choose nVent ERICO 5kA Protection?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Superior Lightning Protection</h3>
              <p className="text-white text-opacity-90">
                5kA impulse rating provides 55% better protection than standard 2kA systems
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Proven Reliability</h3>
              <p className="text-white text-opacity-90">
                Low failure rates: {failureData.failureRate}/year ({failureData.equivalentInterval})
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Minimal Downtime</h3>
              <p className="text-white text-opacity-90">
                Significantly reduced lightning-related downtime vs. standard protection
              </p>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Technical Specifications Comparison
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Standard Protection (2kA)</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 2kA impulse current rating</li>
                <li>• Basic surge protection</li>
                <li>• Higher lightning-related downtime</li>
                <li>• Limited monitoring capabilities</li>
                <li>• Reactive maintenance approach</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">nVent ERICO PVT (5kA)</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 5kA impulse current rating</li>
                <li>• Advanced lightning protection</li>
                <li>• 55% reduction in lightning downtime</li>
                <li>• Real-time monitoring and diagnostics</li>
                <li>• Predictive maintenance capabilities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceScreen;