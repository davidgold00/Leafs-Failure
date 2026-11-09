import React, { useState } from 'react';

export interface StoryCard {
  id: string;
  chapter: string;
  title: string;
  tagline: string;
  category: 'Tactics' | 'Special Teams' | 'Psychology' | 'Crease Battle' | 'Roster & Cap';
  status: 'Critical Flaw' | 'Structural Drag' | 'Active Evolution';
  primaryStat: {
    label: string;
    regularSeason: string;
    elimination: string;
    delta: string;
    deltaType: 'negative' | 'positive';
    benchmark: string;
    benchmarkLabel: string;
  };
  visualGauges: {
    label: string;
    leafsValue: number; // 0-100
    championValue: number; // 0-100
    unit: string;
    description: string;
  }[];
  headlineTakeaway: string;
  detailedAnalysis: string[];
  keyVictimsOrExamples: string;
  hillerSystemRemedy: string;
}

export const STORY_CARDS: StoryCard[] = [
  {
    id: 'story-rush-mirage',
    chapter: 'Chapter 01',
    title: 'The Regular Season Rush Mirage',
    tagline: 'Why 110-point regular seasons consistently evaporate in May',
    category: 'Tactics',
    status: 'Critical Flaw',
    primaryStat: {
      label: 'Rush Scoring Chances per 60',
      regularSeason: '6.8 / 60',
      elimination: '2.7 / 60',
      delta: '-60.3% Collapse',
      deltaType: 'negative',
      benchmark: '4.8 / 60',
      benchmarkLabel: 'Cup Winners (Heavy Cycle)',
    },
    visualGauges: [
      {
        label: 'Rush Transition Reliance',
        leafsValue: 78,
        championValue: 42,
        unit: '% of Offense',
        description: 'Leafs offense relies heavily on open-ice transition speed that playoff defenses intentionally squeeze.',
      },
      {
        label: 'Sustained O-Zone Cycle Time',
        leafsValue: 34,
        championValue: 76,
        unit: 'Sec/Possession',
        description: 'Championship teams like Florida and Vegas pin opponents deep with heavy 40-second board cycles.',
      },
    ],
    headlineTakeaway:
      'In October and January, NHL defenses yield the neutral zone. In May, playoff opponents erect rigid 1-2-2 neutral trap walls that choke off Toronto’s rush lanes completely.',
    detailedAnalysis: [
      'Auston Matthews, Mitch Marner, and William Nylander feasted on disorganized mid-season line changes and passive gap control.',
      'When playoff opponents step up at the blue line, Toronto historically refused to dump the puck and engage in physical 50/50 corner scrums.',
      'Toronto ranked 15th of 16 playoff teams in tip-in goals (0.18/60), while champions like Florida (0.72/60) generate 4x as many ugly garbage goals.',
    ],
    keyVictimsOrExamples: '2021 Montreal Canadiens (stifled 3-1 lead with 1-2-2 neutral trap); 2024 Boston Bruins (clogged neutral ice across 7 games).',
    hillerSystemRemedy: 'Under head coach Jim Hiller (hired June 2026), the system mandates aggressive dump-and-chase with puck-retrieving wingers rather than east-west delay passes.',
  },
  {
    id: 'story-powerplay-freeze',
    chapter: 'Chapter 02',
    title: 'The Special Teams Black Hole',
    tagline: 'The predictable half-wall umbrella that goes stone cold in Game 7s',
    category: 'Special Teams',
    status: 'Critical Flaw',
    primaryStat: {
      label: 'Power Play Conversion Rate',
      regularSeason: '25.4%',
      elimination: '9.7%',
      delta: '4 for 41 in Closeouts',
      deltaType: 'negative',
      benchmark: '23.2%',
      benchmarkLabel: 'Cup Champion Average',
    },
    visualGauges: [
      {
        label: 'Elimination Game PP Efficiency',
        leafsValue: 10,
        championValue: 24,
        unit: '%',
        description: 'Just 4 goals on 41 closeout power play chances across 9 postseason campaigns.',
      },
      {
        label: 'Point Blueline Shooting Threat',
        leafsValue: 22,
        championValue: 80,
        unit: 'Threat Score',
        description: 'Morgan Rielly lacks an overpowering slap shot, allowing penalty kills to pack the low slot.',
      },
    ],
    headlineTakeaway:
      'The Leafs power play has been heavily scouted: opposing penalty kills flush the right half-wall, jam the Matthews cross-ice seam, and know there is no heavy point shot to fear.',
    detailedAnalysis: [
      'In 2024 Round 1 against Boston, Toronto was a horrific 1-for-21 (4.8%) on the power play, single-handedly tossing away a series where 5v5 goal differential was dead even.',
      'Because the blueline defender never shoots from distance, opposing penalty killers collapse their box lower and wider to suffocate Matthews and Tavares.',
      'Without puck movement through the bumper or low slot, the power play degenerates into slow perimeter catches that bleed 2 minutes without testing the goaltender.',
    ],
    keyVictimsOrExamples: '2024 Boston Bruins (1-for-21 PP); 2020 Columbus Blue Jackets (went 2-for-17 on PP during Qualifying Round exit).',
    hillerSystemRemedy: 'Hiller’s staff introduced dual-flank motion with Kirill Marchenko (acquired Sept 2026) and heavy point one-timers from Oliver Ekman-Larsson.',
  },
  {
    id: 'story-slot-shrinkage',
    chapter: 'Chapter 03',
    title: 'Slot Shrinkage & The Screen Deficit',
    tagline: 'Why opposing goalies routinely post .940+ SV% against Toronto',
    category: 'Crease Battle',
    status: 'Structural Drag',
    primaryStat: {
      label: 'Net-Front Screen Rate on SOG',
      regularSeason: '18.5%',
      elimination: '9.4%',
      delta: '-49.2% Screening Drop',
      deltaType: 'negative',
      benchmark: '26.1%',
      benchmarkLabel: 'Florida Panthers (Cup Model)',
    },
    visualGauges: [
      {
        label: 'Net-Front Screen Rate',
        leafsValue: 11,
        championValue: 26,
        unit: '% of Shots',
        description: 'Leafs forwards historically avoided paying the physical toll in the blue paint.',
      },
      {
        label: 'Unscreened Clean Goalie Sightline',
        leafsValue: 89,
        championValue: 74,
        unit: '%',
        description: 'Opposing playoff goalies see almost 90% of Toronto shots clearly with zero visual disruption.',
      },
    ],
    headlineTakeaway:
      'Toronto fans constantly complain about running into "hot goalies" (Price .932, Vasilevskiy .937, Bobrovsky .943, Swayman .950). In reality, Toronto gives them clean, unscreened sightlines.',
    detailedAnalysis: [
      'When an elite NHL goaltender sees the puck released off the blade from 25+ feet out, his save percentage exceeds .950 regardless of the shooter’s name.',
      'In elimination games, average Toronto shot distance retreats by +8.6 feet (from 21.2 ft in regular season to 29.8 ft in elimination games).',
      'Championship rosters battle through cross-checks in the blue paint to deflect pucks, create double screens, and hammer home second-chance rebounds.',
    ],
    keyVictimsOrExamples: 'Jeremy Swayman (.950 SV% in 2024); Sergei Bobrovsky (.943 SV% in 2023); Carey Price (.932 SV% in 2021).',
    hillerSystemRemedy: 'Emphasizing heavy net-front screens from physical forwards and crashing the crease to eliminate clean visual tracking.',
  },
  {
    id: 'story-closeout-wall',
    chapter: 'Chapter 04',
    title: 'The Closeout Wall: 2–12 Elimination Ledger',
    tagline: 'The psychological and physical paralysis when a series is on the line',
    category: 'Psychology',
    status: 'Critical Flaw',
    primaryStat: {
      label: 'Elimination Game Record',
      regularSeason: '105+ Pts/Yr',
      elimination: '2 – 12',
      delta: '14.3% Win Rate',
      deltaType: 'negative',
      benchmark: '62.5%',
      benchmarkLabel: 'Vegas & Florida Closeout Record',
    },
    visualGauges: [
      {
        label: 'Scoring Crash in Closeouts',
        leafsValue: 46,
        championValue: 92,
        unit: '% of Normal',
        description: 'Scoring drops from 3.62 G/GP regular season down to an abysmal 1.95 G/GP in elimination games.',
      },
      {
        label: 'Games Scored ≤2 Goals',
        leafsValue: 79,
        championValue: 28,
        unit: '% of Closeouts',
        description: 'In 11 of 14 elimination games in the Matthews era, Toronto failed to score 3 goals.',
      },
    ],
    headlineTakeaway:
      'When facing elimination or an opponent’s elimination game, Toronto’s scoring drops by 46.1%. A roster built on offensive dominance repeatedly scores 1 or 2 goals when it matters most.',
    detailedAnalysis: [
      'Across 14 elimination/closeout games in the Auston Matthews era, the Leafs are 2-12. The only two series triumphs came against Tampa Bay (Game 6 OT in 2023) and Ottawa (2025).',
      'The "Core Four" scored a combined 0 goals in 2021 Game 7 vs Montreal, 2022 Game 7 vs Tampa, and 2024 Game 7 vs Boston.',
      'Defensive posture becomes overly cautious in Game 7s, leading to tentative neutral zone turnovers and backbreaking overtime lapses.',
    ],
    keyVictimsOrExamples: 'Game 7 vs BOS 2018 (4-7), 2019 (1-5), 2024 (1-2 OT); Game 7 vs MTL 2021 (1-3); Game 7 vs TBL 2022 (1-2).',
    hillerSystemRemedy: 'Roster restructuring to remove single-point psychological failure and spread scoring across 3 balanced attacking waves.',
  },
  {
    id: 'story-post-marner-pivot',
    chapter: 'Chapter 05',
    title: 'The Post-Marner & Knies Strategic Pivot',
    tagline: 'The October 2026 reality: Vegas contract, trade restructuring, and Jim Hiller',
    category: 'Roster & Cap',
    status: 'Active Evolution',
    primaryStat: {
      label: 'Cap Flexibility Reclaimed',
      regularSeason: '49.7% Core Cap',
      elimination: '$12.0M Freed',
      delta: 'Balanced Depth Model',
      deltaType: 'positive',
      benchmark: '32-35%',
      benchmarkLabel: 'Cup Champion Top-4 Cap Share',
    },
    visualGauges: [
      {
        label: 'Defensive Cap Allocation',
        leafsValue: 68,
        championValue: 72,
        unit: 'Balance Index',
        description: 'Reallocated savings into top-4 shutdown defensemen (Tanev, Ekman-Larsson) and balanced wingers.',
      },
      {
        label: 'Cap Concentration in 4 Players',
        leafsValue: 36,
        championValue: 34,
        unit: '% of Cap Space',
        description: 'Normalized down from 49.7% to standard championship parameters (35%).',
      },
    ],
    headlineTakeaway:
      'Letting Mitch Marner walk to Vegas on a $12M AAV deal and trading Matthew Knies for Kirill Marchenko (Sept 28, 2026) terminated the top-heavy era and rebuilt playoff roster balance.',
    detailedAnalysis: [
      'For eight seasons, dedicating half the salary cap to four forwards prevented Toronto from acquiring physical 6\'3"+ defensemen and gritty bottom-six scoring.',
      'Kirill Marchenko brings pure shot volume and physical puck retrieval, complementing Matthews\' playmaking without draining secondary cap resources.',
      'With Jim Hiller running a high-pressure forechecking scheme, the Leafs enter the 2026-27 season with greater defensive structure and lower vulnerability to the perimeter trap.',
    ],
    keyVictimsOrExamples: 'Verified Transactions: Mitch Marner sign-and-trade to Vegas Golden Knights ($12.0M AAV); Matthew Knies traded for Kirill Marchenko (CBJ, Sept 2026).',
    hillerSystemRemedy: 'Balanced 3-line scoring distribution, top-4 blue line stability, and Jim Hiller\'s hard-forecheck mandate.',
  },
];

