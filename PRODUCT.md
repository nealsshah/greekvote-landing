# Product

## Register

brand

## Users

**Primary: Recruitment chairs.** Active members (typically juniors) who are running rush for their chapter, often with 1–2 cycles of prior experience. They're evaluating tools their chapter might adopt and are accountable to their e-board for the recommendation. They land on this page from search, word-of-mouth, or a peer chapter referral, usually on a phone, often between classes or during a chapter meeting. The job they're trying to get done in that moment: figure out in under a minute whether GreekVote is worth showing to their VP / president — and if it is, start the free first cycle themselves before the conversation cools.

Secondary readers (chapter presidents, IFC advisors) will follow the recruitment chair's link. The page must hold up under their scrutiny but is tuned for the chair.

## Product Purpose

GreekVote is recruitment management software for fraternities — voting, attendance, deliberations, photo gallery, and round management in one mobile-first tool. The landing page exists to convert recruitment chairs into self-serve signups for the free first cycle; cycle 2+ is where the business monetizes ($199/cycle). Success looks like: chair lands → understands the product in 10 seconds → signs up the chapter for the free cycle, or shares the link upward with enough confidence to drive an e-board decision in the same week.

## Brand Personality

Confident, fair, modern. Voice is peer-level — someone who's run rush before, knows the chaos of paper ballots and 4am spreadsheet rebuilds, and built the tool they wished they had. Not a vendor selling at a chapter; a teammate showing them what works. Tone is direct, specific, and quietly authoritative. No hype, no exclamation marks, no chest-thumping. The emotional goal is *relief* — "oh, finally" — and *credibility* — "this person gets it."

Reference territory: Notion / Linear / Arc — playful-but-credible product marketing for prosumer tools. The visual and copywriting confidence of those brands, transposed onto a fraternity-operations context.

## Anti-references

- **Generic blue SaaS**: Salesforce, HubSpot, ChapterBuilder, OmegaFi, typical fraternity-software pages. Stock photos of smiling diverse teams, "Transform Your Recruitment Today" headlines, blue-and-white CTAs with drop shadows.
- **Frat-bro aesthetic**: Greek letters as logos, stickers, party photos, "BROTHERHOOD" all-caps, gold accents on navy. The audience already lives in that world; the brand's job is to feel like a tool they bring back to that world, not part of it.
- **AI-slop scaffolding** (currently leaking onto the page): numbered eyebrows above every section (01 · 02 · 03), tiny uppercase tracked kicker over every heading, italic-serif-accent on every H2 ("be chaotic", "fair recruitment", "powerful results"). Used once with intent, voice. Repeated across every section, grammar — and reads as AI. Pick a different cadence per section.
- **Warm-cream/sand/parchment body bg as a default warmth move**. If we keep cream we earn it; otherwise it's the saturated 2026 AI tell.

## Design Principles

1. **Fair by design, on every surface.** The product's core promise is reducing bias in chapter voting. The page should embody that — even-handed claims, no manufactured urgency, no "limited spots" theater. Confidence comes from the work, not the copy.
2. **Speak as a teammate, not a vendor.** Every line of copy answers: would a recruitment chair who's been through this say it this way? Cut anything that sounds like a category page. Keep anything that sounds like a peer pointing at the obvious problem.
3. **Mobile is the canonical surface.** Chairs read this on a phone between obligations. Type sizes, tap targets, scroll rhythm, and time-to-comprehension are designed for the phone first; the desktop layout is the variant.
4. **One specific claim beats five vague benefits.** "Bayesian fairness normalizes for raters who score high or low" beats "advanced algorithms ensure fair voting." Specificity earns trust; abstraction signals SaaS.
5. **Vary the cadence.** Sections should not all look like the same template. Eyebrow + display heading + grid is one chord; play others. Editorial rules, oversized stats, a single full-bleed quote, a typographic section title with no kicker at all — variety is what makes the page feel designed instead of generated.

## Accessibility & Inclusion

Target: **WCAG 2.1 AA**, with mobile-first scrutiny since recruitment chairs read this primarily on phones.

- Body text contrast ≥ 4.5:1 against its background; large text ≥ 3:1. The current `text-muted-foreground` on cream and on dark sections both need verification — gray-on-tinted-near-white is the most common AI contrast failure.
- Tap targets ≥ 44×44px at mobile breakpoints. Audit CTAs, FAQ accordion triggers, and footer links.
- All animations respect `prefers-reduced-motion` with a crossfade or instant alternative. The current Framer Motion `fadeUp` reveals must not gate content visibility — section must render readable without the animation firing.
- Semantic HTML: real headings (h1 → h2 → h3), real `<button>` / `<a>` distinction for CTAs vs. nav, real `<nav>` / `<main>` / `<footer>` landmarks for screen readers.
- Color is never the sole carrier of meaning (no green/red-only state distinctions). The violet accent is brand, not a status signal.
