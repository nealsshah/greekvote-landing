## Pricing Model

### Approach: Simple Per-Cycle Pricing

**One price. Everything included. No tiers.**

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   $99 per recruitment cycle                                 │
│                                                             │
│   • Unlimited PNMs                                          │
│   • Unlimited voting members                                │
│   • All features included                                   │
│   • Data persists forever                                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Why This Model

| Factor | Reasoning |
|--------|-----------|
| **Aligns with value** | Chapters pay when they use it (during recruitment) |
| **Easy to justify** | "$99 for recruitment software" is a no-brainer chapter expense |
| **Simple to explain** | No tiers, no feature gating, no confusion |
| **Low per-person cost** | ~$1-2 per brother for a typical 50-100 person chapter |
| **No artificial limits** | Unlimited PNMs/members - doesn't penalize successful recruitment |

### What Counts as a "Cycle"

A billable cycle is created when an admin explicitly creates a new recruitment cycle in the app (e.g., "Fall 2025", "Spring 2026").

- Creating a cycle triggers payment
- Chapters typically run 1-2 cycles per year
- Data from previous cycles persists (historical reference)

### Revenue Projections

| Chapters | Cycles/Year | Annual Revenue |
|----------|-------------|----------------|
| 50       | 2           | $9,900         |
| 100      | 2           | $19,800        |
| 200      | 2           | $39,600        |
| 500      | 2           | $99,000        |

### Why No Tiers (For Now)

At $99/cycle, the price is low enough that:
- Feature-gating feels unnecessarily restrictive
- Tiers add friction to sales ("which tier do I need?")
- Support burden increases with tier confusion
- Better to learn what customers want first

**Possible tier features that don't justify complexity:**

| Possible Tier Feature | Why It Doesn't Work |
|----------------------|---------------------|
| # of PNMs | Feels arbitrary, punishes successful recruitment |
| # of brothers | Penalizes larger chapters unfairly |
| Delibs mode | Core feature, shouldn't gate it |
| Analytics/exports | Annoying to withhold, low cost to provide |

### When to Revisit Pricing

Consider adding tiers later if:

1. **Nationals orgs want to buy** → Enterprise tier with:
   - Cross-chapter dashboards
   - SSO/SAML
   - Bulk chapter management
   - Custom pricing

2. **Very small chapters request lower price** → Maybe a $49 "small chapter" tier (<20 brothers)

3. **Premium features are built** → Advanced analytics, integrations, API access, etc.

### Implementation Notes

**Payment integration options:**
- Stripe Checkout (simplest)
- Stripe Billing for subscriptions (if we add annual option later)

**Billing flow:**
1. Admin creates organization (free)
2. Admin creates first recruitment cycle
3. Redirected to Stripe Checkout ($99)
4. On successful payment, cycle is activated
5. Repeat for future cycles

**Database tracking:**
```sql
-- Add to organizations or create separate table
ALTER TABLE organizations ADD COLUMN stripe_customer_id TEXT;

-- Track paid cycles
CREATE TABLE paid_cycles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    org_id UUID REFERENCES organizations(id),
    cycle_id UUID REFERENCES recruitment_cycles(id),
    stripe_payment_id TEXT,
    amount_cents INT,
    paid_at TIMESTAMPTZ DEFAULT now()
);
```

---