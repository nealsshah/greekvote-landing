"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HeroSection } from "@/components/ui/hero-section-1"
import { PricingCard } from "@/components/ui/pricing-card"

const faqs = [
  {
    question: "How quickly can a chapter get set up?",
    answer:
      "Most chapters are running in 30 minutes. Create the org, import candidates (CSV or manual), and you can host a vote before the next chapter meeting. No onboarding call required, but we're happy to do one.",
  },
  {
    question: "What does Bayesian fairness actually mean?",
    answer:
      "Some members rate strict; some rate easy. Raw averages punish candidates whose voters happen to be strict. The Bayesian system normalizes for each voter's tendency, so candidates are compared on like terms. The math is public; the result is rankings nobody can argue with.",
  },
  {
    question: "Can we customize rounds, criteria, and thresholds?",
    answer:
      "Yes. Define your own rounds (Meet the Brothers, Resume Review, Speed Networking, anything), choose Yes/No or star ratings per round, set discussion thresholds, and adjust voting visibility per round. Your process, not ours.",
  },
  {
    question: "Is candidate data private?",
    answer:
      "Encrypted in transit and at rest. Role-based access (admin / member / observer). Anonymous comments stay anonymous; we don't unmask them even for admins. Full export and delete on demand.",
  },
  {
    question: "Does it work on phones during events?",
    answer:
      "It's the primary surface. Members vote, comment, and view candidate profiles on phones during events. Swipe through candidates, tap to vote, type to comment.",
  },
  {
    question: "What happens to our data after a cycle?",
    answer:
      "It stays. Past cycles remain accessible for reference, you can export everything at any time, and we never delete chapter data unless you ask us to.",
  },
  {
    question: "Does this work for sororities too?",
    answer:
      "Yes. The tool is built for any Greek-letter recruitment process — fraternities and sororities, social and professional. The voting, deliberation, and round mechanics are the same across all of them.",
  },
]

