import React, { useState } from 'react';
import { Menu, X, Home, BarChart, Calculator, Leaf } from 'lucide-react';
import WelcomeScreen from './components/WelcomeScreen';
import PerformanceScreen from './components/PerformanceScreen';
import ROICalculatorScreen from './components/ROICalculatorScreen';
import EnvironmentalScreen from './components/EnvironmentalScreen';

function App() {
  const [screen, setScreen] = useState('welcome');
  const [appType, setAppType] = useState(null);
  const [presentationMode, setPresentationMode] = useState(false);

  const handleSelectApp = (type) => {
    setAppType(type);
    setScreen('performance');
  };

  const NavButton = ({ screenName, icon: Icon, label, disabled }) => (
    <button
      onClick={() => setScreen(screenName)}
      disabled={disabled}
      className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg transition-colors ${
        screen === screenName
          ? 'bg-nvent-red text-white'
          : disabled
          ? 'text-gray-400 cursor-not-allowed'
          : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      <Icon size={20} />
      <span className="font-medium">{label}</span>
    </button>
  );

  const renderScreen = () => {
    switch (screen) {
      case 'welcome':
        return <WelcomeScreen onSelectApp={handleSelectApp} />;
      case 'performance':
        return <PerformanceScreen appType={appType} />;
      case 'roi':
        return <ROICalculatorScreen appType={appType} />;
      case 'environmental':
        return <EnvironmentalScreen />;
      default:
        return <WelcomeScreen onSelectApp={handleSelectApp} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Header */}
      {!presentationMode && (
        <div className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-10 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-nvent-red rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">nV</span>
              </div>
              <h1 className="text-xl font-bold text-gray-800">nVent PVT Series</h1>
            </div>
            <button
              onClick={() => setPresentationMode(true)}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}

      {/* Sidebar */}
      {!presentationMode && (
        <div className="fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-gray-200 p-6">
          <nav className="space-y-2">
            <NavButton
              screenName="welcome"
              icon={Home}
              label="Welcome"
              disabled={false}
            />
            <NavButton
              screenName="performance"
              icon={BarChart}
              label="Performance"
              disabled={!appType}
            />
            <NavButton
              screenName="roi"
              icon={Calculator}
              label="ROI Calculator"
              disabled={!appType}
            />
            <NavButton
              screenName="environmental"
              icon={Leaf}
              label="Environmental"
              disabled={!appType}
            />
          </nav>
        </div>
      )}

      {/* Main Content */}
      <div className={`flex-1 ${!presentationMode ? 'ml-64 mt-16' : ''}`}>
        {presentationMode && (
          <button
            onClick={() => setPresentationMode(false)}
            className="fixed top-4 right-4 z-10 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-colors"
          >
            <Menu size={20} />
          </button>
        )}
        {renderScreen()}
      </div>
    </div>
  );
}

export default App;
