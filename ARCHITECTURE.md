# Architecture

## Overview
Anthropic Claude Showcase demonstrates production patterns: extended thinking, multi-turn tool use, prompt caching, and computer use.

## Layers

| Layer | Path | Responsibility |
|---|---|---|
| Anthropic Client | `lib/anthropic.ts` | Singleton client, retry config |
| Tool Definitions | `lib/tools/` | Zod-typed tool schemas |
| Retry Logic | `lib/retry.ts` | Exponential backoff |
| API Routes | `app/api/` | Thin handlers delegating to lib/ |
| Tests | `__tests__/` | Mocked Anthropic client tests |

## Key patterns

### Extended thinking
For complex reasoning tasks, `thinking.type = 'enabled'` with an explicit `budget_tokens`. The thinking blocks are in the response but not displayed to end users.

### Prompt caching
System prompts and large document contexts use `cache_control: { type: 'ephemeral' }` to reduce cost and latency on repeated calls.

### Tool use loop
Multi-turn tool use follows the standard loop: send message → check for `tool_use` stop reason → execute tool → append `tool_result` → repeat until `end_turn`.
