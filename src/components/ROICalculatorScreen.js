import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingUp, Clock, Shield } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import SliderInput from './SliderInput';
import { APP_DATA } from '../data/APP_DATA';

const ROICalculatorScreen = ({ appType }) => {
  const defaults = APP_DATA.calculationDefaults[appType] || APP_DATA.calculationDefaults.solar;
  
  const [systemSize, setSystemSize] = useState(defaults.systemSize);
  const [ppaRate, setPpaRate] = useState(defaults.ppaRate);
  const [capacityFactor, setCapacityFactor] = useState(defaults.capacityFactor);
  const [equipmentValue, setEquipmentValue] = useState(defaults.equipmentValue);

  // Performance data
  const standardPerformance = APP_DATA.performanceMetrics.standard;
  const pvtPerformance = APP_DATA.performanceMetrics.pvt;

  // ROI Calculations
  const downtimeHoursSaved = 
    (standardPerformance.downtime - pvtPerformance.downtime) * (systemSize / 100);
  
  const annualRevenue = systemSize * 8760 * (capacityFactor / 100) * ppaRate;
  
  const annualRevenueProtected = (annualRevenue / 8760) * downtimeHoursSaved;
  
  const equipmentDamageAvoided = 
    (equipmentValue * 1000000) * 0.05 * 
    ((standardPerformance.failures - pvtPerformance.failures) / standardPerformance.failures);
  
  const pvtInvestment = systemSize * 1500; // Placeholder cost
  
  const paybackPeriodMonths = 
    (pvtInvestment / (annualRevenueProtected + equipmentDamageAvoided)) * 12;

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
            ROI Calculator
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Calculate the return on investment for nVent PVT Series protection on your{' '}
            {getAppTypeTitle().toLowerCase()}. Adjust the parameters below to see real-time 
            calculations based on your specific requirements.
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
                  label="PPA Rate"
                  value={ppaRate}
                  onChange={setPpaRate}
                  min={0.02}
                  max={0.20}
                  step={0.01}
                  unit="$/kWh"
                />
                
                <SliderInput
                  label="Capacity Factor"
                  value={capacityFactor}
                  onChange={setCapacityFactor}
                  min={10}
                  max={50}
                  step={1}
                  unit="%"
                />
                
                <SliderInput
                  label="Equipment Value"
                  value={equipmentValue}
                  onChange={setEquipmentValue}
                  min={1.0}
                  max={10.0}
                  step={0.1}
                  unit="$M"
                />
              </div>

              {/* Quick Stats */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Annual Revenue</span>
                    <span className="text-sm font-semibold">
                      <AnimatedCounter value={annualRevenue} isCurrency={true} />
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Downtime Hours Saved</span>
                    <span className="text-sm font-semibold">
                      <AnimatedCounter value={downtimeHoursSaved} decimals={1} suffix=" hrs/year" />
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
                icon={DollarSign}
                title="Annual Revenue Protected"
                value={<AnimatedCounter value={annualRevenueProtected} isCurrency={true} />}
                description="Additional revenue protected by preventing downtime with nVent PVT Series"
                color="green-600"
              />
              
              <ResultCard
                icon={Shield}
                title="Equipment Damage Avoided"
                value={<AnimatedCounter value={equipmentDamageAvoided} isCurrency={true} />}
                description="Potential equipment damage costs avoided through superior protection"
                color="blue-600"
              />
              
              <ResultCard
                icon={TrendingUp}
                title="PVT Investment"
                value={<AnimatedCounter value={pvtInvestment} isCurrency={true} />}
                description="Estimated investment required for nVent PVT Series protection system"
                color="orange-600"
              />
              
              <ResultCard
                icon={Clock}
                title="Payback Period"
                value={<AnimatedCounter value={paybackPeriodMonths} decimals={1} suffix=" months" />}
                description="Time required to recover the initial investment through savings"
                color="purple-600"
              />
            </div>

            {/* ROI Summary */}
            <div className="mt-8 bg-gradient-to-r from-nvent-red to-red-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold text-center mb-6">
                Investment Summary
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">
                    <AnimatedCounter 
                      value={((annualRevenueProtected + equipmentDamageAvoided) / pvtInvestment) * 100} 
                      decimals={1} 
                      suffix="%" 
                    />
                  </div>
                  <div className="text-white text-opacity-90">Annual ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">
                    <AnimatedCounter 
                      value={annualRevenueProtected + equipmentDamageAvoided} 
                      isCurrency={true} 
                    />
                  </div>
                  <div className="text-white text-opacity-90">Total Annual Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">
                    <AnimatedCounter 
                      value={(annualRevenueProtected + equipmentDamageAvoided) * 10 - pvtInvestment} 
                      isCurrency={true} 
                    />
                  </div>
                  <div className="text-white text-opacity-90">10-Year Net Benefit</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROICalculatorScreen;