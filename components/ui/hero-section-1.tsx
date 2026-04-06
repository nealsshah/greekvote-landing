'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const menuItems = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
]

const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-20 w-full px-2 group">
                <div className={cn(
                    'mx-auto mt-2 max-w-6xl px-6 transition-all duration-500 lg:px-12',
                    isScrolled && 'bg-background/80 max-w-4xl rounded-full border backdrop-blur-xl lg:px-5'
                )}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Image
                                    src="/greekvote black.png"
                                    alt="GreekVote"
                                    width={120}
                                    height={32}
                                    className="h-7 w-auto dark:invert"
                                    priority
                                />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm font-medium tracking-wide">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="text-foreground/50 hover:text-foreground block duration-300 uppercase text-xs tracking-[0.15em]">
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-2xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-muted-foreground hover:text-foreground block duration-150 uppercase text-sm tracking-[0.15em]">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    variant="ghost"
                                    size="sm"
                                    className={cn("text-xs uppercase tracking-[0.15em] font-medium", isScrolled && 'lg:hidden')}>
                                    <Link href="/login">
                                        <span>Log in</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn(
                                        "bg-foreground text-background hover:bg-foreground/90 rounded-full text-xs uppercase tracking-[0.15em] font-medium px-5",
                                        isScrolled && 'lg:hidden'
                                    )}>
                                    <Link href="/signup">
                                        <span>Get Started</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn(
                                        "bg-foreground text-background hover:bg-foreground/90 rounded-full text-xs uppercase tracking-[0.15em] font-medium px-5",
                                        isScrolled ? 'lg:inline-flex' : 'hidden'
                                    )}>
                                    <Link href="/signup">
                                        <span>Get Started</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <section className="relative min-h-[100vh] flex flex-col justify-center">
                    {/* Subtle radial gradient backdrop */}
                    <div
                        aria-hidden
                        className="absolute inset-0 -z-10"
                        style={{
                            background: 'radial-gradient(ellipse 80% 60% at 70% 40%, hsl(258 40% 92% / 0.5) 0%, transparent 70%)',
                        }}
                    />

                    <div className="mx-auto w-full max-w-7xl px-6 lg:px-12 pt-32 pb-16 md:pt-40 md:pb-24">
                        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                            {/* Left: Text content */}
                            <div className="lg:col-span-6 xl:col-span-5">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <span className="uppercase text-xs tracking-[0.25em] font-medium text-foreground/40 block mb-8">
                                        Recruitment Management Platform
                                    </span>
                                </motion.div>

                                <motion.h1
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                                    className="font-display text-[clamp(3rem,7vw,5.5rem)] leading-[0.9] tracking-tight mb-8"
                                >
                                    Fraternity{' '}
                                    <br className="hidden sm:block" />
                                    Recruitment,{' '}
                                    <br />
                                    <span className="italic text-accent">Simplified.</span>
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                    className="text-muted-foreground text-lg leading-relaxed max-w-md mb-10"
                                >
                                    The modern platform for professional fraternities. Fair voting, organized events, and stress-free recruitment — all in one place.
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                                    className="flex flex-col sm:flex-row gap-4"
                                >
                                    <Button
                                        asChild
                                        size="lg"
                                        className="bg-foreground text-background hover:bg-foreground/90 rounded-full h-13 px-8 text-sm uppercase tracking-[0.1em] font-semibold group"
                                    >
                                        <Link href="/signup" className="flex items-center gap-2">
                                            Get Started
                                            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </Button>
                                    <Button
                                        asChild
                                        size="lg"
                                        variant="outline"
                                        className="rounded-full h-13 px-8 text-sm uppercase tracking-[0.1em] font-semibold border-foreground/15 hover:bg-foreground/5"
                                    >
                                        <Link href="#">
                                            Book a Demo
                                        </Link>
                                    </Button>
                                </motion.div>
                            </div>

                            {/* Right: Dashboard image */}
                            <motion.div
                                initial={{ opacity: 0, x: 40, rotate: 1 }}
                                animate={{ opacity: 1, x: 0, rotate: 1 }}
                                transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                className="lg:col-span-6 xl:col-span-7 relative"
                            >
                                <div className="relative">
                                    {/* Shadow and depth */}
                                    <div className="absolute -inset-4 bg-gradient-to-br from-accent/5 to-primary/5 rounded-3xl blur-2xl" />

                                    <div className="relative bg-foreground/[0.03] border border-foreground/[0.08] rounded-2xl p-3 shadow-2xl shadow-foreground/[0.06] rotate-1 hover:rotate-0 transition-transform duration-700">
                                        <Image
                                            className="rounded-xl w-full"
                                            src="/emily.png"
                                            alt="GreekVote Dashboard"
                                            width={2700}
                                            height={1440}
                                            priority
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Scroll indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
                    >
                        <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/25 font-medium">Scroll</span>
                        <motion.div
                            animate={{ y: [0, 6, 0] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                            className="w-px h-8 bg-gradient-to-b from-foreground/20 to-transparent"
                        />
                    </motion.div>
                </section>
            </main>
        </>
    )
}
