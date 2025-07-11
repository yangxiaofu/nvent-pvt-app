import React from 'react';
import { Leaf, Globe, Zap, TrendingUp, CloudRain, Recycle, Sun, Wind } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import { APP_DATA } from '../data/APP_DATA';

const EnvironmentalScreen = () => {
  const ImpactCard = ({ icon: Icon, title, value, description, color }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 bg-${color} rounded-full flex items-center justify-center`}>
          <Icon size={24} className="text-white" />
        </div>
        <div className="text-right">
          <div className={`text-3xl font-bold text-${color}`}>
            {value}
          </div>
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );

  const BenefitCard = ({ icon: Icon, title, description }) => (
    <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-white">
      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
        <Icon size={24} className="text-white" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-white text-opacity-90">{description}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Environmental Impact
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              nVent PVT Series protection systems contribute to a more sustainable future by 
              ensuring renewable energy systems operate at peak efficiency and reliability.
            </p>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Key Environmental Metrics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Global Environmental Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ImpactCard
              icon={CloudRain}
              title="CO₂ Emissions Reduced"
              value={<AnimatedCounter value={APP_DATA.environmentalImpact.co2Reduced} suffix=" tons" />}
              description="Total CO₂ emissions prevented through protected renewable energy systems"
              color="green-600"
            />
            
            <ImpactCard
              icon={Zap}
              title="Energy Protected"
              value={<AnimatedCounter value={APP_DATA.environmentalImpact.energyProtected} suffix=" MWh" />}
              description="Clean energy generation protected from downtime and equipment failures"
              color="blue-600"
            />
            
            <ImpactCard
              icon={Globe}
              title="Systems Protected"
              value={<AnimatedCounter value={APP_DATA.environmentalImpact.systemsProtected} suffix="+" />}
              description="Renewable energy installations worldwide protected by nVent technology"
              color="purple-600"
            />
            
            <ImpactCard
              icon={TrendingUp}
              title="Average Uptime"
              value={<AnimatedCounter value={APP_DATA.environmentalImpact.uptimeImproved} suffix="%" decimals={1} />}
              description="Average system uptime achieved through superior surge protection"
              color="orange-600"
            />
          </div>
        </div>

        {/* Environmental Benefits */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-nvent-red to-red-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold text-center mb-12">
              How nVent PVT Series Helps the Environment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <BenefitCard
                icon={Leaf}
                title="Maximized Clean Energy"
                description="By preventing downtime and equipment failures, more renewable energy reaches the grid, displacing fossil fuel generation."
              />
              
              <BenefitCard
                icon={Recycle}
                title="Extended Equipment Life"
                description="Superior protection reduces premature equipment replacement, minimizing waste and manufacturing emissions."
              />
              
              <BenefitCard
                icon={TrendingUp}
                title="Optimized Performance"
                description="Better system reliability means higher capacity factors and more efficient use of renewable resources."
              />
            </div>
          </div>
        </div>

        {/* Carbon Footprint Calculator */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Carbon Footprint Comparison
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Without nVent PVT Protection</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                    <span className="text-sm text-gray-600">System Downtime</span>
                    <span className="font-semibold text-red-600">96 hours/year</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                    <span className="text-sm text-gray-600">Lost Clean Energy</span>
                    <span className="font-semibold text-red-600">~2,400 MWh/year</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                    <span className="text-sm text-gray-600">Additional CO₂</span>
                    <span className="font-semibold text-red-600">~1,200 tons/year</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">With nVent PVT Protection</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-sm text-gray-600">System Downtime</span>
                    <span className="font-semibold text-green-600">8 hours/year</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-sm text-gray-600">Lost Clean Energy</span>
                    <span className="font-semibold text-green-600">~200 MWh/year</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-sm text-gray-600">Additional CO₂</span>
                    <span className="font-semibold text-green-600">~100 tons/year</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sustainability Goals */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold text-center mb-8">
            Supporting Global Sustainability Goals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Sun size={24} className="mr-2" />
                Solar Energy Acceleration
              </h3>
              <p className="text-white text-opacity-90 mb-4">
                By protecting solar installations from surge damage, nVent PVT Series helps 
                accelerate the deployment and reliability of solar power worldwide.
              </p>
              <ul className="text-sm text-white text-opacity-90 space-y-1">
                <li>• Reduced maintenance costs</li>
                <li>• Extended system lifespan</li>
                <li>• Improved investor confidence</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Wind size={24} className="mr-2" />
                Wind Energy Optimization
              </h3>
              <p className="text-white text-opacity-90 mb-4">
                Wind turbines face unique electrical challenges. nVent PVT protection ensures 
                maximum uptime and energy generation in harsh environments.
              </p>
              <ul className="text-sm text-white text-opacity-90 space-y-1">
                <li>• Lightning protection</li>
                <li>• Grid stability support</li>
                <li>• Reduced O&M costs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentalScreen;