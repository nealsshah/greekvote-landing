"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Users, Calendar, MessageSquare, BarChart3, ImageIcon, Smartphone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HeroSection } from "@/components/ui/hero-section-1"
import { PricingCard } from "@/components/ui/pricing-card"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
  }),
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="uppercase text-[11px] tracking-[0.25em] font-semibold text-foreground/35 block mb-6">
      {children}
    </span>
  )
}

function EditorialRule() {
  return <div className="w-full h-px bg-foreground/10" />
}

export default function LandingPage() {
  const features = [
    {
      number: "01",
      title: "Advanced Voting System",
      description: "Star ratings, round-based voting, Bayesian fairness algorithms, and live analytics to ensure every candidate gets a fair evaluation.",
      icon: <BarChart3 className="size-5" />,
    },
    {
      number: "02",
      title: "Comments & Deliberations",
      description: "Anonymous or attributed feedback, threaded discussions, likes, and moderation tools for productive conversations.",
      icon: <MessageSquare className="size-5" />,
    },
    {
      number: "03",
      title: "Event & Round Management",
      description: "Automatic round creation, drag-and-drop scheduling, and visual status indicators to keep recruitment on track.",
      icon: <Calendar className="size-5" />,
    },
    {
      number: "04",
      title: "Attendance Tracking",
      description: "Log candidate participation, bulk import via CSV, and generate reports instantly with zero manual work.",
      icon: <Users className="size-5" />,
    },
    {
      number: "05",
      title: "Photo Gallery",
      description: "Secure uploads with gallery view, sorting, and filtering so every member can put a face to a name.",
      icon: <ImageIcon className="size-5" />,
    },
    {
      number: "06",
      title: "Mobile-First Experience",
      description: "Swipe gestures, responsive layouts, and offline support. Vote on the go, right from the event floor.",
      icon: <Smartphone className="size-5" />,
    },
  ]

  return (
    <div className="flex min-h-[100dvh] flex-col font-body">
      <HeroSection />

      <main className="flex-1">
        {/* ── Problem Statement ── */}
        <section className="w-full py-24 md:py-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <EditorialRule />
            <div className="py-20 md:py-32">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-4xl mx-auto text-center"
              >
                <motion.h2
                  variants={fadeUp}
                  custom={0}
                  className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-[0.95] tracking-tight mb-8"
                >
                  Recruitment shouldn&apos;t{' '}
                  <span className="italic text-accent">be chaotic.</span>
                </motion.h2>
                <motion.p
                  variants={fadeUp}
                  custom={0.15}
                  className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
                >
                  Spreadsheets, group chats, and last-minute paper ballots lead to confusion, bias, and wasted time.
                  Active members struggle to stay organized, and candidates don&apos;t always get a fair evaluation. There&apos;s a better way.
                </motion.p>
              </motion.div>
            </div>
            <EditorialRule />
          </div>
        </section>

        {/* ── Features ── */}
        <section id="features" className="w-full py-24 md:py-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20 md:mb-28"
            >
              <motion.div variants={fadeUp} custom={0}>
                <SectionLabel>Features</SectionLabel>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                custom={0.1}
                className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-[0.95] tracking-tight max-w-3xl"
              >
                Everything you need for{' '}
                <span className="italic text-accent">fair recruitment.</span>
              </motion.h2>
            </motion.div>

            {/* Editorial feature list */}
            <div className="space-y-0">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <EditorialRule />
                  <motion.div
                    variants={fadeUp}
                    custom={0}
                    className="grid md:grid-cols-12 gap-6 md:gap-12 py-10 md:py-14 group cursor-default"
                  >
                    {/* Number */}
                    <div className="md:col-span-1">
                      <span className="font-display text-3xl md:text-4xl text-foreground/15 group-hover:text-accent/40 transition-colors duration-500">
                        {feature.number}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="md:col-span-4">
                      <h3 className="text-xl md:text-2xl font-semibold tracking-tight group-hover:text-accent transition-colors duration-500">
                        {feature.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-7">
                      <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
              <EditorialRule />
            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section id="how-it-works" className="w-full py-24 md:py-40 bg-foreground text-background relative overflow-hidden">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
            backgroundSize: '4rem 4rem',
          }} />

          <div className="mx-auto max-w-7xl px-6 lg:px-12 relative">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20 md:mb-28"
            >
              <motion.div variants={fadeUp} custom={0}>
                <span className="uppercase text-[11px] tracking-[0.25em] font-semibold text-background/35 block mb-6">
                  How It Works
                </span>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                custom={0.1}
                className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-[0.95] tracking-tight max-w-3xl"
              >
                Simple process,{' '}
                <span className="italic opacity-60">powerful results.</span>
              </motion.h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              {[
                {
                  step: "01",
                  title: "Add Candidates",
                  description: "Import PNMs and their info in minutes with bulk upload or manual entry.",
                },
                {
                  step: "02",
                  title: "Host Events",
                  description: "Track attendance, upload photos, and collect feedback that flows into profiles.",
                },
                {
                  step: "03",
                  title: "Vote & Deliberate",
                  description: "Structured rounds with fair voting algorithms and moderated discussions.",
                },
                {
                  step: "04",
                  title: "Decide with Confidence",
                  description: "Data-driven insights make final selections clear and defensible.",
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative"
                >
                  <motion.div
                    variants={fadeUp}
                    custom={i * 0.1}
                    className="space-y-6"
                  >
                    <span className="font-display text-6xl md:text-7xl text-background/10 block leading-none">
                      {step.step}
                    </span>
                    <div className="w-12 h-px bg-background/20" />
                    <h3 className="text-xl font-semibold tracking-tight">{step.title}</h3>
                    <p className="text-background/50 leading-relaxed">{step.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Benefits ── */}
        <section className="w-full py-24 md:py-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20 md:mb-28 text-center"
            >
              <motion.div variants={fadeUp} custom={0}>
                <SectionLabel>Benefits</SectionLabel>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                custom={0.1}
                className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-[0.95] tracking-tight mx-auto"
              >
                Built for everyone{' '}
                <span className="italic text-accent">in recruitment.</span>
              </motion.h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: "For Administrators",
                  description: "Save time, reduce bias, and keep recruitment running smoothly with automated workflows and real-time oversight.",
                  icon: <Users className="size-5" />,
                },
                {
                  title: "For Active Members",
                  description: "Simple interface to vote, comment, and deliberate fairly. Access everything from your phone during events.",
                  icon: <MessageSquare className="size-5" />,
                },
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div
                    variants={fadeUp}
                    custom={i * 0.1}
                    className="h-full border border-foreground/[0.08] rounded-2xl p-10 md:p-14 hover:border-accent/20 hover:bg-accent/[0.02] transition-all duration-500 group"
                  >
                    <div className="size-12 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/40 mb-8 group-hover:border-accent/30 group-hover:text-accent transition-all duration-500">
                      {benefit.icon}
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl tracking-tight mb-4">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">{benefit.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pricing ── */}
        <section id="pricing" className="w-full py-24 md:py-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <EditorialRule />
            <div className="py-20 md:py-28">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="mb-16 md:mb-24 text-center"
              >
                <motion.div variants={fadeUp} custom={0}>
                  <SectionLabel>Pricing</SectionLabel>
                </motion.div>
                <motion.h2
                  variants={fadeUp}
                  custom={0.1}
                  className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-[0.95] tracking-tight"
                >
                  Simple, <span className="italic text-accent">transparent</span> pricing.
                </motion.h2>
                <motion.p
                  variants={fadeUp}
                  custom={0.2}
                  className="text-muted-foreground text-lg mt-6 max-w-xl mx-auto"
                >
                  One price. Everything included. No tiers, no hidden fees.
                </motion.p>
              </motion.div>

              <PricingCard
                title="Per Recruitment Cycle"
                description="Pay only when you recruit. Everything your chapter needs for a successful recruitment season."
                price={199}
                priceLabel="per recruitment cycle"
                features={[
                  {
                    title: "What's Included",
                    items: [
                      "Unlimited PNMs",
                      "Unlimited voting members",
                      "All features included",
                      "Data persists forever",
                    ],
                  },
                  {
                    title: "Why Chapters Love It",
                    items: [
                      "~$2-4 per brother",
                      "No feature gating",
                      "Setup in 30 minutes",
                      "Full data export",
                    ],
                  },
                ]}
                buttonText="Start Your Recruitment"
                onButtonClick={() => console.log("Pricing CTA clicked")}
              />

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center text-sm text-muted-foreground mt-10"
              >
                A cycle is created when you start a new recruitment period (e.g., &ldquo;Fall 2025&rdquo;). Most chapters run 1-2 cycles per year.
              </motion.p>
            </div>
            <EditorialRule />
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="w-full py-24 md:py-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
              {/* Left: heading */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start"
              >
                <motion.div variants={fadeUp} custom={0}>
                  <SectionLabel>FAQ</SectionLabel>
                </motion.div>
                <motion.h2
                  variants={fadeUp}
                  custom={0.1}
                  className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-[0.95] tracking-tight"
                >
                  Frequently asked{' '}
                  <span className="italic text-accent">questions.</span>
                </motion.h2>
                <motion.p
                  variants={fadeUp}
                  custom={0.2}
                  className="text-muted-foreground mt-6 leading-relaxed"
                >
                  Everything you need to know about GreekVote. Can&apos;t find what you&apos;re looking for? Reach out to our team.
                </motion.p>
              </motion.div>

              {/* Right: accordion */}
              <div className="lg:col-span-8">
                <Accordion type="single" collapsible className="w-full">
                  {[
                    {
                      question: "How quickly can we get started with GreekVote?",
                      answer: "You can get started immediately! Create your account, import your candidate list (via CSV or manual entry), and you can run your first vote within minutes. Most chapters are fully set up within 30 minutes.",
                    },
                    {
                      question: "How does the Bayesian fairness algorithm work?",
                      answer: "Our Bayesian rating system adjusts for individual voting patterns to reduce bias. If someone consistently rates higher or lower than others, the system normalizes their votes to ensure fair comparisons across all candidates.",
                    },
                    {
                      question: "Can we customize voting rounds and criteria?",
                      answer: "You can create custom voting rounds, set different rating criteria, configure voting thresholds, and customize the entire recruitment workflow to match your chapter's specific process.",
                    },
                    {
                      question: "Is our candidate data secure and private?",
                      answer: "Yes, security is our top priority. All data is encrypted in transit and at rest. We're compliant with data protection regulations, and you have full control over who can access your recruitment data. We never share your information with third parties.",
                    },
                    {
                      question: "Does GreekVote work on mobile devices?",
                      answer: "Yes! GreekVote is mobile-first with a responsive design that works perfectly on phones and tablets. Brothers can vote, comment, and view candidate profiles during events without needing a laptop.",
                    },
                    {
                      question: "What kind of support do you provide?",
                      answer: "We provide comprehensive support including setup assistance, training materials, video tutorials, and responsive customer support via email and chat. We're here to ensure your recruitment season runs smoothly.",
                    },
                    {
                      question: "Can we track attendance at recruitment events?",
                      answer: "Yes! You can log candidate attendance at each event, bulk import attendance via CSV, and generate reports showing participation rates. This data automatically appears on candidate profiles.",
                    },
                    {
                      question: "What happens to our data after recruitment ends?",
                      answer: "You maintain full control of your data. You can export all candidate information, voting records, and analytics at any time. You can also archive recruitment seasons while keeping the data accessible for future reference.",
                    },
                  ].map((faq, i) => (
                    <motion.div
                      key={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <motion.div variants={fadeUp} custom={i * 0.04}>
                        <AccordionItem value={`item-${i}`} className="border-b border-foreground/[0.08] py-1">
                          <AccordionTrigger className="text-left font-semibold hover:no-underline text-[15px] py-5">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-[15px]">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      </motion.div>
                    </motion.div>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="w-full py-32 md:py-48 bg-foreground text-background relative overflow-hidden">
          {/* Accent gradient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/15 rounded-full blur-[120px] pointer-events-none" />

          <div className="mx-auto max-w-7xl px-6 lg:px-12 relative">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.h2
                variants={fadeUp}
                custom={0}
                className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] tracking-tight mb-8"
              >
                Ready to transform{' '}
                <br className="hidden md:block" />
                your <span className="italic opacity-60">recruitment?</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={0.15}
                className="text-background/50 text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-12"
              >
                Join fraternities nationwide using GreekVote to run fair, organized recruitment.
              </motion.p>
              <motion.div
                variants={fadeUp}
                custom={0.3}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-background text-foreground hover:bg-background/90 rounded-full h-14 px-8 text-sm uppercase tracking-[0.1em] font-semibold group"
                >
                  <Link href="#" className="flex items-center gap-2">
                    Get Started Now
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full h-14 px-8 text-sm uppercase tracking-[0.1em] font-semibold bg-transparent border-background/60 text-background hover:bg-background/15 hover:text-background"
                >
                  <Link href="#">
                    Book a Demo
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="w-full border-t border-foreground/[0.06] bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-16 md:py-24">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
            <div className="lg:col-span-4 space-y-5">
              <Image
                src="/greekvote black.png"
                alt="GreekVote"
                width={120}
                height={32}
                className="h-7 w-auto"
              />
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                Modern recruitment management for professional fraternities. Run fair, organized, and stress-free recruitment.
              </p>
            </div>

            <div className="lg:col-span-2 lg:col-start-auto space-y-5">
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground/40">Product</h4>
              <ul className="space-y-3">
                {[
                  { name: "Features", href: "#features" },
                  { name: "How It Works", href: "#how-it-works" },
                  { name: "Pricing", href: "#pricing" },
                  { name: "FAQ", href: "#faq" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-2 lg:col-start-auto space-y-5">
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground/40">Account</h4>
              <ul className="space-y-3">
                {[
                  { name: "Log In", href: "/login" },
                  { name: "Sign Up", href: "/signup" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-foreground/[0.06] pt-10 mt-16">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} GreekVote. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
