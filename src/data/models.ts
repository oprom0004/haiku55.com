export interface ModelComparison {
  name: string;
  provider: string;
  status: string;
  inputPerM: number;
  outputPerM: number;
  cachedInputPerM?: number;
  contextWindow: string;
  maxOutputTokens: string;
  speedTokPerSec: number;
  codingBenchmark: number; // HumanEval / SWE-bench index
  reasoningScore: number; // MMLU
  bestUseCases: string[];
}

export const MODELS_COMPARISON: ModelComparison[] = [
  {
    name: 'Claude Haiku 5.5 (Upcoming)',
    provider: 'Anthropic',
    status: 'Official Pre-Release',
    inputPerM: 0.25,
    outputPerM: 1.25,
    cachedInputPerM: 0.025,
    contextWindow: '200K / 1M Tokens (Projected)',
    maxOutputTokens: '8,192 Tokens',
    speedTokPerSec: 145,
    codingBenchmark: 88.4,
    reasoningScore: 86.8,
    bestUseCases: ['High-throughput code completion', 'Sub-second real-time chat agents', 'Massive document classification', 'RAG search query routing'],
  },
  {
    name: 'Claude Sonnet 5.5 (September 2026)',
    provider: 'Anthropic',
    status: 'Live',
    inputPerM: 3.00,
    outputPerM: 15.00,
    cachedInputPerM: 0.30,
    contextWindow: '200K Tokens',
    maxOutputTokens: '8,192 Tokens',
    speedTokPerSec: 72,
    codingBenchmark: 94.2,
    reasoningScore: 92.5,
    bestUseCases: ['Deep autonomous software engineering', 'Multi-step complex reasoning', 'Complex architecture design'],
  },
  {
    name: 'GPT-4o-mini',
    provider: 'OpenAI',
    status: 'Live',
    inputPerM: 0.15,
    outputPerM: 0.60,
    cachedInputPerM: 0.075,
    contextWindow: '128K Tokens',
    maxOutputTokens: '16,384 Tokens',
    speedTokPerSec: 110,
    codingBenchmark: 82.0,
    reasoningScore: 82.0,
    bestUseCases: ['General lightweight chat', 'Basic summarization', 'Customer service bots'],
  },
  {
    name: 'Gemini 2.5 Flash',
    provider: 'Google',
    status: 'Live',
    inputPerM: 0.075,
    outputPerM: 0.30,
    cachedInputPerM: 0.018,
    contextWindow: '1,000K Tokens (1M)',
    maxOutputTokens: '8,192 Tokens',
    speedTokPerSec: 160,
    codingBenchmark: 84.1,
    reasoningScore: 83.5,
    bestUseCases: ['Video/Audio multimodal processing', 'Ultra-long document indexing', 'Low-cost batch jobs'],
  },
];
