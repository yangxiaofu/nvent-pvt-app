import React, { useState } from 'react';
import { Calculator, AlertTriangle, Clock, Shield, TrendingDown } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import SliderInput from './SliderInput';
import { APP_DATA } from '../data/APP_DATA';

const FailureCalculatorScreen = ({ appType }) => {
  const [systemSize, setSystemSize] = useState(100);
  const [lightningExposure, setLightningExposure] = useState(50);

  const failureData = APP_DATA.failureRateData[appType] || APP_DATA.failureRateData.solar;
  const lightningData = APP_DATA.lightningImpact;

  // Failure Rate Calculations
  const expectedFailuresPerYear = (systemSize / 100) * failureData.failureRate;
  
  // Lightning Downtime Calculations
  const lightningDowntimeStandard = (systemSize / 100) * lightningData.standard[appType] * (lightningExposure / 100);
  const lightningDowntimeNVent = (systemSize / 100) * lightningData.nVent[appType] * (lightningExposure / 100);
  const downtimeReduction = lightningDowntimeStandard - lightningDowntimeNVent;
  const percentageImprovement = ((downtimeReduction / lightningDowntimeStandard) * 100);
  
  // Cost Savings Calculation
  const costSavings = (downtimeReduction * 130000) / 1.5; // $130,000 per major event, averaged

  const ResultCard = ({ icon: Icon, title, value, description, color = "nvent-red" }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 bg-${color} rounded-full flex items-center justify-center`}>
          <Icon size={24} className="text-white" />
        </div>
        <div className="text-right">
          <div className={`text-2xl font-bold text-${color}`}>
            {value}
          </div>
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );

  const getAppTypeTitle = () => {
    const titles = {
      solar: 'Solar Power System',
      wind: 'Wind Power System',
      storage: 'Energy Storage System'
    };
    return titles[appType] || 'Power System';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Failure Rate Calculator
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Calculate failure rates and lightning-related downtime for your{' '}
            {getAppTypeTitle().toLowerCase()}. See how nVent ERICO's superior 5kA protection 
            outperforms standard 2kA protection systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Controls */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Calculator size={24} className="text-nvent-red mr-2" />
                System Parameters
              </h2>
              
              <div className="space-y-6">
                <SliderInput
                  label="System Size"
                  value={systemSize}
                  onChange={setSystemSize}
                  min={10}
                  max={500}
                  step={10}
                  unit=" MW"
                />
                
                <SliderInput
                  label="Lightning Exposure Level"
                  value={lightningExposure}
                  onChange={setLightningExposure}
                  min={10}
                  max={100}
                  step={5}
                  unit="%"
                />
              </div>

              {/* Application-Specific Data */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  {getAppTypeTitle()} Data
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Base Failure Rate</span>
                    <span className="text-sm font-semibold text-nvent-red">
                      {failureData.failureRate}/year
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Equivalent Interval</span>
                    <span className="text-sm font-semibold text-gray-800">
                      {failureData.equivalentInterval}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Dominant Mode</span>
                    <span className="text-sm font-semibold text-gray-800">
                      {failureData.dominantMode}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ResultCard
                icon={AlertTriangle}
                title="Expected Failures per Year"
                value={<AnimatedCounter value={expectedFailuresPerYear} decimals={2} suffix="/year" />}
                description={`Based on ${failureData.failureRate} failure rate for ${getAppTypeTitle().toLowerCase()}s`}
                color="orange-600"
              />
              
              <ResultCard
                icon={Clock}
                title="Lightning Downtime (Standard 2kA)"
                value={<AnimatedCounter value={lightningDowntimeStandard} decimals={1} suffix=" hrs/year" />}
                description="Annual downtime from lightning with standard 2kA protection"
                color="red-600"
              />
              
              <ResultCard
                icon={Shield}
                title="Lightning Downtime (nVent 5kA)"
                value={<AnimatedCounter value={lightningDowntimeNVent} decimals={1} suffix=" hrs/year" />}
                description="Annual downtime from lightning with nVent ERICO 5kA protection"
                color="green-600"
              />
              
              <ResultCard
                icon={TrendingDown}
                title="Downtime Reduction"
                value={<AnimatedCounter value={downtimeReduction} decimals={1} suffix=" hrs/year" />}
                description="Hours of downtime prevented annually with nVent ERICO protection"
                color="blue-600"
              />
            </div>

            {/* Lightning Protection Comparison */}
            <div className="mt-8 bg-gradient-to-r from-nvent-red to-red-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold text-center mb-6">
                Lightning Protection Advantage
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">
                    <AnimatedCounter value={percentageImprovement} decimals={1} suffix="%" />
                  </div>
                  <div className="text-white text-opacity-90">Downtime Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">
                    5kA vs 2kA
                  </div>
                  <div className="text-white text-opacity-90">Impulse Protection</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">
                    <AnimatedCounter value={costSavings} isCurrency={true} />
                  </div>
                  <div className="text-white text-opacity-90">Annual Cost Savings</div>
                </div>
              </div>
            </div>

            {/* Protection Comparison Chart */}
            <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Lightning Protection Comparison
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">
                    Standard Protection (2kA)
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                      <span className="text-sm text-gray-600">Impulse Rating</span>
                      <span className="font-semibold text-red-600">2kA</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                      <span className="text-sm text-gray-600">Annual Downtime</span>
                      <span className="font-semibold text-red-600">
                        <AnimatedCounter value={lightningDowntimeStandard} decimals={1} suffix=" hrs" />
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                      <span className="text-sm text-gray-600">Protection Level</span>
                      <span className="font-semibold text-red-600">Basic</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">
                    nVent ERICO (5kA)
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="text-sm text-gray-600">Impulse Rating</span>
                      <span className="font-semibold text-green-600">5kA</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="text-sm text-gray-600">Annual Downtime</span>
                      <span className="font-semibold text-green-600">
                        <AnimatedCounter value={lightningDowntimeNVent} decimals={1} suffix=" hrs" />
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="text-sm text-gray-600">Protection Level</span>
                      <span className="font-semibold text-green-600">Superior</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FailureCalculatorScreen;