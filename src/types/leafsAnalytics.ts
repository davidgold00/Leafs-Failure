export interface PlayoffSeries {
  id: string;
  year: number;
  opponent: string;
  opponentLogo: string;
  round: string;
  result: 'L' | 'W';
  score: string;
  gamesPlayed: number;
  leafsGoalsFor: number;
  leafsGoalsAgainst: number;
  eliminationGameScore: string;
  eliminationDate: string;
  coreFourPoints: {
    matthews: { g: number; a: number; pts: number; shots: number };
    marner: { g: number; a: number; pts: number; shots: number };
    nylander: { g: number; a: number; pts: number; shots: number };
    tavares?: { g: number; a: number; pts: number; shots: number };
  };
  team5v5xGFPercent: number; // e.g. 52.4%
  team5v5ShootingPercent: number; // e.g. 6.2%
  powerPlayPercent: number; // e.g. 11.8%
  opposingGoalie: {
    name: string;
    savePercent: number;
    gsax: number;
  };
  leafsStartingGoalie: {
    name: string;
    savePercent: number;
    gsax: number;
  };
  autopsyFinding: string;
  criticalMoment: string;
  regularSeasonContext: {
    points: number;
    standingsRank: string;
    ppPercent: number;
    shPercent5v5: number;
  };
}

export interface MetricComparison {
  category: string;
  regularSeason: number;
  playoffs: number;
  eliminationGames: number;
  leaguePlayoffAvg: number;
  cupWinnerAvg: number;
  unit: string;
  verdict: 'Catastrophic' | 'Below Average' | 'Average' | 'Elite';
  explanation: string;
}

export interface ContenderProfile {
  team: string;
  season: string;
  result: string;
  top4CapShare: number; // % of salary cap spent on top 4 earners
  playoff5v5xGF: number;
  playoff5v5ShPercent: number;
  playoffPPPercent: number;
  netFrontScreenRate: number; // % of shots with net-front screens
  dZoneGiveawaysPer60: number;
  playoffGoalieSV: number;
  definingPlayoffIdentity: string;
}

export interface MarnerOptionModel {
  name: string;
  title: string;
  capImpact: string;
  pros: string[];
  cons: string[];
  rosterAllocation: {
    label: string;
    amount: string;
    playerExamples: string;
  }[];
  projectedRegularSeasonPts: number;
  projectedPlayoffWinProb: number;
  matthewsSynergyImpact: string;
  verdictSummary: string;
}

export interface PredictionFactor {
  factor: string;
  historicTrend: string;
  currentYearChange: string;
  verdict: 'Upgraded' | 'Neutral' | 'Vulnerable';
  impactDescription: string;
}
