# Contributing to Ortho

Thanks for wanting to help. We need it.

---

## Found a Bug?

[Open an issue](https://github.com/ortho-ai/ortho/issues) with:
- What you were doing
- What actually happened
- What should have happened
- Your Python version and OS
- How to reproduce it

---

## Want to Add a Feature?

[Start a discussion first](https://github.com/ortho-ai/ortho/discussions). We might already be working on it, or we can talk through the approach before you invest time.

---

## Docs Need Work?

Typos, unclear examples, missing sections—just send a PR. Docs improvements are always welcome.

---

## Ready to Code?

Awesome. Here's how:

---

## Getting Started

### 1. Fork & Clone

```bash
git clone https://github.com/YOUR-USERNAME/ortho.git
cd ortho
```

### 2. Set Up Environment

```bash
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -e ".[dev]"
```

### 3. Make Your Changes

```bash
git checkout -b my-feature
# Make your changes
# Test thoroughly
git add .
git commit -m "Describe your change"
```

### 4. Run Tests & Lint

```bash
pytest              # Run tests
ruff check .        # Lint
mypy .              # Type check
```

All must pass before submitting PR.

### 5. Push & Create PR

```bash
git push origin my-feature
# Go to GitHub and create a pull request
```

---

## Code Style

Nothing crazy. Just:
- Type hints on functions (helps everyone)
- Docstrings on public functions
- Keep lines under 100 chars (readability)
- Clear variable names (no cryptic `q` or `x`)

```python
def search_symbols(query: str, limit: int = 10) -> List[Symbol]:
    """Search for symbols matching the query."""
    # That's it. Simple. Clear.
```

---

## Tests

- Write tests for new code (pytest format)
- Aim for >85% coverage
- Run `pytest` before you commit

```python
def test_search_finds_functions():
    results = search("authenticate", limit=5)
    assert len(results) > 0
    assert any(r.type == "function" for r in results)
```

---

## Commit Messages

Keep them descriptive. Use a prefix:

- `[feat]` — New feature
- `[fix]` — Bug fix
- `[docs]` — Documentation
- `[test]` — Test additions
- `[refactor]` — Code cleanup (no behavior change)

Example:
```
[fix] Handle relative imports in call graph

Previously missed "from . import x" statements.
Now correctly resolves within package boundaries.

Fixes #123
```

---

## Making a PR

1. Fork it, create a branch for your feature
2. Make the change
3. Run tests: `pytest`
4. Run lint: `ruff check .`
5. Push and open a PR

That's it. Keep PRs focused (one feature, one fix per PR).

---

## Running Tests Locally

```bash
pytest              # All tests
pytest -v          # Verbose
pytest --cov=src   # With coverage report
```

If something breaks, use:
```bash
pytest -s -v tests/test_file.py::test_name   # See print statements
pytest --pdb tests/test_file.py::test_name   # Drop into debugger
```

---

## What Needs Work

**Code:**
- Multi-language support (TypeScript, Go, Java)
- Semantic search (embedding-based instead of keyword)
- Better performance on huge repos
- Python API (not just CLI)

**Docs:**
- More how-to guides
- Real-world examples
- Better error messages

**Testing:**
- Edge case coverage
- Integration tests

**Infrastructure:**
- Docker support
- CI/CD improvements

---

## Before You Code

Have a big idea? [Start a discussion](https://github.com/ortho-ai/ortho/discussions) first. We might have thoughts, or you might save yourself some work.

---

## Questions?

- Stuck? Comment on the issue.
- Need guidance? Reach out before investing hours.

---

By contributing, your code is Apache 2.0 licensed (same as Ortho).

---

Thanks for helping. Seriously.
