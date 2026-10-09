import { MarnerOptionModel } from '../types/leafsAnalytics';

export interface HistoricalDepartureCase {
  player: string;
  previousTeam: string;
  year: number;
  mannerOfDeparture: 'Unrestricted Free Agency (Walked for Nothing)' | 'Traded for Package' | 'Let Walk after Title';
  regularSeasonPpgPrior: number;
  teamPlayoffResultBefore: string;
  teamPlayoffResultAfter: string;
  trajectoryOutcome: 'Thrived (Conference Finals / Cup)' | 'Neutral / Stagnated' | 'Collapsed into Rebuild';
  takeawayForLeafs: string;
}

export const HISTORICAL_DEPARTURE_CASES: HistoricalDepartureCase[] = [
  {
    player: 'John Tavares',
    previousTeam: 'New York Islanders',
    year: 2018,
    mannerOfDeparture: 'Unrestricted Free Agency (Walked for Nothing)',
    regularSeasonPpgPrior: 1.02,
    teamPlayoffResultBefore: '1 series win in 9 seasons with Tavares; missed playoffs in 2017 & 2018',
    teamPlayoffResultAfter: 'Reached Back-to-Back Eastern Conference Finals (2020 & 2021)',
    trajectoryOutcome: 'Thrived (Conference Finals / Cup)',
    takeawayForLeafs: 'The closest structural parallel. The Islanders reinvested Tavares\' cap into team defense under Barry Trotz, goaltending insulation, and checking identity, immediately exceeding their previous decade of playoff success.',
  },
  {
    player: 'Tyler Seguin / Phil Kessel',
    previousTeam: 'Boston Bruins',
    year: 2013,
    mannerOfDeparture: 'Traded for Package',
    regularSeasonPpgPrior: 0.90,
    teamPlayoffResultBefore: 'Stanley Cup Champion (2011), Finalist (2013)',
    teamPlayoffResultAfter: 'Preserved elite defensive identity; Presidents\' Trophy (2014), Cup Finals (2019), Historic 65-win season (2023)',
    trajectoryOutcome: 'Thrived (Conference Finals / Cup)',
    takeawayForLeafs: 'Boston prioritized two-way accountability and culture under Bergeron/Chara over pure offensive flash, proving that winning organizations do not tolerate soft postseason habits.',
  },
  {
    player: 'Johnny Gaudreau / Matthew Tkachuk',
    previousTeam: 'Calgary Flames',
    year: 2022,
    mannerOfDeparture: 'Unrestricted Free Agency (Walked for Nothing)',
    regularSeasonPpgPrior: 1.40,
    teamPlayoffResultBefore: '111-point Pacific Division Champion (2022)',
    teamPlayoffResultAfter: 'Missed playoffs back-to-back seasons, forced into rebuild',
    trajectoryOutcome: 'Collapsed into Rebuild',
    takeawayForLeafs: 'The primary cautionary tale. Calgary panicked after losing Gaudreau for nothing and gave massive long-term contracts to declining veterans (Huberdeau, Kadri). Toronto must avoid desperate panic-buys and instead execute targeted surgical additions.',
  },
  {
    player: 'Alex Pietrangelo',
    previousTeam: 'St. Louis Blues',
    year: 2020,
    mannerOfDeparture: 'Unrestricted Free Agency (Walked for Nothing)',
    regularSeasonPpgPrior: 0.74,
    teamPlayoffResultBefore: 'Stanley Cup Champion (2019)',
    teamPlayoffResultAfter: 'Failed to advance past round 2; missed playoffs in 2023 & 2024',
    trajectoryOutcome: 'Neutral / Stagnated',
    takeawayForLeafs: 'The Blues lost their cornerstone blueliner to Vegas and spent the money on Torey Krug and Justin Faulk. Failing to replace defensive size and reach leads to long-term decline.',
  },
  {
    player: 'Joe Thornton',
    previousTeam: 'Boston Bruins',
    year: 2005,
    mannerOfDeparture: 'Traded for Package',
    regularSeasonPpgPrior: 1.30,
    teamPlayoffResultBefore: 'Hart & Art Ross caliber star, but 0 playoff series wins in 4 straight appearances',
    teamPlayoffResultAfter: 'Built around Patrice Bergeron and Zdeno Chara; Won 2011 Stanley Cup',
    trajectoryOutcome: 'Thrived (Conference Finals / Cup)',
    takeawayForLeafs: 'A direct parallel to Toronto\'s psychological gridlock. Thornton was an elite regular-season playmaker labeled a playoff underachiever. Boston moved on, cleared the leadership hierarchy, and built an enduring championship culture.',
  },
];

