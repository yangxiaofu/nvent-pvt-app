export const APP_DATA = {
  performanceMetrics: {
    standard: {
      failures: 12,
      downtime: 96,
      mtbf: 720,
      reliability: 85
    },
    pvt: {
      failures: 2,
      downtime: 8,
      mtbf: 4380,
      reliability: 99
    }
  },
  
  calculationDefaults: {
    solar: {
      systemSize: 100,
      ppaRate: 0.08,
      capacityFactor: 25,
      equipmentValue: 2.5
    },
    wind: {
      systemSize: 50,
      ppaRate: 0.06,
      capacityFactor: 35,
      equipmentValue: 4.0
    },
    storage: {
      systemSize: 25,
      ppaRate: 0.12,
      capacityFactor: 15,
      equipmentValue: 1.8
    }
  },
  
  environmentalImpact: {
    co2Reduced: 2500000,
    energyProtected: 150000,
    systemsProtected: 45000,
    uptimeImproved: 99.5
  },
  
  applicationTypes: {
    solar: {
      title: "Solar Power Systems",
      description: "Protect your solar installations from power surges and ensure maximum uptime",
      icon: "☀️"
    },
    wind: {
      title: "Wind Power Systems", 
      description: "Safeguard wind turbines and maximize energy generation efficiency",
      icon: "🌪️"
    },
    storage: {
      title: "Energy Storage Systems",
      description: "Ensure reliable protection for battery storage and grid-tie systems",
      icon: "🔋"
    }
  },
  
  metrics: [
    {
      label: "Annual Failures",
      standardValue: 12,
      pvtValue: 2,
      unit: "failures/year",
      inverse: true
    },
    {
      label: "Downtime Hours",
      standardValue: 96,
      pvtValue: 8,
      unit: "hours/year",
      inverse: true
    },
    {
      label: "MTBF",
      standardValue: 720,
      pvtValue: 4380,
      unit: "hours",
      inverse: false
    },
    {
      label: "System Reliability",
      standardValue: 85,
      pvtValue: 99,
      unit: "%",
      inverse: false
    }
  ]
};