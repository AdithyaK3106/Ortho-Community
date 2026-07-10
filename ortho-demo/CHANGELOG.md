# Changelog

## 0.1.0 — Initial Release

### Repository Intelligence
- Python repository indexing: symbols, imports, call graph
- Incremental re-indexing after changes

### Architecture Intelligence
- Architecture detection across five styles: layered, hexagonal, MVC, microservices, flat
- Confidence scoring — reports `UNKNOWN` below threshold rather than guessing
- Subsystem detection with cohesion scoring
- Circular dependency detection

### Context Assembly
- Full-text search over the indexed repository
- Change impact analysis (blast radius per file)
- Context packages ready for Claude or any model

### CLI
- `ortho init` — set up a repository
- `ortho scan` — index the codebase
- `ortho analyze` — architecture, impact, cycles, debt
- `ortho context` — retrieve relevant code for a question
- `ortho status` — index state

### Platform
- Python 3.9+ on Windows, macOS, Linux
- Local-first: single SQLite file, no cloud, no telemetry
- Validated against real repositories (FastAPI, LangChain — see [examples/](examples/))

---

Planned work lives in the [roadmap](ROADMAP.md). Found a bug? [Open an issue](https://github.com/ortho-ai/ortho/issues).