export const StoryCardDeck: React.FC<{ onNavigateToTab?: (tab: string) => void }> = ({ onNavigateToTab }) => {
  const [activeStoryIndex, setActiveStoryIndex] = useState<number>(0);
  const [expandedDetails, setExpandedDetails] = useState<boolean>(true);
  const [viewMode, setViewMode] = useState<'stepper' | 'grid'>('stepper');

  const currentStory = STORY_CARDS[activeStoryIndex];

  return (
    <div className="space-y-6">
      {/* Section Header with Mode Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1">
            <span>Visual Storytelling Format</span>
            <span aria-hidden="true">·</span>
            <span>5 Core Takeaway Chapters</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase font-athletic">
            The Playoff Autopsy: 5 Story Chapters
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
            Explore the core mechanical reasons the Maple Leafs consistently fail in elimination games through interactive visual story cards.
          </p>
        </div>

        {/* View Switcher: Stepper vs Grid */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg shrink-0">
          <button
            onClick={() => setViewMode('stepper')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap ${
              viewMode === 'stepper'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Guided Story Mode
          </button>
          <button
            onClick={() => setViewMode('grid')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap ${
              viewMode === 'grid'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            All 5 Cards Grid
          </button>
        </div>
      </div>

      {viewMode === 'stepper' ? (
        /* Stepper Mode: 1 High-Impact Card at a time with Nav Pills & Deep Breakdown */
        <div className="space-y-4">
          {/* Chapter Selector Ribbon */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {STORY_CARDS.map((story, idx) => (
              <button
                key={story.id}
                onClick={() => setActiveStoryIndex(idx)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 border ${
                  activeStoryIndex === idx
                    ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/20'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-850'
                }`}
              >
                <span className="font-mono-numbers text-[11px] opacity-75">{idx + 1}.</span>
                <span>{story.title.split(':')[0]}</span>
                {story.category === 'Roster & Cap' && (
                  <span className="text-[10px] bg-amber-500/30 text-amber-300 px-1.5 py-0.5 rounded font-mono-numbers">
                    2026
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Active Story Card Container */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/80 shadow-2xl p-6 sm:p-8 space-y-6 transition-all">
            {/* Story Card Top Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800 pb-5">
              <div>
                <div className="flex items-center gap-2.5 text-xs">
                  <span className="font-mono-numbers font-bold text-blue-400 uppercase tracking-wider">
                    {currentStory.chapter}
                  </span>
                  <span className="text-slate-600">·</span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-800 text-slate-300">
                    {currentStory.category}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                      currentStory.status === 'Critical Flaw'
                        ? 'bg-rose-950/80 text-rose-300 border border-rose-800/80'
                        : currentStory.status === 'Structural Drag'
                        ? 'bg-amber-950/80 text-amber-300 border border-amber-800/80'
                        : 'bg-emerald-950/80 text-emerald-300 border border-emerald-800/80'
                    }`}
                  >
                    {currentStory.status}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase font-athletic tracking-wide mt-2">
                  {currentStory.title}
                </h3>
                <p className="text-sm text-slate-300 mt-1 font-medium">
                  {currentStory.tagline}
                </p>
              </div>

              {/* Prev / Next controls */}
              <div className="flex items-center gap-2 self-start lg:self-center shrink-0">
                <button
                  onClick={() => setActiveStoryIndex((prev) => Math.max(0, prev - 1))}
                  disabled={activeStoryIndex === 0}
                  className="px-3 py-1.5 text-xs font-semibold rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-white transition-colors cursor-pointer"
                >
                  ← Prev Chapter
                </button>
                <span className="text-xs font-mono-numbers text-slate-400 px-1">
                  {activeStoryIndex + 1} of {STORY_CARDS.length}
                </span>
                <button
                  onClick={() => setActiveStoryIndex((prev) => Math.min(STORY_CARDS.length - 1, prev + 1))}
                  disabled={activeStoryIndex === STORY_CARDS.length - 1}
                  className="px-3 py-1.5 text-xs font-semibold rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-white transition-colors cursor-pointer"
                >
                  Next Chapter →
                </button>
              </div>
            </div>

            {/* Visual Metric Comparison Hero Block */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
              {/* Primary Variance Metric Box (5 Cols) */}
              <div className="md:col-span-5 p-5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between space-y-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {currentStory.primaryStat.label}
                </div>

                <div className="grid grid-cols-2 gap-4 py-2 border-y border-slate-800/80 font-mono-numbers">
                  <div>
                    <div className="text-[11px] text-slate-400 uppercase">Regular Season</div>
                    <div className="text-xl sm:text-2xl font-bold text-emerald-400 mt-0.5">
                      {currentStory.primaryStat.regularSeason}
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 uppercase">Elimination</div>
                    <div className="text-xl sm:text-2xl font-bold text-rose-400 mt-0.5">
                      {currentStory.primaryStat.elimination}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                    <span className="font-bold text-rose-400 font-mono-numbers">
                      {currentStory.primaryStat.delta}
                    </span>
                  </div>
                  <div className="text-slate-400 text-right">
                    <span className="text-[11px] block text-slate-500">{currentStory.primaryStat.benchmarkLabel}</span>
                    <span className="font-mono-numbers text-amber-300 font-bold">{currentStory.primaryStat.benchmark}</span>
                  </div>
                </div>
              </div>

              {/* Visual Meter Gauges (7 Cols) */}
              <div className="md:col-span-7 p-5 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between space-y-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center justify-between">
                  <span>Tactical Execution Benchmark vs Champions</span>
                  <span className="text-blue-400 font-mono-numbers">0–100 Scale</span>
                </div>

                <div className="space-y-4">
                  {currentStory.visualGauges.map((gauge, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-white">{gauge.label}</span>
                        <div className="font-mono-numbers flex items-center gap-3 text-[11px]">
                          <span className="text-rose-400 font-bold">Leafs: {gauge.leafsValue}{gauge.unit}</span>
                          <span className="text-slate-600">vs</span>
                          <span className="text-amber-300 font-bold">Cup Champ: {gauge.championValue}{gauge.unit}</span>
                        </div>
                      </div>

                      {/* Visual double bar meter */}
                      <div className="h-3 w-full bg-slate-900 rounded-full overflow-hidden flex relative">
                        <div
                          style={{ width: `${gauge.leafsValue}%` }}
                          className="h-full bg-rose-500/80 rounded-full transition-all duration-500"
                        />
                        <div
                          style={{ left: `${gauge.championValue}%` }}
                          className="absolute top-0 bottom-0 w-1 bg-amber-400 z-10 shadow-sm"
                          title={`Cup Champion Target: ${gauge.championValue}%`}
                        />
                      </div>
                      <p className="text-[11px] text-slate-400 leading-tight">
                        {gauge.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Headline Takeaway Banner */}
            <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-900/50 flex items-start gap-3.5">
              <span className="text-lg text-blue-400 shrink-0 select-none">💡</span>
              <p className="text-xs sm:text-sm text-blue-100 font-medium leading-relaxed">
                {currentStory.headlineTakeaway}
              </p>
            </div>

            {/* Expandable Forensic Deep Dive */}
            <div className="space-y-3 pt-2">
              <button
                onClick={() => setExpandedDetails(!expandedDetails)}
                className="flex items-center justify-between w-full text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white border-b border-slate-800 pb-2 cursor-pointer transition-colors"
              >
                <span>Forensic Evidence & Tactical Analysis</span>
                <span>{expandedDetails ? 'Hide Analysis ▲' : 'Show Full Breakdown ▼'}</span>
              </button>

              {expandedDetails && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2 text-xs leading-relaxed animate-fadeIn">
                  <div className="md:col-span-7 space-y-2.5">
                    <div className="font-semibold text-white uppercase tracking-wider text-[11px]">
                      Why This Mechanical Pattern Repeats:
                    </div>
                    <ul className="space-y-2 text-slate-300 list-disc list-inside">
                      {currentStory.detailedAnalysis.map((item, i) => (
                        <li key={i} className="leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-slate-400 mt-3">
                      <span className="font-semibold text-slate-300">Historical Proof: </span>
                      {currentStory.keyVictimsOrExamples}
                    </div>
                  </div>

                  <div className="md:col-span-5 p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3 flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] font-bold text-amber-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <span>Jim Hiller (2026) Tactical Remedy</span>
                      </div>
                      <p className="text-slate-300 text-xs leading-relaxed">
                        {currentStory.hillerSystemRemedy}
                      </p>
                    </div>

                    {onNavigateToTab && (
                      <button
                        onClick={() => onNavigateToTab(currentStory.id === 'story-post-marner-pivot' ? 'marner' : 'forensics')}
                        className="w-full mt-2 py-2 text-center text-xs font-semibold text-blue-400 bg-blue-950/40 hover:bg-blue-900/40 border border-blue-800/60 rounded-md transition-colors cursor-pointer"
                      >
                        {currentStory.id === 'story-post-marner-pivot'
                          ? 'View Marner & Knies Hub →'
                          : 'Inspect All Forensic Metrics →'}
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* Grid Mode: All 5 Cards side by side */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STORY_CARDS.map((story, idx) => (
            <div
              key={story.id}
              className="p-6 rounded-xl border border-slate-800 bg-slate-900/80 hover:border-slate-700 transition-all flex flex-col justify-between space-y-5 shadow-lg group"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-mono-numbers font-bold text-blue-400">{story.chapter}</span>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      story.status === 'Critical Flaw'
                        ? 'bg-rose-950/80 text-rose-300 border border-rose-800/80'
                        : story.status === 'Structural Drag'
                        ? 'bg-amber-950/80 text-amber-300 border border-amber-800/80'
                        : 'bg-emerald-950/80 text-emerald-300 border border-emerald-800/80'
                    }`}
                  >
                    {story.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors uppercase font-athletic">
                  {story.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-snug">
                  {story.tagline}
                </p>

                {/* Primary Metric Mini-Card */}
                <div className="mt-4 p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-2">
                  <div className="text-[11px] text-slate-400">{story.primaryStat.label}</div>
                  <div className="flex items-center justify-between font-mono-numbers">
                    <div>
                      <span className="text-[10px] text-slate-500 block">Regular</span>
                      <span className="text-emerald-400 font-bold text-sm">{story.primaryStat.regularSeason}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-slate-500 block">Closeout</span>
                      <span className="text-rose-400 font-bold text-sm">{story.primaryStat.elimination}</span>
                    </div>
                  </div>
                  <div className="text-center pt-1 border-t border-slate-800/80 text-[11px] font-mono-numbers font-bold text-rose-400">
                    {story.primaryStat.delta}
                  </div>
                </div>

                <p className="text-xs text-slate-300 mt-4 leading-relaxed line-clamp-3">
                  {story.headlineTakeaway}
                </p>
              </div>

              <button
                onClick={() => {
                  setActiveStoryIndex(idx);
                  setViewMode('stepper');
                }}
                className="w-full py-2 text-xs font-semibold text-center text-blue-400 hover:text-white bg-slate-800/80 hover:bg-blue-600 rounded-md transition-all cursor-pointer"
              >
                Inspect Chapter Details →
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
