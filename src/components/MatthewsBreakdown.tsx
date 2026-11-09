import React from 'react';
import matthewsImg from '../assets/images/real_matthews_sweat.jpg';

export const MatthewsBreakdown: React.FC = () => {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
          <span>Individual Player Diagnostic</span>
          <span aria-hidden="true">·</span>
          <span>Captain & Franchise Cornerstone</span>
        </div>
        <h2 className="text-3xl font-extrabold text-white tracking-tight font-athletic uppercase">
          The Auston Matthews Paradox: Generational Goalscorer vs Playoff Wall
        </h2>
        <p className="mt-2 text-sm text-slate-300 max-w-3xl leading-relaxed">
          Auston Matthews is arguably the greatest regular-season goalscorer of his generation, averaging 0.65 goals per game with multiple Rocket Richard Trophies. Yet in playoff elimination games, his scoring rate drops by two-thirds. What causes this dropoff?
        </p>
      </div>

      {/* Hero Split Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 rounded-xl bg-slate-900/80 border border-slate-800 overflow-hidden shadow-xl items-stretch">
        <div className="lg:col-span-5 relative min-h-[320px]">
          <img
            src={matthewsImg}
            alt="Auston Matthews in authentic Toronto Maple Leafs uniform (Real Photo)"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-900/90" />
          <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-300/80 bg-slate-950/80 p-2.5 rounded border border-slate-800">
            <span className="font-semibold text-white">Auston Matthews:</span> Real NHL photo by Azadeh Kashani (Wikimedia Commons). 3 goals in 14 elimination games.
          </div>
        </div>

        <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div>
            <div className="text-xs font-mono-numbers text-blue-400 font-semibold uppercase tracking-wider">
              Playoff Scoring Split Curve
            </div>
            <h3 className="text-2xl font-black text-white font-athletic uppercase mt-1">
              Where The Goals Disappear
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
              In 82-game regular seasons, Matthews dominates the slot. His quick release and hand-eye coordination turn loose pucks into instant goals. But in playoff Games 5, 6, and 7, opposing defenses assign premier two-way shadow centers (Phillip Danault, Anthony Cirelli, Aleksander Barkov, Patrice Bergeron) who engage in non-stop physical contact before Matthews can set his feet.
            </p>
          </div>

          {/* 3-Tier Stats Comparison Strip */}
          <div className="grid grid-cols-3 gap-3 font-mono-numbers text-xs">
            <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800">
              <div className="text-slate-400 font-sans text-[11px]">Regular Season</div>
              <div className="text-xl font-black text-emerald-400 mt-1">0.65</div>
              <div className="text-[11px] text-slate-400">Goals / GP</div>
              <div className="text-[10px] text-slate-500 mt-1">16.2% SH%</div>
            </div>

            <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800">
              <div className="text-slate-400 font-sans text-[11px]">Playoffs Total</div>
              <div className="text-xl font-black text-amber-400 mt-1">0.41</div>
              <div className="text-[11px] text-slate-400">Goals / GP</div>
              <div className="text-[10px] text-slate-500 mt-1">10.4% SH%</div>
            </div>

            <div className="p-3 rounded-lg bg-slate-950/80 border border-rose-900/60 bg-rose-950/20">
              <div className="text-rose-300 font-sans text-[11px]">Elimination G5-7</div>
              <div className="text-xl font-black text-rose-400 mt-1">0.21</div>
              <div className="text-[11px] text-slate-400">Goals / GP</div>
              <div className="text-[10px] text-rose-400 mt-1">6.1% SH% (2G / 12GP)</div>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Core Factors Behind the Dropoff */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
          <div className="text-xs font-bold text-blue-400 uppercase tracking-wider">01. Cross-Checking & Crease Denial</div>
          <h4 className="font-bold text-white text-sm">Inner Slot Relocation</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            In playoff hockey, referees pocket their whistles on net-front cross-checking. Opponents (Chara, Carlo, Weber, Chiarot, Ekblad) pin Matthews outside the crease, increasing his average shot distance from 21.2 feet to 28.6 feet.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
          <div className="text-xs font-bold text-blue-400 uppercase tracking-wider">02. Predictable PP Feeds</div>
          <h4 className="font-bold text-white text-sm">The Telegraphed One-Timer</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Opposing penalty-kill units commit a high winger solely to Matthews' flank circle. Because the Leafs lack a secondary blue-line blast, penalty killers cheat toward Matthews' shooting lane without fearing backdoor punishment.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
          <div className="text-xs font-bold text-blue-400 uppercase tracking-wider">03. Physical Attrition & Ailments</div>
          <h4 className="font-bold text-white text-sm">Late-Series Health Volatility</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Matthews' physical workload is enormous. In multiple crucial playoff stretches—wrist surgery recovery in 2021, severe illness and upper-body injury in 2024 (missing Games 5 and 6 vs Boston)—he has been compromised when the stakes were highest.
          </p>
        </div>
      </div>
    </div>
  );
};
