# FastAPI

Ortho run against [tiangolo/fastapi](https://github.com/tiangolo/fastapi).

## Scan

```
$ ortho scan
Indexed 978 files — symbols, imports, call graph
```

## Architecture

```
$ ortho analyze --architecture
Style:       layered   (confidence 0.75)
Subsystems:  21        (avg 53.4 files, no singletons)
```

Ortho reports all five style scores, not just the winner. FastAPI scores highest as **layered** — routing, dependency injection, and response handling form clear horizontal layers with dependencies flowing downward.

Subsystem detection groups the repository into 21 cohesive units at the package level (average 53.4 files each, zero single-file clusters), built from a multi-signal graph: imports, calls, and package hierarchy.

## What this demonstrates

- Architecture detection is evidence-driven — when confidence is below threshold, Ortho reports `UNKNOWN` instead of guessing
- Subsystems match how maintainers actually think about the codebase, not one-file-per-cluster noise
- Results are deterministic across runs
