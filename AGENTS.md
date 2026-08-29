# Anthropic Claude Showcase — Agent Doctrine

## What this repo is
Production-grade Anthropic Claude integration: extended thinking, tool use, computer use, prompt caching, and multi-turn agents.
By Cherry Shanaley (Chan), AI Solutions Engineer.

## Tech stack
- **Framework:** Next.js 15 (App Router)
- **AI:** Anthropic SDK (latest), Vercel AI SDK adapter
- **Deployment:** Vercel
- **Language:** TypeScript (strict)

## Coding rules
- TypeScript strict — no `any`
- Anthropic client is a singleton from `lib/anthropic.ts`
- Tool use: all tools defined with typed Zod schemas in `lib/tools/`
- Extended thinking: always set `budget_tokens` explicitly
- Prompt caching: mark stable system prompts with `cache_control: { type: 'ephemeral' }`
- Never log message content — log token counts only
- Max retries: 3 with exponential backoff from `lib/retry.ts`

## Commands
```bash
npm install && npm run dev
npm run test
npm run lint
```

## Do not
- Instantiate Anthropic client outside `lib/anthropic.ts`
- Leave `max_tokens` unset
- Log raw message content
- Use deprecated `claude-2` models — use `claude-sonnet-4-5` or later
