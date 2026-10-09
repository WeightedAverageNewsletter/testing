export const plans = [
  { id: 'full', name: 'The full picture', price: 399, description: 'The whole group chat, but well-informed.', features: ['Weighted Average Markets', 'Weighted Average Business', 'Weighted Average AI in Business'], featured: true },
  { id: 'markets', name: 'Markets', price: 299, description: 'For when “markets are crazy” won’t cut it.', features: ['Weighted Average Markets', 'Every weekday after market open', 'Today’s Numbers + three stories'], featured: false },
  { id: 'business', name: 'Business', price: 99, description: 'More substance. Fewer buzzwords.', features: ['Weighted Average Business', 'Every weekday morning', 'The Leadership Desk + three stories'], featured: false },
  { id: 'ai', name: 'AI in Business', price: 99, description: 'AI in the actual workplace, not just the pitch deck.', features: ['Weighted Average AI in Business', 'Every Friday', 'The AI Hire Watch + three stories'], featured: false },
] as const;
export const newsletters = [
  { name: 'Markets', theme: 'market', label: 'NOT FINANCIAL ADVICE. SOCIAL ADVANTAGE.', schedule: 'Weekdays, just after market open', description: 'The Nifty did a thing. The rupee did another. Know why it matters before your colleague turns it into their entire personality.', extra: 'Nifty & Sensex · FII/DII · RBI · IPOs' },
  { name: 'Business', theme: 'business', label: 'CORPORATE LORE, MINUS THE GOSSIP.', schedule: 'Every weekday morning', description: 'Who bought whom. Who’s playing the long game. Who’s finding out. Real Indian companies, real strategy, very real plot twists.', extra: 'Strategy · Companies · Leadership' },
  { name: 'AI in Business', theme: 'ai', label: 'BEYOND “WE SHOULD USE CHATGPT”.', schedule: 'Every Friday morning', description: 'Everyone has an AI announcement. Who has an actual use case? The moves, the hires, and the bets that aren’t betting.', extra: 'Real use cases · AI bets · AI hires' },
] as const;
