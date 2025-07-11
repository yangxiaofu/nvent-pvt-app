import React from 'react';
import { Sun, Wind, Battery, TrendingUp, Shield, Zap } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import { APP_DATA } from '../data/APP_DATA';

const WelcomeScreen = ({ onSelectApp }) => {
  const AppCard = ({ type, icon: Icon, title, description, onClick }) => (
    <div 
      onClick={onClick}
      className="bg-white rounded-lg shadow-lg p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-nvent-red border-2 border-transparent"
    >
      <div className="flex items-center justify-center w-16 h-16 bg-nvent-red rounded-full mb-4 mx-auto">
        <Icon size={32} className="text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{title}</h3>
      <p className="text-gray-600 text-center leading-relaxed">{description}</p>
    </div>
  );

  const StatCard = ({ icon: Icon, label, value, suffix }) => (
    <div className="flex items-center space-x-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
      <div className="w-10 h-10 bg-white bg-opacity-30 rounded-full flex items-center justify-center">
        <Icon size={20} className="text-white" />
      </div>
      <div>
        <div className="text-2xl font-bold text-white">
          <AnimatedCounter value={value} suffix={suffix} />
        </div>
        <div className="text-sm text-white text-opacity-90">{label}</div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-nvent-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-nvent-yellow rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 p-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            nVent <span className="text-nvent-red">ERICO</span> PVT Series
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Superior 5kA lightning protection technology that delivers unmatched reliability and performance 
            for your renewable energy systems. Experience the difference with advanced surge protection.
          </p>
          <div className="w-24 h-1 bg-nvent-red mx-auto mb-12"></div>
        </div>

        {/* Application Selection */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Select Your Application
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AppCard
              type="solar"
              icon={Sun}
              title="Solar Power Systems"
              description="Protect your solar installations from power surges and ensure maximum uptime with advanced SPD technology."
              onClick={() => onSelectApp('solar')}
            />
            <AppCard
              type="wind"
              icon={Wind}
              title="Wind Power Systems"
              description="Safeguard wind turbines and maximize energy generation efficiency with reliable surge protection."
              onClick={() => onSelectApp('wind')}
            />
            <AppCard
              type="storage"
              icon={Battery}
              title="Energy Storage Systems"
              description="Ensure reliable protection for battery storage and grid-tie systems with intelligent monitoring."
              onClick={() => onSelectApp('storage')}
            />
          </div>
        </div>

        {/* Statistics Banner */}
        <div className="bg-gradient-to-r from-nvent-red to-red-600 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            nVent ERICO Lightning Protection Performance
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StatCard
              icon={Shield}
              label="Systems Protected"
              value={APP_DATA.globalStats.systemsProtected}
              suffix="+"
            />
            <StatCard
              icon={TrendingUp}
              label="Average Uptime"
              value={APP_DATA.globalStats.uptimeImproved}
              suffix="%"
            />
            <StatCard
              icon={Zap}
              label="Lightning Events"
              value={APP_DATA.globalStats.lightningEvents}
              suffix="+"
            />
            <StatCard
              icon={TrendingUp}
              label="Downtime Reduction"
              value={APP_DATA.globalStats.downtimeReduced}
              suffix="%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;