import type React from "react"
import "@/app/globals.css"
import { Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google"
import type { Metadata } from "next"

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
})

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "GreekVote - Fraternity Recruitment, Simplified",
  description:
    "Modern recruitment management platform for professional fraternities. Run fair, transparent, and stress-free recruitment with voting, deliberations, and candidate tracking.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${plusJakarta.variable} ${instrumentSerif.variable} ${plusJakarta.className}`}>
        {children}
      </body>
    </html>
  )
}
