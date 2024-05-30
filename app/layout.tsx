import type { Metadata } from "next"
import { Inter as FontSans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import { cn } from "@/lib/utils"
import { GoogleTagManager } from "@next/third-parties/google"
import Background from "./components/background"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Portfolio API",
  icons: {
    icon: "/favicon.ico",
  },
  description:
    "Grupo de trabalho na disciplina de Aplicações Informaticas B. No ano letivo 2021/2022.",
  keywords: [
    "Portfolio",
    "Aplicações Informaticas",
    "Aplicações Informaticas B",
    "Next.js",
    "React",
    "TypeScript",
  ],
  robots: "index, follow",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Background>{children}</Background>
        </ThemeProvider>
        <GoogleTagManager gtmId="G-DK3BCFQJH0" />
      </body>
    </html>
  )
}
