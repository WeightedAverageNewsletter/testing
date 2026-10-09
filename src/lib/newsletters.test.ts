import { describe, it, expect } from 'vitest';
import { plans } from './newsletters';
describe('Weighted Average monthly prices in INR', () => {
  it('prices the full bundle at 399', () => { expect(plans.find(p => p.id === 'full')?.price).toBe(399); });
  it('prices Markets at 299', () => { expect(plans.find(p => p.id === 'markets')?.price).toBe(299); });
  it('prices Business alone at 99', () => { expect(plans.find(p => p.id === 'business')?.price).toBe(99); });
  it('prices AI in Business alone at 99', () => { expect(plans.find(p => p.id === 'ai')?.price).toBe(99); });
  it('keeps Business and AI in Business as two separate plans, never one combined offering', () => {
    const business = plans.find(p => p.id === 'business');
    const ai = plans.find(p => p.id === 'ai');
    expect(business?.features.join(' ')).not.toContain('AI in Business');
    expect(ai?.features.join(' ')).not.toContain('Weighted Average Business');
    expect(plans.filter(p => p.price === 99)).toHaveLength(2);
  });
  it('only links plans to Zoho Billing hosted checkout pages over https', () => {
    for (const plan of plans) {
      if (plan.checkoutUrl) expect(plan.checkoutUrl).toMatch(/^https:\/\/(billing|subscriptions)\.(zoho|zohosecure)\.(in|com)\//);
    }
  });
});
