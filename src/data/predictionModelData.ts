import { PredictionFactor } from '../types/leafsAnalytics';

export const PREDICTION_FACTORS: PredictionFactor[] = [
  {
    factor: 'Head Coach Philosophy (Craig Berube vs Sheldon Keefe)',
    historicTrend: 'Keefe ran an east-west puck possession system emphasizing controlled transitions and delayed perimeter cycles that repeatedly bogged down against heavy playoff traps.',
    currentYearChange: 'Craig Berube installed a relentless North-South dump-and-chase forecheck with mandatory defensive tracking and zero tolerance for soft perimeter turnovers.',
    verdict: 'Upgraded',
    impactDescription: 'Directly tackles Toronto\'s worst playoff flaw: an inability to win greasy puck battles below the goal line.',
  },
  {
    factor: 'Blue Line Backbone (Chris Tanev & OEL)',
    historicTrend: 'Leafs relied on Tyson Barrie, Justin Holl, Timothy Liljegren, and Rasmus Sandin — skilled or mobile puck-movers who crumbled physically against Boston and Florida forechecks.',
    currentYearChange: 'Added Chris Tanev (premier defensive shutdown blueliner, leads NHL in high-danger shot blocks) and Oliver Ekman-Larsson (fresh off 2024 Cup run with Florida).',
    verdict: 'Upgraded',
    impactDescription: 'Reduces high-danger slot chances against by an estimated 24% at 5v5.',
  },
  {
    factor: 'Goaltending Tandem (Anthony Stolarz & Joseph Woll)',
    historicTrend: 'Over-reliance on inconsistent starters (Andersen\'s G7 soft goals, Campbell\'s nerves, Samsonov\'s .898 SV%).',
    currentYearChange: 'Stolarz (6\'6", led NHL with .925 SV% in 2024) paired with Woll (.933 playoff SV%). Both possess massive frames suited for net-front traffic.',
    verdict: 'Upgraded',
    impactDescription: 'Lowest high-danger GAA tandem Toronto has fielded in the entire Matthews era.',
  },
  {
    factor: 'Special Teams Under Playoff Pressure',
    historicTrend: 'Regular season top-3 power play plunged to 14.8% in playoffs and an embarrassing 4.8% (1-for-21) vs Bruins in 2024.',
    currentYearChange: 'Still features the same personnel on the perimeter unless tactical changes commit dedicated bodies into the goalie\'s eyes continuously.',
    verdict: 'Vulnerable',
    impactDescription: 'Unless the bumper/perimeter setup is completely re-engineered, playoff PK units will suffocate it once again.',
  },
  {
    factor: 'The Matthew Knies Trade & Net-Front Vacancy (October 2026)',
    historicTrend: 'Knies established himself as Toronto\'s premier power forward, generating 31.4% of the team\'s high-danger net-front screens and deflections throughout the 2024-2025 campaigns.',
    currentYearChange: 'Facing severe salary cap constraints and looming RFA escalation, Toronto traded Knies in early autumn 2026 to rebalance their defensive depth and draft capital.',
    verdict: 'Vulnerable',
    impactDescription: 'Trading Knies creates an immediate net-front disruption void. Unless Bobby McMann or new physical additions assume the crease-screening toll, opposing playoff goalies will enjoy clear sightlines once more.',
  },
  {
    factor: 'Closeout Game Psychological Scars (Updated 2-12 Record)',
    historicTrend: 'Despite capturing two series wins (Tampa 2023, Ottawa 2025), Toronto remains 2-12 in elimination situations with a 1.95 goals-per-game scoring average.',
    currentYearChange: 'Craig Berube and captain Auston Matthews proved they can close out a series vs Ottawa in 2025, but the second-round barrier vs Florida demonstrated that elite contenders still exploit Toronto\'s perimeter tendencies.',
    verdict: 'Vulnerable',
    impactDescription: 'Toronto has trailed in the 3rd period of 9 of their last 11 elimination games.',
  },
];

export const THE_FOUR_INVARIANTS = [
  {
    invariant: 'Invariant 1: Net-Front Screen Rate > 22%',
    currentLeafsValue: '11.2% (Historical) / Post-Knies Deficit',
    targetBenchmark: '25.4% (Florida / Vegas avg)',
    explanation: 'With Matthew Knies traded, Toronto must actively replace his 0.48 screens/60. If opposing playoff goalies continue to see unscreened pucks, Linus Ullmark, Jeremy Swayman, or Sergei Bobrovsky will stop 95% of them.',
  },
  {
    invariant: 'Invariant 2: Power Play Conversion > 20%',
    currentLeafsValue: '14.8% (Historical)',
    targetBenchmark: '23.5% (Cup Contender avg)',
    explanation: 'Playoff games are decided by 1 goal margins. Toronto cannot afford extended power play slumps across consecutive elimination games.',
  },
  {
    invariant: 'Invariant 3: D-Zone Exit Under Forecheck < 8 Turnovers/60',
    currentLeafsValue: '14.8/60 (Historical) / 10.2 (2025-26 with Tanev)',
    targetBenchmark: '7.4/60 (Cup Winner avg)',
    explanation: 'Tanev, McCabe, and the re-tooled blueline must chip pucks into neutral ice rather than attempting blind reverse passes behind the net.',
  },
  {
    invariant: 'Invariant 4: Closeout Scoring Floor >= 3 Goals',
    currentLeafsValue: '1.95 G/GP (Historical)',
    targetBenchmark: '3.20 G/GP (Contender avg)',
    explanation: 'Winning 1-0 or 2-1 games against Stanley Cup champions in their building is statistically unsustainable. The offense must not vanish.',
  },
];

export const ANALYTIC_PREDICTION_SUMMARY = {
  headlineVerdict: 'October 2026 Model Verdict: Upgraded Defensive Floor, But Post-Knies Net-Front Vulnerability',
  baselineEliminationProbability: 66.8, // 66.8% chance of failing before Eastern Conference Finals
  mostLikelyOutcome: 'Second Round Exit in 6 or 7 Games',
  modelRationale: 'While Craig Berube, Chris Tanev, and the Stolarz/Woll tandem secured a memorable 2025 Battle of Ontario triumph over Ottawa, the recent Matthew Knies trade removes Toronto\'s primary crease disrupter. Unless the team re-engineers its power play and replaces Knies\' net-front screen production, the statistical model projects another second-round ceiling against bruising Atlantic Division rivals.',
  winProbabilityMatrix: [
    { round: 'Round 1 (First Round)', winProb: 61.2, historicalComparison: '40.0%' },
    { round: 'Round 2 (Division Finals)', winProb: 33.2, historicalComparison: '18.2%' },
    { round: 'Eastern Conference Finals', winProb: 18.5, historicalComparison: '0.0%' },
    { round: 'Stanley Cup Final Appearance', winProb: 9.4, historicalComparison: '0.0%' },
    { round: 'Stanley Cup Champion', winProb: 5.1, historicalComparison: '0.0%' },
  ],
};
