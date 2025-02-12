import "./globals.css"
import { Poppins } from "next/font/google"
import type { ReactNode } from "react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
})

export const metadata = {
  title: "Magic Navigation Menu Indicator",
  description: "Created with Next.js",
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}

