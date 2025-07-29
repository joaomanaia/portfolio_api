"use client"

import { ArrowUpCircle } from "lucide-react"
import { Element, Link } from "react-scroll"
import { BackgroundParticles } from "./background-particles"
import { ScrollLinkButton } from "./scroll-link-button"

export const StartContent: React.FC = () => {
  return (
    <Element name="home" className="relative">
      <BackgroundParticles />

      <section className="bg-background/50 z-10 flex h-screen w-full flex-col">
        <div className="z-10 mx-12 mt-36 flex grow flex-col items-center justify-center space-y-8 text-center xl:mx-24">
          <h1 className="text-foreground flex flex-col text-3xl md:text-4xl lg:text-5xl xl:text-7xl">
            Somos um grupo de trabalho de
            <br />
            <span className="text-primary font-semibold lg:mt-4">Aplicações Informaticas</span>
          </h1>
          <ScrollLinkButton to="participants" size="lg">
            Ver Participantes
          </ScrollLinkButton>
        </div>
        <Link
          to="participants"
          smooth={true}
          duration={500}
          className="text-foreground hover:text-foreground/80 mt-32 mb-8 h-12 w-12 animate-bounce cursor-pointer self-center transition"
        >
          <ArrowUpCircle className="h-12 w-12 rotate-180" />
        </Link>
      </section>
    </Element>
  )
}
