"use client"

import { ArrowUpCircle } from "lucide-react"
import { Element, Link } from "react-scroll"
import { BackgroundParticles } from "./background-particles"

export const StartContent: React.FC = () => {
  return (
    <Element name="home" className="relative">
      <BackgroundParticles />

      <div className="flex z-10 flex-col w-full h-screen bg-black/50">
        <div className="z-10 flex flex-col mt-36 items-center justify-center mx-12 xl:mx-24 grow">
          <p className="text-white text-2xl md:text-3xl lg:text-5xl xl:text-7xl">
            Somos um grupo de trabalho de
            <p className="text-blue-500 lg:mt-4">Aplicações informaticas</p>
          </p>
          <button>Continuar</button>
        </div>
        <div className="flex w-full h-64 bg-gradient-to-b from-transparent to-blue-900 items-center justify-center">
          <Link
            to="participants"
            smooth={true}
            duration={500}
            className="mt-32 h-12 w-12 animate-bounce text-white cursor-pointer hover:text-blue-200"
          >
            <ArrowUpCircle />
          </Link>
        </div>
      </div>
    </Element>
  )
}
