import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// Basic chat with Claude
export async function chatWithClaude(messages: any[], options?: {
  model?: string;
  maxTokens?: number;
  temperature?: number;
}) {
  try {
    const response = await anthropic.messages.create({
      model: options?.model || 'claude-sonnet-4-20250514',
      max_tokens: options?.maxTokens || 1024,
      messages,
    });
    return response;
  } catch (error: any) {
    throw new Error(`Claude API error: ${error?.status || 500} - ${error?.message || 'Unknown error'}`);
  }
}

// Multi-modal (text + image)
export async function processImage(imageUrl: string, question: string) {
  try {
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'image',
              source: { type: 'url', url: imageUrl },
            },
            { type: 'text', text: question },
          ],
        },
      ],
    });
    return response;
  } catch (error: any) {
    throw new Error(`Image processing error: ${error?.status || 500} - ${error?.message || 'Unknown error'}`);
  }
}

// Extended thinking
export async function deepReasoning(problem: string) {
  try {
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 8000,
      thinking: { type: 'enabled', budget_tokens: 5000 },
      messages: [{ role: 'user', content: problem }],
    });
    return response;
  } catch (error: any) {
    throw new Error(`Reasoning error: ${error?.status || 500} - ${error?.message || 'Unknown error'}`);
  }
}

// Tool use
export async function useTools(prompt: string, tools: any[]) {
  try {
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      tools,
      messages: [{ role: 'user', content: prompt }],
    });
    return response;
  } catch (error: any) {
    throw new Error(`Tool use error: ${error?.status || 500} - ${error?.message || 'Unknown error'}`);
  }
}

// Streaming
export async function streamChat(messages: any[]) {
  try {
    const stream = anthropic.messages.stream({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      messages,
    });
    return stream;
  } catch (error: any) {
    throw new Error(`Stream error: ${error?.status || 500} - ${error?.message || 'Unknown error'}`);
  }
}

// Safety check
export async function safetyCheck(content: string) {
  const response = await chatWithClaude([
    { role: 'user', content: `Rate this content for safety (0-100) and explain: ${content}` },
  ]);
  return response;
}
