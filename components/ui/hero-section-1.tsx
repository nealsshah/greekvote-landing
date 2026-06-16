'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const menuItems = [
    { name: 'Voting', href: '#voting' },
    { name: 'How it works', href: '#flow' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
]

const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 24)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className="fixed inset-x-0 top-0 z-40">
            <nav
                data-state={menuState ? 'active' : undefined}
                className="group px-3 pt-3 sm:px-4 sm:pt-4">
                <div
                    className={cn(
                        'mx-auto flex items-center justify-between gap-6 px-4 py-2.5 transition-[max-width,background-color,backdrop-filter,border-color,box-shadow] duration-500 ease-out lg:px-3 lg:py-2.5',
                        isScrolled
                            ? 'max-w-3xl rounded-full border border-foreground/[0.09] bg-background/90 backdrop-blur-xl supports-[backdrop-filter]:bg-background/75'
                            : 'max-w-6xl border border-transparent'
                    )}>
                    <Link href="/" aria-label="GreekVote home" className="flex min-h-11 items-center">
                        <span className="text-[15px] font-semibold tracking-[-0.01em] text-foreground">
                            GreekVote
                        </span>
                    </Link>

                    <div className="absolute inset-0 m-auto hidden h-fit w-fit lg:block">
                        <ul className="flex items-center gap-9 text-[13px] font-medium text-foreground/65">
                            {menuItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="relative transition-colors duration-200 hover:text-foreground">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="hidden items-center gap-2 lg:flex">
                        <Button
                            asChild
                            variant="ghost"
                            size="sm"
                            className="h-9 rounded-full px-4 text-[13px] font-medium text-foreground/70 hover:bg-foreground/5 hover:text-foreground">
                            <Link href="/login">Log in</Link>
                        </Button>
                        <Button
                            asChild
                            size="sm"
                            className="h-9 rounded-full bg-accent px-4 text-[13px] font-medium text-foreground hover:bg-accent/90">
                            <Link href="/signup">
                                Start free cycle
                                <ArrowRight className="size-3.5 -mr-0.5" />
                            </Link>
                        </Button>
                    </div>

                    <button
                        onClick={() => setMenuState(!menuState)}
                        aria-label={menuState ? 'Close menu' : 'Open menu'}
                        aria-expanded={menuState}
                        className="flex size-11 items-center justify-center rounded-full text-foreground/80 lg:hidden">
                        {menuState ? <X className="size-5" /> : <Menu className="size-5" />}
                    </button>
                </div>

                {menuState && (
                    <div className="mx-auto mt-2 max-w-6xl rounded-xl border border-foreground/[0.09] bg-background/95 p-5 backdrop-blur-xl lg:hidden">
                        <ul className="flex flex-col gap-1">
                            {menuItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        onClick={() => setMenuState(false)}
                                        className="block rounded-lg px-3 py-2.5 text-[15px] font-medium text-foreground/80 hover:bg-foreground/5">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="hairline my-4" />
                        <div className="flex flex-col gap-2">
                            <Button
                                asChild
                                variant="ghost"
                                size="sm"
                                className="h-11 justify-start rounded-lg px-3 text-[15px] font-medium hover:bg-foreground/5">
                                <Link href="/login" onClick={() => setMenuState(false)}>
                                    Log in
                                </Link>
                            </Button>
                            <Button
                                asChild
                                size="sm"
                                className="h-11 rounded-lg bg-accent px-3 text-[15px] font-medium text-foreground hover:bg-accent/90">
                                <Link href="/signup" onClick={() => setMenuState(false)}>
                                    Start free cycle
                                </Link>
                            </Button>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}

export function HeroSection() {
    return (
        <>
            <HeroHeader />
            <section className="relative overflow-hidden border-b border-foreground/[0.06] pt-24 pb-14 sm:pt-28 md:pt-[7.5rem] md:pb-[4.5rem]">
                <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
                    <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
                        <div className="lg:col-span-7">
                            <p className="max-w-md text-[14px] leading-[1.55] text-foreground/68">
                                First cycle free. No card. Built for the chair
                                trying to get a clean answer before the next
                                chapter meeting.
                            </p>

                            <h1 className="mt-5 max-w-4xl text-balance break-words text-[clamp(2.25rem,7vw,4.4rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-foreground">
                                Run rush from the room, not a rebuilt Sheet.
                            </h1>

                            <p className="mt-6 max-w-2xl text-pretty text-[17px] leading-[1.6] text-foreground/70 sm:text-[18px]">
                                GreekVote puts voting, deliberations,
                                attendance, candidate profiles, and round
                                decisions in one mobile-first workflow.
                            </p>

                            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                                <Button
                                    asChild
                                    size="lg"
                                    className="group h-12 rounded-full bg-accent px-6 text-[14px] font-semibold text-foreground hover:bg-accent/90">
                                    <Link href="/signup">
                                        Start your free cycle
                                        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="lg"
                                    variant="ghost"
                                    className="h-12 rounded-full px-6 text-[14px] font-semibold text-foreground/82 hover:bg-foreground/5 hover:text-foreground">
                                    <Link href="https://cal.com/nealsshah/30min">Talk through your process</Link>
                                </Button>
                            </div>
                        </div>

                        <aside className="hidden border-y border-foreground/[0.1] py-5 sm:block lg:col-span-4 lg:col-start-9">
                            <p className="text-[13px] font-semibold text-foreground">
                                What changes by the first vote
                            </p>
                            <dl className="mt-5 space-y-4">
                                {[
                                    ["Roster", "PNMs, photos, fields, and attendance stay together."],
                                    ["Voting", "Strict and easy raters get normalized before rankings."],
                                    ["Delibs", "Anonymous comments stay anonymous, even to admins."],
                                ].map(([term, detail]) => (
                                    <div key={term} className="grid grid-cols-[5rem_1fr] gap-3">
                                        <dt className="text-[13px] font-medium text-accent">{term}</dt>
                                        <dd className="text-pretty text-[13.5px] leading-[1.55] text-foreground/68">
                                            {detail}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </aside>
                    </div>

                    <div className="relative mx-auto mt-10 sm:mt-12 md:mt-14">
                        <div className="product-frame relative overflow-hidden rounded-xl border border-foreground/[0.1] p-1.5 sm:p-2">
                            <Image
                                src="/emily.png"
                                alt="GreekVote candidate profile with live vote stats and round breakdown"
                                width={2700}
                                height={1440}
                                className="block w-full rounded-[14px] sm:rounded-[18px]"
                                priority
                                sizes="(min-width: 1024px) 1100px, 100vw"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
