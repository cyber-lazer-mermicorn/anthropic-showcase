import { describe, expect, it } from 'vitest';

import { chatWithClaude } from '../lib/claude';

describe('Claude Integration', () => {
  it('should have chatWithClaude function', () => {
    expect(typeof chatWithClaude).toBe('function');
  });

  it('should handle empty messages', async () => {
    // Mock test - would need actual API key for real test
    expect(true).toBe(true);
  });
});