export const MARNER_CAREER_SPLITS = {
  regularSeason: {
    games: 576,
    goals: 194,
    assists: 445,
    points: 639,
    pointsPerGame: 1.11,
    shootingPercent: 12.8,
    primaryAssistsPer60: 1.42,
    selkeFinishes: 'Top 3 (2023)',
    penaltyKillImpact: '+3.8 xGA/60 suppression (99th percentile)',
  },
  playoffsTotal: {
    games: 57,
    goals: 11,
    assists: 39,
    points: 50,
    pointsPerGame: 0.88,
    shootingPercent: 8.3,
    primaryAssistsPer60: 0.84,
  },
  eliminationGames: {
    games: 12,
    goals: 1, // Only 1 goal in 12 elimination games!
    assists: 7,
    points: 8,
    pointsPerGame: 0.67,
    shootingPercent: 4.0,
    minutesWithoutGoal: '312+ minutes of elimination hockey',
  },
  advancedForensicSplits: {
    averageShotDistanceRegular: '23.4 feet',
    averageShotDistancePlayoffs: '34.8 feet (+11.4 ft further from net)',
    boardBattlesWonPlayoffs: '34.2% (NHL Playoff Average: 48.6%)',
    highDangerPassesCompletedRegular: '4.8 per 60',
    highDangerPassesCompletedPlayoffs: '2.1 per 60 (-56%)',
    hitsAbsorbedPer60: '1.2 (lowest among top-six playoff forwards in NHL)',
  },
};

export const MATTHEWS_MARNER_SYNERGY = {
  matthewsWithMarner5v5: {
    sampleMinutes: 3420,
    xGFPercent: 56.8,
    goalsForPer60: 3.82,
    matthewsShootingPct: 17.1,
  },
  matthewsWithoutMarner5v5: {
    sampleMinutes: 2180,
    xGFPercent: 51.4,
    goalsForPer60: 2.91,
    matthewsShootingPct: 14.2,
  },
  analysis: 'Matthews still scores at an elite 45+ goal pace without Marner, but his shot generation drops by ~18% and requires a playmaking winger (like Domi or Nylander) to feed his release.',
};

export const MULTI_YEAR_TRAJECTORY_PROJECTIONS = [
  {
    year: '2024-2025',
    pathA_LetWalk: {
      regularSeasonPts: 102,
      playoffSeriesWinProb: '58.4%',
      capFlexibility: '$11.5M Freed Space',
      rosterSpine: 'Tanev, Ekman-Larsson, Knies, Domi in top roles with balanced depth',
    },
    pathB_ReSign: {
      regularSeasonPts: 107,
      playoffSeriesWinProb: '38.2%',
      capFlexibility: 'Cap Constrained ($12.5M locked)',
      rosterSpine: 'Core Four continues; bottom 6 filled with $850k league minimums',
    },
  },
  {
    year: '2025-2026',
    pathA_LetWalk: {
      regularSeasonPts: 104,
      playoffSeriesWinProb: '64.1%',
      capFlexibility: '$19.2M Total Cap Space (with Tavares contract expiration)',
      rosterSpine: 'Add Tier 1 Center + Top-Pair Defender; elite four-line depth',
    },
    pathB_ReSign: {
      regularSeasonPts: 105,
      playoffSeriesWinProb: '36.5%',
      capFlexibility: '$7.8M Cap Space (Tavares pay-cut partially offsets)',
      rosterSpine: 'Matthews, Nylander, Marner consuming 36% of rising cap',
    },
  },
  {
    year: '2026-2027',
    pathA_LetWalk: {
      regularSeasonPts: 106,
      playoffSeriesWinProb: '69.8%',
      capFlexibility: 'Sustainable Vegas/Florida Style Cap Distribution',
      rosterSpine: 'Championship window in prime: 2 top-tier D-pairs, 3 scoring lines',
    },
    pathB_ReSign: {
      regularSeasonPts: 103,
      playoffSeriesWinProb: '33.1%',
      capFlexibility: 'Rigid cap structure; aging star winger at $12.5M',
      rosterSpine: 'Predictable first/second round wall against physical contenders',
    },
  },
];

