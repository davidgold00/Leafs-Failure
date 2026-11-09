# Leaf Playoff Autopsy: Interactive Story Cards & Trend Visualization

An upgraded, narrative-driven UI transformation designed to make the Toronto Maple Leafs' playoff analytics intuitive, compelling, and effortless to digest through interactive visual story cards and hoverable trend charts.

## User Review & Critical Decisions

> [!IMPORTANT]
> The following user preferences from Phase 1 are incorporated into this blueprint:
> - **Visual Storytelling Format**: Interactive story cards with key visual metrics, breaking complex hockey analytics into digestible, narrative-driven takeaways.
> - **Statistical Presentation**: Interactive charts with hoverable trend breakdowns, showing exact regular season vs. playoff variances dynamically.
> - **Date & Sourced Data Accuracy**: 100% up to date as of **October 12, 2026** (Head coach Jim Hiller, Mitch Marner in Vegas on $12M AAV, Matthew Knies traded for Kirill Marchenko on Sept 28, 2026, and two series wins vs. Tampa 2023 and Ottawa 2025).

---

## 1. Overview & Core Concept

- **What It Does**: Transforms dense statistical data into an intuitive editorial analytics experience. Users can navigate a guided storyline across key forensic themes (The Rush Mirage, Special Teams Freeze, Goaltending Dynamics, Slot Shrinkage, and the Post-Marner Trajectory) using interactive story cards and interactive visual charts with instant hover tooltips.
- **Target Audience**: Hockey fans, sports analysts, and curious observers who want to understand *why* elite regular-season teams struggle in the postseason without getting lost in overwhelming spreadsheets.
- **Key Value**: Delivers the analytical conclusion in seconds through clear visual metrics, while rewarding curious users with rich hoverable breakdown layers.

---

## 2. User Experience & Visual Design

### Key User Flows
1. **Executive Story Deck**: A top-level story carousel/grid where users can toggle between 5 core takeaway chapters (e.g., "The Rush Mirage", "The Power Play Flatline", "The Screening Deficit", "The Closeout Wall", and "The Post-Marner Pivot"). Each card highlights a single stark narrative stat with contextual explanations.
2. **Interactive Trend Visualizer**: Interactive SVG trend charts comparing Regular Season, Playoffs, and Elimination Games across key metrics (5v5 Shooting %, Power Play %, Screen Rate %, D-Zone Giveaways). Hovering over any data point reveals a dynamic breakdown card showing game sample size, tactical cause, and league benchmark.
3. **Smooth Story Navigation**: Seamless tab transitions, sticky progress breadcrumbs, and simplified executive takeaway banners that distill each page into 3 clear bulleted insights before diving into deep data.
4. **Verified Roster & Transaction Hub (Oct 12, 2026)**: Sourced, high-visibility badges showcasing the Jim Hiller coaching system, the Marner-to-Vegas cap reallocation, and the Knies-for-Marchenko trade.

### Visual Identity & Theme
- **Canvas & Tone**: Deep ice slate (`#070d17` / `#0f172a`) with cool hockey blue accents (`#38bdf8`, `#60a5fa`), alert crimson (`#ef4444`) for postseason collapses, and emerald (`#10b981`) for championship benchmarks.
- **Typography Pairing**: Athletic Condensed (`Barlow Condensed`) for punchy titles and headlines, `Plus Jakarta Sans` for clean body readability, and `JetBrains Mono` (`tabular-nums`) for jitter-free data telemetry.
- **Micro-Interactions**: Smooth 150ms settling curves on card hover, interactive slider responsiveness in the Cap Reallocation and Curse-Breaker simulators, and crisp tooltip positioning.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Story Cards over Dense Raw Tables**
  - *Chosen Approach*: Elevate the primary narrative through visual "Story Cards" that pair a single bold comparison (e.g., Regular Season 25.4% PP vs Elimination 9.7% PP) with an expandable analytical autopsy.
  - *Why*: Reduces cognitive load, allowing readers to grasp the story within 3 seconds while retaining access to granular data.
  - *Alternatives Considered*: Traditional large 10-column tables, which caused analytical fatigue.

- **Decision 2: Custom Interactive SVG Charts with Real Hover Tooltips**
  - *Chosen Approach*: Build lightweight, responsive SVG visual bar & trend charts with zero external library bloat, featuring live pointer tracking for hover tooltips.
  - *Why*: Guarantees instant rendering, zero hydration delay, perfect dark-mode contrast, and exact pixel alignment with the design system.

- **Decision 3: Preserving 100% Sourced Transaction Accuracy (Oct 12, 2026)**
  - *Chosen Approach*: Ground all roster, coaching, and contract references in verified real-world events: Head Coach Jim Hiller (hired June 2026), Mitch Marner (Vegas sign-and-trade, July 2025), and Matthew Knies traded for Kirill Marchenko (September 2026).
  - *Why*: Ensures credibility and aligns with the user's explicit mandate for current, sourced information.

---

## 4. Technical Architecture & System Flow

```
┌─────────────────────────────────────────────────────────────┐
│                      App.tsx Header                         │
│   [Brand: Leafs Playoff Autopsy] · [Oct 12, 2026 Badge]     │
│   Navigation: Overview | Story Cards | Timeline | Marner    │
└──────────────────────────────┬──────────────────────────────┘
                               │
       ┌───────────────────────┼───────────────────────┐
       ▼                       ▼                       ▼
┌──────────────┐       ┌──────────────┐       ┌─────────────────┐
│ StoryDeck    │       │ TrendChart   │       │ Marner & Knies  │
│ 5 Narrative  │◄─────►│ Interactive  │◄─────►│ Sourced 2026    │
│ Visual Cards │       │ SVG Tooltips │       │ Cap & Trade Hub │
└──────────────┘       └──────────────┘       └─────────────────┘
       ▲                       ▲                       ▲
       └───────────────────────┴───────────────────────┘
                               │
┌──────────────────────────────┴──────────────────────────────┐
│                    Underlying Data Layer                    │
│   playoffSeriesData.ts (11 Series · 2 Wins · 2-12 Closeout) │
│   advancedMetricsData.ts (Rush vs Cycle, Goaltending GSAx)  │
│   marnerAnalysisData.ts (Vegas Contract · Marchenko Trade)  │
└─────────────────────────────────────────────────────────────┘
```

### Planned Component Upgrades
- `src/components/StoryCardDeck.tsx`: New component providing a smooth, interactive 5-part narrative journey through the core reasons for failure.
- `src/components/InteractiveTrendChart.tsx`: New interactive SVG visual chart component displaying hoverable metrics, variance delta, and benchmark comparisons.
- `src/components/ForensicMetrics.tsx`: Refactored to integrate the Interactive Trend Chart and smooth Story Cards directly into the flow.
- `src/components/OverviewHero.tsx`: Enhanced with a streamlined executive summary ribbon and visual metric cards.
- `src/components/MarnerCrossroadsPage.tsx`: Enhanced with clear visual trade impact meters (Knies vs Marchenko, Marner in Vegas) and visual cap flow diagrams.
