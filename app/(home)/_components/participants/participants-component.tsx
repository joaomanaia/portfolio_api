"use client"

import { Element } from "react-scroll"
import { ParticipantItem } from "./participant-item"
import { allUsers } from "@/common/common"
import { ScrollLinkButton } from "../scroll-link-button"

export const ParticipantsContent: React.FC = () => {
  return (
    <Element name="participants" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-transparent w-full h-20 lg:h-40" />
      <section className="flex flex-col w-full h-screen">
        <ul className="flex mx-2 lg:mx-32 xl:mx-64 lg:space-x-12 xl:space-x-16 2xl:space-x-24 space-x-1.5 flex-col mt-24 lg:mt-44 lg:flex-row items-center space-y-2 lg:space-y-0 lg:justify-around px-4">
          {allUsers.map((user) => (
            <ParticipantItem key={user.linkName} user={user} />
          ))}
        </ul>
        <div className="grid grid-rows-3 grid-flow-col gap-x-20 gap-y-4 grow mx-8 lg:mx-32 xl:mx-64 my-4">
          <p className="lg:row-span-3 flex flex-col items-center justify-center text-foreground text-4xl lg:text-5xl xl:text-7xl">
            O nosso
            <span className="text-primary">Grupo</span>
          </p>
          {/* O col-span controlla o quão grande o comprimento vai ocupar */}
          <h2 className="lg:row-span-2 lg:col-span-7 text-lg xl:text-xl flex lg:items-end">
            Constituido por 3 elementos, João Neves, João Manaia e Tiago Caetano este é o melhor
            grupo da turma!
            <br />
            Criamos projetos originais como este site. Se viram algum site parecido com este foram
            eles é que nos copiaram.
          </h2>
          <ScrollLinkButton
            to="projects"
            className="lg:col-span-7 place-self-center lg:place-self-start"
          >
            Ver Projetos
          </ScrollLinkButton>
        </div>
      </section>
    </Element>
  )
}
