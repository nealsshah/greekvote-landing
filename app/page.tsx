"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Check, Star, Users, Calendar, MessageSquare, BarChart3, ImageIcon, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { HeroSection } from "@/components/ui/hero-section-1"
import { PricingCard } from "@/components/ui/pricing-card"

export default function LandingPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const features = [
    {
      title: "Advanced Voting System",
      description: "Star ratings, round-based voting, Bayesian fairness algorithms, and live analytics.",
      icon: <BarChart3 className="size-5" />,
    },
    {
      title: "Comments & Deliberations",
      description: "Anonymous or attributed feedback, threaded discussions, likes, and moderation tools.",
      icon: <MessageSquare className="size-5" />,
    },
    {
      title: "Event & Round Management",
      description: "Automatic round creation, drag-and-drop scheduling, and visual status indicators.",
      icon: <Calendar className="size-5" />,
    },
    {
      title: "Attendance Tracking",
      description: "Log candidate participation, bulk import via CSV, and generate reports instantly.",
      icon: <Users className="size-5" />,
    },
    {
      title: "Photo Gallery",
      description: "Secure uploads with gallery view, sorting, and filtering for candidate profiles.",
      icon: <ImageIcon className="size-5" />,
    },
    {
      title: "Mobile-First Experience",
      description: "Swipe gestures, responsive layouts, and offline support for voting on the go.",
      icon: <Smartphone className="size-5" />,
    },
  ]

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <HeroSection />
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Recruitment Shouldn't Be Chaotic</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Spreadsheets, group chats, and last-minute paper ballots lead to confusion, bias, and wasted time.
                Active members struggle to stay organized, and candidates don't always get a fair evaluation. There's a
                better way.
              </p>
            </motion.div>
          </div>
        </section>

        <section id="features" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Key Features
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Everything You Need for Fair Recruitment
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg leading-relaxed">
                All candidate data in one place. Structured voting cycles. Statistical models to balance ratings and
                reduce bias. Built-in collaboration tools.
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {features.map((feature, i) => (
                <motion.div key={i} variants={item}>
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="size-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                How It Works
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Simple Process, Powerful Results</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg leading-relaxed">
                Get started in minutes and run your most organized recruitment season yet.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8 md:gap-12 relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 z-0"></div>

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
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative z-10 flex flex-col items-center text-center space-y-4"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold shadow-lg ring-4 ring-primary/20">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Benefits
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Built for Everyone in Recruitment</h2>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              {[
                {
                  title: "For Administrators",
                  description:
                    "Save time, reduce bias, and keep recruitment running smoothly with automated workflows and real-time oversight.",
                  icon: <Users className="size-6" />,
                },
                {
                  title: "For Active Members",
                  description:
                    "Simple interface to vote, comment, and deliberate fairly. Access everything from your phone during events.",
                  icon: <MessageSquare className="size-6" />,
                },
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10">
                    <CardContent className="p-6 flex flex-col h-full text-center">
                      <div className="size-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4 mx-auto">
                        {benefit.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-20 md:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Pricing
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Simple, Transparent Pricing
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg leading-relaxed">
                One price. Everything included. No tiers, no hidden fees, no confusion.
              </p>
            </motion.div>

            <PricingCard
              title="Per Recruitment Cycle"
              description="Pay only when you recruit. Everything your chapter needs for a successful recruitment season."
              price={99}
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
                    "~$1-2 per brother",
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
              className="text-center text-sm text-muted-foreground mt-8"
            >
              A cycle is created when you start a new recruitment period (e.g., "Fall 2025"). Most chapters run 1-2 cycles per year.
            </motion.p>
          </div>
        </section>

        <section id="testimonials" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Testimonials
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Trusted by Fraternities Nationwide</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg leading-relaxed">
                See what chapters are saying about their recruitment experience with GreekVote.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote:
                    "GreekVote cut our deliberation time in half and made voting fairer than ever. The Bayesian rating system eliminated the bias we used to see.",
                  author: "Marcus Thompson",
                  role: "Recruitment Chair, Alpha Chapter",
                  rating: 5,
                },
                {
                  quote:
                    "The mobile app made it so easy for brothers to vote and comment during events. We had 100% participation for the first time ever.",
                  author: "David Chen",
                  role: "President, Beta Chapter",
                  rating: 5,
                },
                {
                  quote:
                    "Being able to track attendance and see all candidate data in one place was a game-changer. No more lost spreadsheets or missing notes.",
                  author: "James Rodriguez",
                  role: "VP of Recruitment, Gamma Chapter",
                  rating: 5,
                },
                {
                  quote:
                    "The anonymous commenting feature allowed brothers to give honest feedback without fear of judgment. Our discussions were more productive.",
                  author: "Alex Johnson",
                  role: "Active Member, Delta Chapter",
                  rating: 5,
                },
                {
                  quote:
                    "Setup was incredibly easy. We imported our candidate list and were running our first vote within 30 minutes. The support team was fantastic.",
                  author: "Michael Patel",
                  role: "Recruitment Chair, Epsilon Chapter",
                  rating: 5,
                },
                {
                  quote:
                    "The analytics dashboard helped us identify which events were most effective and make data-driven decisions about our recruitment strategy.",
                  author: "Chris Williams",
                  role: "President, Zeta Chapter",
                  rating: 5,
                },
              ].map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex mb-4">
                        {Array(testimonial.rating)
                          .fill(0)
                          .map((_, j) => (
                            <Star key={j} className="size-4 text-yellow-500 fill-yellow-500" />
                          ))}
                      </div>
                      <p className="text-base mb-6 flex-grow leading-relaxed">{testimonial.quote}</p>
                      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/40">
                        <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                          {testimonial.author.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                FAQ
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg leading-relaxed">
                Find answers to common questions about GreekVote.
              </p>
            </motion.div>

            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "How quickly can we get started with GreekVote?",
                    answer:
                      "You can get started immediately! Create your account, import your candidate list (via CSV or manual entry), and you can run your first vote within minutes. Most chapters are fully set up within 30 minutes.",
                  },
                  {
                    question: "How does the Bayesian fairness algorithm work?",
                    answer:
                      "Our Bayesian rating system adjusts for individual voting patterns to reduce bias. If someone consistently rates higher or lower than others, the system normalizes their votes to ensure fair comparisons across all candidates.",
                  },
                  {
                    question: "Can we customize voting rounds and criteria?",
                    answer:
                      "You can create custom voting rounds, set different rating criteria, configure voting thresholds, and customize the entire recruitment workflow to match your chapter's specific process.",
                  },
                  {
                    question: "Is our candidate data secure and private?",
                    answer:
                      "Yes, security is our top priority. All data is encrypted in transit and at rest. We're compliant with data protection regulations, and you have full control over who can access your recruitment data. We never share your information with third parties.",
                  },
                  {
                    question: "Does GreekVote work on mobile devices?",
                    answer:
                      "Yes! GreekVote is mobile-first with a responsive design that works perfectly on phones and tablets. Brothers can vote, comment, and view candidate profiles during events without needing a laptop.",
                  },
                  {
                    question: "What kind of support do you provide?",
                    answer:
                      "We provide comprehensive support including setup assistance, training materials, video tutorials, and responsive customer support via email and chat. We're here to ensure your recruitment season runs smoothly.",
                  },
                  {
                    question: "Can we track attendance at recruitment events?",
                    answer:
                      "Yes! You can log candidate attendance at each event, bulk import attendance via CSV, and generate reports showing participation rates. This data automatically appears on candidate profiles.",
                  },
                  {
                    question: "What happens to our data after recruitment ends?",
                    answer:
                      "You maintain full control of your data. You can export all candidate information, voting records, and analytics at any time. You can also archive recruitment seasons while keeping the data accessible for future reference.",
                  },
                ].map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <AccordionItem value={`item-${i}`} className="border-b border-border/40 py-2">
                      <AccordionTrigger className="text-left font-medium hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section className="w-full py-20 md:py-32 bg-gradient-to-br from-primary to-accent text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-6 text-center"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
                Ready to Transform Your Recruitment?
              </h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/90 md:text-xl leading-relaxed">
                Join fraternities nationwide using GreekVote to run fair, organized recruitment. Get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button size="lg" variant="secondary" className="rounded-full h-12 px-8 text-base">
                  Get Started Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-8 text-base bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Book a Demo
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background/95 backdrop-blur-sm">
        <div className="container flex flex-col gap-8 px-4 py-10 md:px-6 lg:py-16">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-xl">
                <Image
                  src="/greekvote black.png"
                  alt="GreekVote"
                  width={120}
                  height={32}
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Modern recruitment management for professional fraternities. Run fair, organized, and stress-free
                recruitment.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-border/40 pt-8">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} GreekVote. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
