export const APP_DATA = {
  performanceMetrics: {
    standard: {
      failures: 12,
      downtime: 96,
      mtbf: 720,
      reliability: 85
    },
    nVent: {
      failures: 2,
      downtime: 8,
      mtbf: 4380,
      reliability: 99
    }
  },
  
  failureRateData: {
    solar: {
      failureRate: 0.28,
      failureRateError: 0.05,
      equivalentInterval: "1 failure every 4-5 years",
      dominantMode: "MOV cartridge replacement"
    },
    wind: {
      failureRate: 0.17,
      failureRateError: 0.02,
      equivalentInterval: "1 failure every 6 years",
      dominantMode: "MV arrester replacement"
    },
    storage: {
      failureRate: 0.02,
      failureRateError: 0,
      equivalentInterval: "1 failure every 50 years",
      dominantMode: "Integration/operational issues",
      historicalRate: 0.92,
      historicalInterval: "1 failure every 1.1 years"
    }
  },
  
  lightningImpact: {
    standard: {
      impulseRating: 2,
      wind: 6,
      solar: 3,
      storage: 2,
      total: 11
    },
    nVent: {
      impulseRating: 5,
      wind: 2.5,
      solar: 1.5,
      storage: 1,
      total: 5
    }
  },
  
  applicationTypes: {
    solar: {
      title: "Solar Power Systems",
      description: "Protect your solar installations from lightning surges and ensure maximum uptime with nVent ERICO 5kA protection",
      icon: "☀️"
    },
    wind: {
      title: "Wind Power Systems", 
      description: "Safeguard wind turbines from lightning strikes and maximize energy generation with superior 5kA surge protection",
      icon: "🌪️"
    },
    storage: {
      title: "Energy Storage Systems",
      description: "Ensure reliable protection for battery storage systems with advanced nVent ERICO lightning protection",
      icon: "🔋"
    }
  },
  
  globalStats: {
    systemsProtected: 45000,
    uptimeImproved: 99.5,
    lightningEvents: 25000000,
    downtimeReduced: 55
  }
};