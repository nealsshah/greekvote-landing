import type React from "react"
import "@/app/globals.css"
import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "GreekVote - Recruitment Voting, Delibs, and Attendance",
  description:
    "Run Greek-letter recruitment with mobile voting, anonymous deliberations, attendance, candidate profiles, and fair round decisions in one place.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={GeistSans.className}>
        {children}
      </body>
    </html>
  )
}
