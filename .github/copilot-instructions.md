# GitHub Copilot Instructions — Anthropic Claude Showcase

You are working on an Anthropic Claude showcase by Cherry Shanaley.

## Always
- Import client from `lib/anthropic.ts`
- Set `max_tokens` on every message call
- For extended thinking: set `thinking.type = 'enabled'` and `budget_tokens`
- For prompt caching: add `cache_control: { type: 'ephemeral' }` to stable blocks
- Type tool input/output with Zod schemas

## Never
- Use deprecated models (`claude-2`, `claude-instant`)
- Log `message.content` — log `usage.input_tokens` / `usage.output_tokens` only
- Set `stream: true` without proper `on('text')` / `finalMessage()` handling

## Pattern: extended thinking
```typescript
const response = await anthropic.messages.create({
  model: 'claude-sonnet-4-5',
  max_tokens: 16000,
  thinking: { type: 'enabled', budget_tokens: 10000 },
  messages: [{ role: 'user', content: prompt }],
});
```
