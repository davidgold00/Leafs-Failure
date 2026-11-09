import React, { useState } from 'react';
import { Header } from './components/Header';
import { OverviewHero } from './components/OverviewHero';
import { LiveIntelBanner } from './components/LiveIntelBanner';
import { StoryCardDeck } from './components/StoryCardDeck';
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
  const [analystInitialQuery, setAnalystInitialQuery] = useState<string>('');

  const openAnalystWithQuery = (prompt?: string) => {
    if (prompt) {
      setAnalystInitialQuery(prompt);
    } else {
      setAnalystInitialQuery('');
    }
    setIsAnalystOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Top Bar Contract */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenAnalyst={() => openAnalystWithQuery()}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {activeTab === 'overview' && (
          <div className="space-y-12">
            <OverviewHero
              onNavigate={(tab) => {
                setActiveTab(tab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenAnalyst={() => openAnalystWithQuery()}
            />
            <LiveIntelBanner
              onTriggerAnalyst={(query) => openAnalystWithQuery(query)}
            />
            <StoryCardDeck onNavigateToTab={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} />
            <MatthewsBreakdown />
          </div>
        )}

        {activeTab === 'stories' && (
          <div className="space-y-12">
            <StoryCardDeck onNavigateToTab={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} />
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
              onClick={() => openAnalystWithQuery()}
              className="text-blue-400 hover:text-blue-300 font-medium transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>Ask Real-Time AI Analyst</span>
            </button>
          </div>
        </div>
      </footer>

      {/* AI Analyst Slide-over Drawer */}
      <AiAnalystDrawer
        isOpen={isAnalystOpen}
        onClose={() => setIsAnalystOpen(false)}
        initialQuery={analystInitialQuery}
      />
    </div>
  );
}
