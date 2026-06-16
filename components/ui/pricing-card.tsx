import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const included = [
    "Unlimited PNMs",
    "Unlimited active members",
    "Bayesian-fair voting",
    "Anonymous & attributed comments",
    "Round, event & attendance management",
    "Photo gallery, CSV import / export",
    "Mobile-first across every surface",
    "Full data export, forever",
]

export function PricingCard() {
    return (
        <div>
            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[1fr_1.25fr] md:items-end">
                <h2 className="text-balance text-[clamp(1.875rem,4.4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.025em]">
                    Pricing that survives the e-board question.
                </h2>
                <p className="text-pretty text-[17px] leading-[1.6] text-foreground/68">
                    No tiers. No feature gating. No per-seat math. One flat
                    rate per recruitment cycle — and the first one&apos;s on us.
                </p>
            </div>

            <div className="relative mx-auto mt-12 max-w-5xl overflow-hidden rounded-xl border border-foreground/[0.1] bg-card">
                <div className="relative px-7 pt-10 pb-9 sm:px-12 sm:pt-12 sm:pb-10">
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-x-0 top-0 h-px"
                        style={{
                            background:
                                "linear-gradient(90deg, transparent, hsl(var(--accent) / 0.55), transparent)",
                        }}
                    />

                    <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
                        <div>
                            <p className="text-[14px] font-semibold text-accent">
                                Your first cycle
                            </p>
                            <div className="mt-3 flex items-baseline gap-3">
                                <span className="text-[64px] font-semibold leading-none tracking-[-0.04em] text-foreground sm:text-[80px]">
                                    $0
                                </span>
                                <span className="text-[26px] font-medium leading-none text-foreground/40 line-through decoration-accent/50 decoration-[2px]">
                                    $199
                                </span>
                            </div>
                            <p className="mt-3 text-[14px] text-foreground/55">
                                Then $199 per cycle. No card needed to start.
                            </p>
                        </div>

                        <Button
                            asChild
                            size="lg"
                            className="group h-12 rounded-full bg-accent px-6 text-[14px] font-semibold text-foreground hover:bg-accent/90"
                        >
                            <Link href="/signup">
                                Start your free cycle
                                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="border-t border-foreground/[0.08] bg-foreground/[0.018] px-7 py-8 sm:px-12 sm:py-9">
                    <p className="mb-5 text-[13px] font-semibold text-foreground/62">
                        Every cycle includes
                    </p>
                    <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                        {included.map((item) => (
                            <li
                                key={item}
                                className="flex items-start gap-2.5 text-[14.5px] text-foreground/75"
                            >
                                <span className="mt-[5px] inline-flex size-3.5 shrink-0 items-center justify-center rounded-full bg-accent/12 text-accent">
                                    <Check className="size-2.5" strokeWidth={2.5} />
                                </span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <p className="mx-auto mt-8 max-w-2xl text-center text-[13.5px] leading-[1.6] text-foreground/55">
                A cycle is created when an admin starts a new recruitment
                period (e.g. <span className="text-foreground/70">Fall 2025</span>). Most chapters run 1–2 cycles per year.
            </p>
        </div>
    )
}