export default function LandingPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col font-body text-foreground">
      <HeroSection />

      <main className="flex-1">
        {/* ── Problem section: declarative, asymmetric, no card grid ── */}
        <section className="relative w-full py-20 sm:py-28 md:py-36">
          <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
            <h2 className="max-w-3xl text-balance text-[clamp(1.875rem,4.4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.025em]">
              The mess usually starts after the first event.
            </h2>
            <p className="mt-6 max-w-2xl text-pretty text-[17px] leading-[1.65] text-foreground/65">
              You know the stack. It works until everyone needs the same
              answer at the same time:
            </p>

            <ul className="mt-7 space-y-2.5 text-[17px] leading-[1.5] text-foreground/55 sm:text-[18px]">
              <li className="flex items-baseline gap-3">
                <span className="inline-block h-px w-5 translate-y-[-4px] bg-accent" />
                <span className="line-through decoration-foreground/30">
                  The Sheet that nobody updates after Tuesday.
                </span>
              </li>
              <li className="flex items-baseline gap-3">
                <span className="inline-block h-px w-5 translate-y-[-4px] bg-accent" />
                <span className="line-through decoration-foreground/30">
                  The group chat with 40 unread.
                </span>
              </li>
              <li className="flex items-baseline gap-3">
                <span className="inline-block h-px w-5 translate-y-[-4px] bg-accent" />
                <span className="line-through decoration-foreground/30">
                  The paper ballots that get lost on the way to delibs.
                </span>
              </li>
            </ul>

            <p className="mt-9 max-w-2xl text-[17px] leading-[1.6] text-foreground">
              GreekVote keeps the roster, votes, attendance, comments, and
              rankings in one place, so the room can argue about candidates
              instead of whose numbers are current.
            </p>
          </div>
        </section>

        {/* ── Voting feature: the differentiator. Asymmetric two-column with the real product. ── */}
        <section
          id="voting"
          className="relative w-full pt-12 pb-20 sm:py-24 md:py-32"
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <FeatureLabel>The vote</FeatureLabel>
                <h2 className="mt-5 text-balance text-[clamp(1.875rem,4vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.025em]">
                  Voting that holds up under scrutiny.
                </h2>
                <p className="mt-5 text-pretty text-[17px] leading-[1.65] text-foreground/65">
                  Star ratings or yes/no. Round-based deliberations. Bayesian
                  normalization for the members who rate strict and the ones
                  who don&apos;t. So when someone questions the call, the
                  numbers answer back.
                </p>
                <ul className="mt-7 space-y-3 text-[14.5px] text-foreground/75">
                  <ProofPoint>Star ratings or yes/no, per round</ProofPoint>
                  <ProofPoint>
                    Raw <em>and</em> weighted averages, side by side
                  </ProofPoint>
                  <ProofPoint>
                    Live to your chapter, or sealed until delibs
                  </ProofPoint>
                  <ProofPoint>
                    One-click reset if a round needs a re-vote
                  </ProofPoint>
                </ul>
              </div>

              <div className="lg:col-span-7">
                <ProductFrame
                  src="/voting.png"
                  alt="GreekVote voting console — live vote totals with yes / no / total, sealed controls, and result visibility toggle"
                  width={1600}
                  height={1100}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Deliberations: reverse the layout. ── */}
        <section className="relative w-full py-20 sm:py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="order-2 lg:order-1 lg:col-span-7">
                <ProductFrame
                  src="/comments.png"
                  alt="GreekVote deliberations — threaded comments with an explicit Post Anonymously toggle"
                  width={1600}
                  height={1100}
                />
              </div>

              <div className="order-1 lg:order-2 lg:col-span-5">
                <FeatureLabel>Delibs</FeatureLabel>
                <h2 className="mt-5 text-balance text-[clamp(1.875rem,4vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.025em]">
                  Anonymous when it matters. Attributed when it counts.
                </h2>
                <p className="mt-5 text-pretty text-[17px] leading-[1.65] text-foreground/65">
                  An explicit anonymous toggle on every comment. Members can
                  speak honestly when it matters; everything else stays
                  attributed. Threads, likes, and moderation come with it.
                </p>
                <ul className="mt-7 space-y-3 text-[14.5px] text-foreground/75">
                  <ProofPoint>Per-comment anonymous toggle</ProofPoint>
                  <ProofPoint>Threaded replies, likes, sorting</ProofPoint>
                  <ProofPoint>
                    Admin moderation without unmasking authors
                  </ProofPoint>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Everything else: a single editorial paragraph, not a card grid ── */}
        <section className="relative w-full py-20 sm:py-24 md:py-32">
          <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-start">
              <h2 className="max-w-3xl text-balance text-[clamp(1.75rem,3.8vw,2.5rem)] font-semibold leading-[1.05] tracking-[-0.025em]">
                The rest of the cycle stops living in side tabs.
              </h2>

              <p className="text-pretty text-[17px] leading-[1.65] text-foreground/68">
                Round and event scheduling, attendance with CSV import and
                export, a candidate photo gallery for putting faces to names,
                and a mobile-first interface so voting happens on the event
                floor, not back at the apartment three days later.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-5">
              <div className="lg:col-span-3">
                <ProductFrame
                  src="/admin.png"
                  alt="GreekVote admin overview — current cycle, total PNMs, active round, and live voting status"
                  width={1600}
                  height={920}
                />
              </div>
              <div className="lg:col-span-2">
                <ProductFrame
                  src="/events.png"
                  alt="GreekVote event attendance — every event with PNM headcount and quick CSV export"
                  width={1600}
                  height={920}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── How it works: numbered (real sequence), on dark — contrast moment ── */}
        <section
          id="flow"
          className="relative w-full overflow-hidden bg-foreground py-24 text-background sm:py-28 md:py-36"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-background/15"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
              backgroundSize: "5rem 5rem",
            }}
          />

          <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
              <div className="max-w-2xl lg:col-span-7">
              <h2 className="text-balance text-[clamp(1.875rem,4.4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.025em]">
                How a cycle runs.
              </h2>
              <p className="mt-5 text-[17px] leading-[1.6] text-background/65">
                From the first import to the final selection list — four
                steps, one tool.
              </p>
              </div>
              <p className="border-t border-background/12 pt-5 text-[14px] leading-[1.6] text-background/55 lg:col-span-4 lg:col-start-9">
                No process theater here. These are the places a recruitment
                chair actually loses time during rush week.
              </p>
            </div>

            <ol className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
              {[
                {
                  n: "01",
                  title: "Add candidates",
                  body: "Import PNMs via CSV or add them by hand. Photos, majors, GPAs, custom fields — whatever your chapter tracks.",
                },
                {
                  n: "02",
                  title: "Host events",
                  body: "Schedule rounds, track attendance, upload photos. Everything flows into each candidate's profile automatically.",
                },
                {
                  n: "03",
                  title: "Vote & deliberate",
                  body: "Structured rounds, fair scoring, threaded comments. Anonymous when it matters; attributed when it counts.",
                },
                {
                  n: "04",
                  title: "Decide",
                  body: "Live rankings, weighted averages, side-by-side breakdowns. Make the call with the numbers in front of you.",
                },
              ].map((step) => (
                <li key={step.n} className="relative">
                  <div className="flex items-baseline gap-3">
                    <span className="text-[44px] font-semibold leading-none tracking-[-0.04em] text-background/30">
                      {step.n}
                    </span>
                    <span className="h-px flex-1 bg-background/10" />
                  </div>
                  <h3 className="mt-5 text-[19px] font-semibold tracking-tight text-background">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-[14.5px] leading-[1.55] text-background/60">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Pricing: single committed slab, no dual card ── */}
        <section id="pricing" className="relative w-full py-24 sm:py-28 md:py-36">
          <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
            <PricingCard />
          </div>
        </section>

        {/* ── FAQ — sticky heading, compact accordion ── */}
        <section id="faq" className="relative w-full py-24 sm:py-28 md:py-36">
          <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
                <h2 className="text-balance text-[clamp(1.875rem,4vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.025em]">
                  Questions chapters ask.
                </h2>
                <p className="mt-5 text-pretty text-[17px] leading-[1.6] text-foreground/65">
                  Something missing? Email{" "}
                  <a
                    href="mailto:hello@greekvote.com"
                    className="font-medium text-foreground underline decoration-foreground/30 decoration-1 underline-offset-[5px] transition-colors hover:text-accent hover:decoration-accent/60"
                  >
                    hello@greekvote.com
                  </a>{" "}
                  and we&apos;ll answer fast.
                </p>
              </div>

              <div className="lg:col-span-8">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, i) => (
                    <AccordionItem
                      key={faq.question}
                      value={`faq-${i}`}
                      className="border-b border-foreground/[0.08]"
                    >
                      <AccordionTrigger className="py-5 text-left text-[15.5px] font-semibold tracking-tight hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="pb-6 text-[15px] leading-[1.65] text-foreground/65">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* ── Closing CTA: direct signal band ── */}
        <section className="relative isolate w-full overflow-hidden bg-accent py-24 text-foreground sm:py-28 md:py-32">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-foreground/20"
          />

          <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-6 lg:grid-cols-12 lg:items-end lg:px-8">
            <h2 className="text-balance text-[clamp(2.25rem,6vw,4.75rem)] font-semibold leading-[1] tracking-[-0.035em] text-foreground lg:col-span-7">
              Have the cleaner version ready before the next rush meeting.
            </h2>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="max-w-md text-pretty text-[17px] leading-[1.6] text-foreground/78">
                Run your first cycle free. Keep it if the chapter actually
                uses it.
              </p>
              <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row lg:flex-col">
                <Button
                  asChild
                  size="lg"
                  className="group h-12 rounded-full bg-foreground px-6 text-[14px] font-semibold text-background hover:bg-foreground/90"
                >
                  <Link href="/signup">
                    Start your free cycle
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-full border-foreground/25 bg-transparent px-6 text-[14px] font-semibold text-foreground hover:border-foreground/45 hover:bg-foreground/[0.08] hover:text-foreground"
                >
                  <Link href="https://cal.com/nealsshah/30min">
                    Talk through your process
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="w-full border-t border-foreground/[0.06] bg-background">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
            <div className="lg:col-span-5 space-y-4">
              <Image
                src="/greekvote black.png"
                alt="GreekVote"
                width={120}
                height={32}
                className="h-7 w-auto"
              />
              <p className="max-w-sm text-[14px] leading-[1.6] text-foreground/55">
                Recruitment management for Greek-letter chapters — fraternities
                and sororities, social and professional. Built by someone who
                ran rush and got tired of doing it on spreadsheets.
              </p>
            </div>

            <div className="space-y-4 lg:col-span-3">
              <h4 className="text-[13px] font-semibold text-foreground/55">
                Product
              </h4>
              <ul className="space-y-2.5">
                {[
                  { name: "Voting", href: "#voting" },
                  { name: "How it works", href: "#flow" },
                  { name: "Pricing", href: "#pricing" },
                  { name: "FAQ", href: "#faq" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="inline-flex min-h-11 items-center text-[14px] text-foreground/65 transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 lg:col-span-2">
              <h4 className="text-[13px] font-semibold text-foreground/55">
                Account
              </h4>
              <ul className="space-y-2.5">
                {[
                  { name: "Log in", href: "/login" },
                  { name: "Sign up", href: "/signup" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="inline-flex min-h-11 items-center text-[14px] text-foreground/65 transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 lg:col-span-2">
              <h4 className="text-[13px] font-semibold text-foreground/55">
                Contact
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="mailto:hello@greekvote.com"
                    className="inline-flex min-h-11 items-center text-[14px] text-foreground/65 transition-colors hover:text-foreground"
                  >
                    hello@greekvote.com
                  </a>
                </li>
                <li>
                  <Link
                    href="https://cal.com/nealsshah/30min"
                    className="inline-flex min-h-11 items-center text-[14px] text-foreground/65 transition-colors hover:text-foreground"
                  >
                    Book a demo
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-foreground/[0.06] pt-8 sm:flex-row sm:items-center">
            <p className="text-[12px] text-foreground/50">
              &copy; {new Date().getFullYear()} GreekVote.
            </p>
            <p className="text-[12px] text-foreground/45">
              Built for chapters, not enterprises.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[14px] font-semibold text-accent">
      <span className="inline-block h-px w-8 bg-accent" />
      <span>{children}</span>
    </span>
  )
}

function ProductFrame({
  src,
  alt,
  width,
  height,
}: {
  src: string
  alt: string
  width: number
  height: number
}) {
  return (
    <div className="product-frame relative overflow-hidden rounded-xl border border-foreground/[0.1] p-1.5 sm:p-2">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="block w-full rounded-[12px] sm:rounded-[16px]"
        sizes="(min-width: 1024px) 720px, 100vw"
      />
    </div>
  )
}

function ProofPoint({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5">
      <span className="mt-[7px] inline-flex size-3.5 shrink-0 items-center justify-center rounded-full bg-accent/12 text-accent">
        <Check className="size-2.5" strokeWidth={2.5} />
      </span>
      <span className="text-pretty text-[14.5px] leading-[1.55] text-foreground/75">
        {children}
      </span>
    </li>
  )
}
