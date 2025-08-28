import { Inter as FontSans } from "next/font/google"
import type { Metadata } from "next"
import "./globals.css"
import { GoogleTagManager } from "@next/third-parties/google"
import { ThemeProvider } from "next-themes"
import Background from "@/components/background"
import { TransparentHeader } from "@/components/header/transparent-header"
import { cn } from "@/lib/utils"

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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body
        className={cn(
          "bg-background min-h-screen overflow-x-hidden font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Background>
            <TransparentHeader />
            {children}
          </Background>
        </ThemeProvider>
        <GoogleTagManager gtmId="G-DK3BCFQJH0" />
      </body>
    </html>
  )
}
