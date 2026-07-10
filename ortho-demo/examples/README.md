# Examples

Ortho run against real public repositories. Every number here comes from actual Ortho output — nothing is mocked.

| Repository | What it demonstrates |
|------------|---------------------|
| [FastAPI](fastapi/) | Layered architecture detected in a large modern framework — 978 files, 21 subsystems |
| [LangChain](langchain/) | Architecture analysis of a sprawling monorepo — 38 subsystems, 0.88 cohesion |

## Reproduce

```bash
git clone https://github.com/tiangolo/fastapi
cd fastapi
ortho init
ortho scan
ortho analyze --architecture
```

Ortho's analysis is deterministic: the same repository at the same commit produces the same result.
