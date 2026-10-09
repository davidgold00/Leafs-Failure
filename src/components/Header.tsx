import React from 'react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenAnalyst: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onOpenAnalyst }) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 px-4 sm:px-6 lg:px-8 py-3.5 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-2.5 h-2.5 bg-blue-500 rounded-none transform rotate-45" aria-hidden="true" />
          <button
            onClick={() => setActiveTab('overview')}
            className="text-base sm:text-lg font-bold tracking-tight text-white uppercase font-athletic text-left hover:text-blue-400 transition-colors cursor-pointer"
          >
            Leafs Playoff Autopsy
          </button>
        </div>

        {/* Zone 2: 4-5 clean single-line nav links */}
        <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium text-slate-400">
          <button
            onClick={() => setActiveTab('overview')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-white cursor-pointer ${
              activeTab === 'overview' ? 'text-blue-400 border-b-2 border-blue-400 py-1 font-semibold' : 'py-1'
            }`}
          >
            Executive Summary
          </button>
          <button
            onClick={() => setActiveTab('forensics')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-white cursor-pointer ${
              activeTab === 'forensics' ? 'text-blue-400 border-b-2 border-blue-400 py-1 font-semibold' : 'py-1'
            }`}
          >
            Forensic Metrics
          </button>
          <button
            onClick={() => setActiveTab('timeline')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-white cursor-pointer ${
              activeTab === 'timeline' ? 'text-blue-400 border-b-2 border-blue-400 py-1 font-semibold' : 'py-1'
            }`}
          >
            Series Timeline
          </button>
          <button
            onClick={() => setActiveTab('contenders')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-white cursor-pointer ${
              activeTab === 'contenders' ? 'text-blue-400 border-b-2 border-blue-400 py-1 font-semibold' : 'py-1'
            }`}
          >
            Contenders Gap
          </button>
          <button
            onClick={() => setActiveTab('marner')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-amber-400 cursor-pointer ${
              activeTab === 'marner' ? 'text-amber-400 border-b-2 border-amber-400 py-1 font-semibold' : 'py-1 text-amber-200/90'
            }`}
          >
            The Marner Crossroads
          </button>
          <button
            onClick={() => setActiveTab('prediction')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-white cursor-pointer ${
              activeTab === 'prediction' ? 'text-blue-400 border-b-2 border-blue-400 py-1 font-semibold' : 'py-1'
            }`}
          >
            Prediction Model
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenAnalyst}
            className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-sm hover:shadow-blue-500/20"
          >
            Ask AI Analyst
          </button>
        </div>
      </div>
    </header>
  );
};
