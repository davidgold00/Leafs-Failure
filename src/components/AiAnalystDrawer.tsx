import React, { useState } from 'react';
import { askPlayoffAnalyst, PRESET_ANALYST_QUERIES } from '../services/geminiAnalyst';

interface AiAnalystDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AiAnalystDrawer: React.FC<AiAnalystDrawerProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [conversation, setConversation] = useState<Array<{ q: string; a: string }>>([
    {
      q: 'Why does Toronto struggle in closeout games despite 100+ point regular seasons?',
      a: `**Executive Diagnostic Summary (Updated October 9, 2026):**

While Toronto captured two hard-fought series victories in the Matthews era (overcoming Tampa Bay in 2023 and the Ottawa Senators in 2025), their broader playoff ceiling is governed by four quantifiable dynamics:

1. **The Rush Trap:** In the regular season, the Leafs rank #2 in NHL rush scoring chances (6.8/60) as teams give up neutral-zone space. In May, 1-2-2 trap defenses force dump-and-chase hockey. Toronto ranks 15th out of 16 playoff teams in tip-ins and deflections (0.18/60).
2. **Net-Front Blindness & Post-Knies Deficit:** Opposing goaltenders achieve a .938 SV% in elimination games against Toronto because only 11.2% of shots are screened (vs 26.1% for Florida). With the recent autumn 2026 trade of Matthew Knies, Toronto lost their top crease screener (31.4% of playoff deflections).
3. **Power Play Paralysis:** The power play drops to ~10% in elimination contests due to a predictable perimeter umbrella that lacks point-shot disruption.
4. **Cap Cannibalism:** Dedicating ~49% of cap space to four forwards has continually forced management to shed homegrown young talent like Knies to stay under the ceiling.`,
    },
  ]);

  if (!isOpen) return null;

  const handleAsk = async (promptText: string) => {
    if (!promptText.trim()) return;
    setLoading(true);
    const question = promptText;
    setQuery('');

    try {
      const answer = await askPlayoffAnalyst(question);
      setConversation(prev => [...prev, { q: question, a: answer }]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end">
      <div className="w-full max-w-2xl bg-slate-950 border-l border-slate-800 h-full flex flex-col shadow-2xl">
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
              <span>Interactive Analytics Assistant</span>
              <span aria-hidden="true">·</span>
              <span>Gemini Grounded Engine</span>
            </div>
            <h3 className="text-xl font-bold text-white font-athletic uppercase mt-0.5">
              Ask The Playoff Analyst
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-900 transition-colors cursor-pointer"
            aria-label="Close Drawer"
          >
            ✕
          </button>
        </div>

        {/* Quick Presets Strip */}
        <div className="p-3 border-b border-slate-800/80 bg-slate-900/40 overflow-x-auto flex gap-2">
          {PRESET_ANALYST_QUERIES.map((preset) => (
            <button
              key={preset.id}
              onClick={() => handleAsk(preset.label)}
              disabled={loading}
              className="text-[11px] font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded px-2.5 py-1.5 whitespace-nowrap transition-colors cursor-pointer disabled:opacity-50"
            >
              {preset.label}
            </button>
          ))}
        </div>

        {/* Conversation Stream */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 scrollbar-thin">
          {conversation.map((msg, idx) => (
            <div key={idx} className="space-y-3">
              {/* Question */}
              <div className="flex justify-end">
                <div className="max-w-[85%] bg-blue-600 text-white text-xs sm:text-sm p-3 rounded-lg rounded-tr-none font-medium shadow-sm">
                  {msg.q}
                </div>
              </div>

              {/* Answer */}
              <div className="flex justify-start">
                <div className="max-w-[95%] bg-slate-900 border border-slate-800 text-slate-200 text-xs sm:text-sm p-4 rounded-lg rounded-tl-none space-y-2 leading-relaxed">
                  <div className="whitespace-pre-wrap">{msg.a}</div>
                </div>
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="bg-slate-900 border border-slate-800 text-slate-400 text-xs p-3 rounded-lg flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                Analyzing playoff tracking data and historical models...
              </div>
            </div>
          )}
        </div>

        {/* Query Input Bar */}
        <div className="p-4 border-t border-slate-800 bg-slate-950">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAsk(query);
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask anything about Leafs playoff xG, Marner, Matthews, or Berube..."
              className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !query.trim()}
              className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 disabled:opacity-50 rounded-lg transition-colors cursor-pointer"
            >
              Analyze
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
