# Anthropic Claude Showcase

**What this proves:** Claude API integration with explicit tool use, prompt
caching, streaming responses, and typed output boundaries. Patterns reflect
Anthropic's published best practices for reliable agent workflows.

**Portfolio:** [cyber-lazer-mermicorn](https://github.com/cyber-lazer-mermicorn) · Cherry Shanaley

---

## Key patterns

| Pattern | What it proves |
|---|---|
| Tool use | Typed tool definitions, safe invocation, result handling |
| Prompt caching | Cache-control headers on large static context blocks |
| Streaming | `stream()` with typed event handling, no dropped chunks |
| Output typing | Zod-validated structured content blocks |
| Multi-turn | Stateful conversation with explicit message history management |

## Run locally

```bash
npm install
cp .env.example .env   # add ANTHROPIC_API_KEY
npm run demo
npm test
```

## Evidence

- Tool invocations produce structured, typed results — not just text
- Prompt caching patterns include cache hit/miss logging
- Streaming demo shows chunk-by-chunk output with error recovery

## Honest scope

Showcase-grade: Claude-specific patterns, correct and typed. No production
authentication, multi-tenant isolation, or cost tracking included.
