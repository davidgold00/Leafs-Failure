import React, { useState } from 'react';
import { Header } from './components/Header';
import { OverviewHero } from './components/OverviewHero';
import { ForensicMetrics } from './components/ForensicMetrics';
import { PlayoffTimeline } from './components/PlayoffTimeline';
import { MatthewsBreakdown } from './components/MatthewsBreakdown';
import { ContenderComparison } from './components/ContenderComparison';
import { MarnerCrossroadsPage } from './components/MarnerCrossroadsPage';
import { PredictionOutlook } from './components/PredictionOutlook';
import { AiAnalystDrawer } from './components/AiAnalystDrawer';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [isAnalystOpen, setIsAnalystOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Top Bar Contract */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenAnalyst={() => setIsAnalystOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {activeTab === 'overview' && (
          <div className="space-y-16">
            <OverviewHero
              onNavigate={(tab) => {
                setActiveTab(tab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenAnalyst={() => setIsAnalystOpen(true)}
            />
            <MatthewsBreakdown />
          </div>
        )}

        {activeTab === 'forensics' && (
          <div className="space-y-12">
            <ForensicMetrics />
          </div>
        )}

        {activeTab === 'timeline' && (
          <div className="space-y-12">
            <PlayoffTimeline />
          </div>
        )}

        {activeTab === 'contenders' && (
          <div className="space-y-12">
            <ContenderComparison />
          </div>
        )}

        {activeTab === 'marner' && (
          <MarnerCrossroadsPage />
        )}

        {activeTab === 'prediction' && (
          <div className="space-y-12">
            <PredictionOutlook />
          </div>
        )}
      </main>

      {/* Editorial Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/80 px-4 sm:px-6 lg:px-8 py-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-400 uppercase font-athletic tracking-wider">
              Leafs Playoff Autopsy
            </span>
            <span aria-hidden="true">·</span>
            <span>Auston Matthews Era Analytics (2016–Present)</span>
          </div>

          <div className="flex items-center gap-6">
            <span>Data Sources: Natural Stat Trick · Evolving-Hockey · Moneypuck</span>
            <button
              onClick={() => setIsAnalystOpen(true)}
              className="text-blue-400 hover:text-blue-300 font-medium transition-colors cursor-pointer"
            >
              Ask AI Analyst
            </button>
          </div>
        </div>
      </footer>

      {/* AI Analyst Slide-over Drawer */}
      <AiAnalystDrawer
        isOpen={isAnalystOpen}
        onClose={() => setIsAnalystOpen(false)}
      />
    </div>
  );
}
