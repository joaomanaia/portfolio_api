"use client"

import { ArrowUpCircle } from "lucide-react"
import { Element, Link } from "react-scroll"
import { BackgroundParticles } from "./background-particles"
import { Button } from "@/components/ui/button"

export const StartContent: React.FC = () => {
  return (
    <Element name="home" className="relative">
      <BackgroundParticles />

      <section className="flex z-10 flex-col w-full h-screen bg-background/50">
        <div className="z-10 flex flex-col mt-36 items-center justify-center mx-12 space-y-8 xl:mx-24 grow">
          <p className="flex flex-col text-foreground text-2xl md:text-3xl lg:text-5xl xl:text-7xl">
            Somos um grupo de trabalho de
            <span className="text-primary lg:mt-4">Aplicações informaticas</span>
          </p>
          <ScrollLinkButton to="participants">Ver Participantes</ScrollLinkButton>
        </div>
        <Link
            to="participants"
            smooth={true}
            duration={500}
            className=" self-center mt-32 mb-8 h-12 w-12 animate-bounce text-foreground hover:text-foreground/80 transition cursor-pointer"
          >
            <ArrowUpCircle className="h-12 w-12 rotate-180" />
          </Link>
      </section>
    </Element>
  )
}

type ScrollLinkButtonType = {
  to: string
  offset?: number | undefined
  children?: React.ReactNode
}

const ScrollLinkButton: React.FC<ScrollLinkButtonType> = ({ to, offset, children }) => {
  return (
    <Button asChild className="w-40">
      <Link
        activeClass="active"
        type="submit"
        to={to}
        spy={true}
        smooth={true}
        offset={offset}
        duration={500}
        className="cursor-pointer"
      >
        {children}
      </Link>
    </Button>
  )
}
