"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

interface PricingFeature {
    title: string;
    items: string[];
}

interface PricingCardProps {
    title: string;
    description: string;
    price: number;
    originalPrice?: number;
    priceLabel?: string;
    features: PricingFeature[];
    buttonText?: string;
    onButtonClick?: () => void;
}

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
    }),
};

export function PricingCard({
    title,
    description,
    price,
    originalPrice,
    priceLabel = "one-time payment",
    features,
    buttonText = "Get Started",
    onButtonClick,
}: PricingCardProps) {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.2 });
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (isInView && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [isInView, hasAnimated]);

    return (
        <motion.div
            ref={containerRef}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
            className="mx-auto w-full max-w-5xl"
        >
            <motion.div
                variants={fadeUp}
                custom={0}
                className="border border-foreground/[0.08] rounded-2xl overflow-hidden hover:border-accent/20 transition-colors duration-500"
            >
                <div className="flex flex-col lg:flex-row">
                    {/* Left: Price */}
                    <motion.div
                        className="flex flex-col justify-between p-8 lg:w-2/5 lg:p-12"
                        variants={fadeUp}
                        custom={0.1}
                    >
                        <div>
                            <span className="uppercase text-[11px] tracking-[0.2em] font-semibold text-foreground/35 block mb-3">
                                {title}
                            </span>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                                {description}
                            </p>

                            <div className="flex items-baseline gap-2 mb-2">
                                <span className="font-display text-6xl md:text-7xl tracking-tight">${price}</span>
                                {originalPrice && (
                                    <span className="text-xl text-muted-foreground line-through">
                                        ${originalPrice}
                                    </span>
                                )}
                            </div>
                            <span className="text-sm text-muted-foreground">
                                {priceLabel}
                            </span>
                        </div>

                        <motion.div className="mt-10" variants={fadeUp} custom={0.2}>
                            <Button
                                className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-full h-12 text-sm uppercase tracking-[0.1em] font-semibold group"
                                size="lg"
                                onClick={onButtonClick}
                            >
                                <span className="flex items-center gap-2">
                                    {buttonText}
                                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                                </span>
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Vertical divider */}
                    <div className="w-px bg-foreground/[0.06] hidden lg:block" />
                    <div className="h-px bg-foreground/[0.06] lg:hidden" />

                    {/* Right: Features */}
                    <motion.div
                        className="p-8 lg:w-3/5 lg:p-12 bg-foreground/[0.015]"
                        variants={fadeUp}
                        custom={0.15}
                    >
                        <div className="space-y-8">
                            {features.map((feature, featureIndex) => (
                                <div key={featureIndex}>
                                    <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-foreground/35 mb-5">
                                        {feature.title}
                                    </h3>
                                    <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
                                        {feature.items.map((item, index) => (
                                            <motion.li
                                                key={index}
                                                className="flex items-center gap-3"
                                                variants={fadeUp}
                                                custom={0.2 + index * 0.05}
                                            >
                                                <div className="size-5 rounded-full border border-foreground/10 flex items-center justify-center flex-shrink-0">
                                                    <Check className="size-3 text-accent" />
                                                </div>
                                                <span className="text-sm text-foreground/70">{item}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                    {featureIndex < features.length - 1 && (
                                        <div className="h-px bg-foreground/[0.06] mt-8" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
}
