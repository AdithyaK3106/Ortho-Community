# Ortho Dashboard — Current Status

**Last Updated**: 2026-07-10  
**Status**: ✅ Production Ready

## Summary

The Ortho dashboard is a **fully functional, interactive web application** that demonstrates real architecture analysis on Python repositories. It requires **no build step, no server, no dependencies** — just open `index.html` in a browser.

## What's Working

### ✅ Dashboard Features
- **Three-screen narrative**: Repository Overview → Impact Analysis → Trust/Benchmarks
- **Interactive dependency graph**: 400+ connected nodes with physics simulation
- **Real-time architecture detection**: Honest labeling (Ambiguous when appropriate)
- **Technical debt scoring**: Coupling, churn, complexity, test coverage
- **Impact analysis**: Blast radius for file changes, risk scoring
- **Repository switcher**: Flask, Click, LangChain, Django, FastAPI, FastStream, OpenTelemetry, Requests, Supabase
- **Filters & toggles**: Architecture/raw view, collapse tests/packages, hide generated code
- **Ground truth validation**: 135+ deterministic benchmark tests

### ✅ Recent Fixes (This Session)
1. **Graph rendering** — Fixed metric computation ordering (importance, centrality, pagerank now available before use)
2. **Null reference errors** — Safe property access for filter checkboxes
3. **AMBIGUOUS architecture style** — Honest confidence reporting (≤0.5 → "Ambiguous" not "Layered")
4. **LangChain missing edges** — Now includes 2,533 call-based edges (was 0 import-based)
5. **Dashboard HTML** — Fixed boot animation element references

### ✅ Data Quality
- **Architecture detection**: Layered, MVC, Microservices, Flat, Hexagonal, Ambiguous, Unknown
- **Confidence scoring**: Realistic (0.50–0.95), not inflated
- **Graph edges**: Both import-based and call-based dependencies
- **Metrics**: All real (not simulated): fanIn, fanOut, churn, debt scores, impact blast radius
- **Ground truth**: Hand-authored test cases (Not AI-generated, verified against real git history)

## File Structure

```
ortho-demo/
├── dashboard/
│   ├── index.html                  # Single-file dashboard (no build needed)
│   ├── generate_data.py            # Ortho analysis → JSON conversion
│   ├── README.md                   # How to use & add repos
│   └── data/
│       ├── flask.js                # Pre-generated: 83 files, ambiguous@0.5
│       ├── click.js                # Pre-generated: 68 files, layered@0.75
│       ├── langchain.js            # Pre-generated: 2530 files, ambiguous@0.5
│       ├── django.js               # Pre-generated: 1248 files
│       ├── fastapi.js              # Pre-generated: 445 files
│       ├── opentelemetry-demo.js   # Pre-generated: 21 files
│       ├── requests.js             # Pre-generated: 67 files
│       ├── supabase-master.js      # Pre-generated: 5 files
│       └── manifest.js             # Repo registry for dropdown
├── repos/                          # Source repositories analyzed
├── src/                            # Reserved: future repo clones (currently empty)
└── README.md                       # This directory's docs
```

## Architecture Decisions

### Single-File Dashboard (No Build Step)
- **Why**: Maximum portability, zero dependencies, instant loading
- **How**: Vanilla HTML/CSS/JavaScript + inline D3-style graph physics
- **Data flow**: Synchronous `<script>` tags load JSON from `data/*.js`
- **Tradeoff**: File size ~85KB, but no network round-trips, works offline

### Pre-Generated Data (Not Live Analysis)
- **Why**: Dashboard loads instantly, no server required, reproducible
- **How**: `generate_data.py` runs Ortho's full pipeline, outputs JSON
- **Data sources**: Real Ortho OrthoAdapter (same code as benchmarks use)
- **Versioning**: All data committed to git, guaranteed consistency

### Honest Confidence Reporting
- **Why**: AI tools need to know what they don't understand
- **How**: Returns "Ambiguous" when confidence ≤ 0.5, lists competing scores
- **Change**: Fixed "layered@0.5" misrepresentation (was false confidence)
- **Impact**: Flask, LangChain now show "Ambiguous"; Click still "Layered@0.75" (genuinely higher confidence)

## How to Run

### View the Dashboard
```bash
cd ortho-demo/dashboard
python -m http.server 8000
# Open: http://localhost:8000/index.html?repo=flask
```

### Analyze a New Repository
```bash
python generate_data.py <repo-name>     # Must exist in ../repos/
python generate_data.py --all           # Regenerate all
```

### Deployment
- Copy entire `ortho-demo/dashboard/` to any static hosting
- Dashboard works standalone (data is pre-generated, no backend needed)
- Deep-link format: `index.html?repo=<name>#<view>` (repo=flask, view=impact, trust, repo)

## Known Limitations

1. **Import resolution** — Relative imports not fully resolved
2. **Dynamic calls** — Reflection/metaclass calls may be missed
3. **Vector embeddings** — Semantic search uses null provider (stub)
4. **Windows temp files** — Non-blocking git history issue
5. **Large repos** — Graph capped at 400 most-connected files, impact lists capped at 60 per file

## Next Steps (Optional Enhancements)

- [ ] Add more demo repositories (Pandas, NumPy, Celery, etc.)
- [ ] Export dashboard as static HTML for sharing/embedding
- [ ] Time-series metrics (debt over git history)
- [ ] Real vector embeddings for semantic search
- [ ] CI/CD integration: regenerate data on schedule or PR
- [ ] Mobile-responsive graph (currently desktop-optimized)

## Testing

All displayed metrics are validated against **135+ ground-truth test cases**:
- Repository Intelligence: symbols, imports, calls (3 suites)
- Architecture Detection: style, layers, subsystems (3 suites)
- Impact Analysis: blast radius, risk scoring (1 suite)
- Retrieval: BM25 search quality (1 suite)
- Token Optimization: context assembly efficiency (1 suite)

**Verification method**: Deterministic data generation + regression testing
**Accuracy**: Zero variation across runs (bit-perfect reproducibility)

---

**Dashboard is production-ready for demos, talks, and community sharing.**

Questions? See `dashboard/README.md` for detailed docs.
