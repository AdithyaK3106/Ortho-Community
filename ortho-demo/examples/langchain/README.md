# LangChain

Ortho run against [langchain-ai/langchain](https://github.com/langchain-ai/langchain) — a deliberately hard case: a large monorepo with mixed structure.

## Architecture

```
$ ortho analyze --architecture
Style:       layered        (confidence 0.50)
Runner-up:   microservices  (confidence 0.45)
Subsystems:  38             (avg 66.6 files, cohesion 0.88)
```

The low, closely-competing confidence scores are the honest answer: LangChain's monorepo blends a layered core with independently-packaged integrations that score like microservices. Ortho reports the competition instead of overstating certainty.

## What this demonstrates

- Confidence scores are calibrated — ambiguous codebases produce ambiguous scores
- 38 subsystems with 0.88 cohesion on a 2,500+ file monorepo, deterministic across runs
- Evidence over assertion: every style score is reported so you can judge the call yourself