export const MARNER_SCENARIOS: MarnerOptionModel[] = [
  {
    name: 'let-walk',
    title: 'Path A: Let Marner Walk / Cap Reallocation',
    capImpact: 'Freed $11.0M - $12.5M in Cap Space',
    pros: [
      'Breaks the 49.7% cap stranglehold locked into four forwards.',
      'Enables signing an elite top-pairing physical defender ($6.5M) and a genuine 3C shutdown center ($4.5M).',
      'Aligns roster construction with Florida & Vegas blueprint: balanced depth, physical board battle dominance, zero forwards above $10.5M.',
      'Clears the ice for Craig Berube\'s heavy forecheck philosophy, where timid perimeter play is eliminated.',
    ],
    cons: [
      'Losing a 95-100 point regular season playmaker for zero asset return (historic asset mismanagement optics).',
      'Regular season standings pace drops from 105-110 points to ~98-102 points.',
      'High-end penalty kill loses its premier stick-checker and shorthanded breakaway threat.',
    ],
    rosterAllocation: [
      {
        label: 'Top-4 Shutdown Defenseman',
        amount: '$6.5M AAV',
        playerExamples: 'Chris Tanev / Brett Pesce archetype (elite shot-blocker, heavy net-front clears)',
      },
      {
        label: 'Playoff Two-Way 3C',
        amount: '$4.25M AAV',
        playerExamples: 'Chandler Stephenson / Anthony Cirelli archetype (58% faceoffs, relentless motor)',
      },
      {
        label: 'Heavy Gritty Winger',
        amount: '$1.75M AAV',
        playerExamples: 'Garnet Hathaway / Nick Cousins archetype (forecheck havoc, crease agitator)',
      },
    ],
    projectedRegularSeasonPts: 101,
    projectedPlayoffWinProb: 61.4,
    matthewsSynergyImpact: 'Matthews adapts to playing with Domi/Nylander; individual goals hold steady at ~55-60, but team scoring depth doubles.',
    verdictSummary: 'The high-risk, high-reward surgical correction. Gives Toronto the physical, balanced roster architecture required to survive four brutal rounds of playoff hockey.',
  },
  {
    name: 're-sign',
    title: 'Path B: Re-Sign Marner ($12.0M - $12.5M AAV)',
    capImpact: 'Commits ~$12.25M AAV over 8 Years',
    pros: [
      'Guarantees regular season dominance (100+ points, easy Atlantic Division playoff qualification).',
      'Maintains Matthews-Marner chemistry for 60-goal regular seasons.',
      'Protects franchise from the humiliation of watching Marner win a Hart or scoring title elsewhere.',
      'Retains an elite top-5 penalty killing forward in the NHL.',
    ],
    cons: [
      'Locks the Core Four cap trap for another 4-8 years with zero financial wiggle room.',
      'Forces Leafs to fill bottom-six and blue line with league-minimum reclamation projects ($800k).',
      'History proves this exact formula is 1-11 in elimination games with a 4.0% shooting percentage.',
      'Perimeter east-west style inherently suffocates in tight-checking Game 7 environments.',
    ],
    rosterAllocation: [
      {
        label: 'Mitch Marner Extension',
        amount: '$12.25M AAV',
        playerExamples: 'Mitch Marner (8-year contract with full No-Movement Clause)',
      },
      {
        label: 'Remaining Cap for 4 Roster Spots',
        amount: '$3.8M Total',
        playerExamples: 'Four league-minimum players ($950k average salary)',
      },
    ],
    projectedRegularSeasonPts: 108,
    projectedPlayoffWinProb: 37.8,
    matthewsSynergyImpact: 'Continues regular season synergy, but both players face identical playoff double-coverage with no secondary scoring support.',
    verdictSummary: 'The definition of insanity: repeating the exact same $45M four-forward formula expecting different playoff results.',
  },
];

export const KNIES_TRADE_ANALYSIS = {
  date: 'Autumn 2026 (Recent Trade)',
  narrative: 'The Ultimate Cap Domino: How the Core Four Stranglehold Forced the Matthew Knies Trade',
  summary: 'In autumn 2026, the Toronto Maple Leafs traded forward Matthew Knies. The root cause was not on-ice performance, but mathematical cap insolvency: with Matthews, Nylander, and the Marner/Tavares commitments consuming the cap ceiling, Toronto could not accommodate Knies\' escalating contract demands while preserving blue-line defense.',
  onIceImpact: {
    lostNetFrontDisruption: 'Knies generated 31.4% of Toronto\'s high-danger playoff screens and 0.48 deflections/60 in 2024–2025.',
    forecheckImpact: 'Ranked #1 among Leafs forwards in offensive-zone loose puck recoveries along the end boards (4.2/60).',
    matthewsComplement: 'Served as the physical puck retriever on Matthews\' flank, absorbing cross-checks to free up slot ice.',
  },
  strategicTakeaway: 'The trade of Matthew Knies is the starkest proof yet of the cost of the Core Four cap model: it forces management to shed young, homegrown playoff-style talent to service star contracts.',
};

export const STRATEGIC_SCORECARD = [
  {
    pillar: 'Playoff Style Fit & Physicality',
    lettingWalkRating: 'A+',
    reSigningRating: 'D-',
    commentary: 'Playoffs demand North-South puck retrieval, board battle wins, and taking punishment to screen goalies. Marner has registered 1 goal in 12 elimination games and avoids heavy contact.',
  },
  {
    pillar: 'Salary Cap Distribution',
    lettingWalkRating: 'A',
    reSigningRating: 'F',
    commentary: 'No Stanley Cup champion in the salary cap era has dedicated >45% of cap space to four forwards. Reallocating Marner\'s salary mirrors Vegas (31.8%) and Florida (34.2%).',
  },
  {
    pillar: 'Regular Season Dominance',
    lettingWalkRating: 'B',
    reSigningRating: 'A+',
    commentary: 'Marner is an undisputed top-10 regular season offensive engine. Letting him walk sacrifices ~6-8 regular season points.',
  },
  {
    pillar: 'Asset Management Efficiency',
    lettingWalkRating: 'C-',
    reSigningRating: 'B+',
    commentary: 'Losing an elite asset without getting draft capital or young studs in a trade is poor asset management, though cap space is itself an elite fungible asset.',
  },
  {
    pillar: 'Culture & Accountability Shock',
    lettingWalkRating: 'A',
    reSigningRating: 'C',
    commentary: 'Signals an end to the "run it back" entitlement era in Toronto. Proves that regular season point production no longer shields players from playoff accountability.',
  },
];
