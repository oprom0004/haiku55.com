export interface FAQItem {
  question: string;
  answer: string;
}

export const HAIKU_FAQS: FAQItem[] = [
  {
    question: 'When will Claude Haiku 5.5 be officially released?',
    answer: 'Anthropic officially confirmed that Claude Haiku 5.5 will launch in the weeks following the September 2026 releases of Claude Opus 5.5 (September 22) and Claude Sonnet 5.5 (September 28). It is positioned as the high-speed, cost-efficient workhorse of the Claude 5.5 model family.',
  },
  {
    question: 'What is the expected pricing for Claude Haiku 5.5?',
    answer: 'Industry analysts and community benchmarks project Haiku 5.5 pricing at approximately $0.25 per million input tokens and $1.25 per million output tokens, with up to a 90% discount on prompt caching reads ($0.025/M tokens) and a 50% discount for asynchronous Message Batches.',
  },
  {
    question: 'How does Claude Haiku 5.5 compare to GPT-4o-mini and Gemini Flash?',
    answer: 'While GPT-4o-mini and Gemini Flash emphasize ultra-low commodity pricing, Claude Haiku 5.5 focuses heavily on frontier code generation and agentic tool use. Internal evaluations indicate Haiku 5.5 achieves near-Sonnet 3.5 coding accuracy (88%+ on HumanEval) while sustaining blistering generation speeds exceeding 140 tokens per second.',
  },
  {
    question: 'What context window size will Haiku 5.5 support?',
    answer: 'Haiku 5.5 launches with a standard 200,000-token context window, with beta access expected for 1,000,000 (1M) tokens to compete directly with Google Gemini long-context architectures.',
  },
  {
    question: 'How do developers access the Haiku 5.5 API?',
    answer: 'Haiku 5.5 is accessible via the standard Anthropic Messages API (`@anthropic-ai/sdk` for TypeScript and `anthropic` for Python) under the model identifier `claude-5-5-haiku-latest`, as well as through Amazon Bedrock and Google Cloud Vertex AI.',
  },
  {
    question: 'Does Haiku 5.5 support Prompt Caching and Computer Use?',
    answer: 'Yes! Haiku 5.5 natively supports Anthropic Prompt Caching (saving up to 90% on repeated system prompts and documentation contexts) and lightweight agentic tool calling (function calling).',
  },
];

export const haikuFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: HAIKU_FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};
