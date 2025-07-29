"use client"

import Link from "next/link"
import type { Route } from "next"
import { Element } from "react-scroll"
import { allUsers, joaomanaia, joaoneves, tiagocaetano } from "@/common/common"
import { ScrollLinkButton } from "../scroll-link-button"
import { ParticipantItem } from "./participant-item"

export const ParticipantsContent: React.FC = () => {
  return (
    <Element name="participants" className="relative">
      <div className="from-background/50 absolute inset-0 h-20 w-full bg-gradient-to-b to-transparent lg:h-40" />
      <section className="container mx-auto flex h-screen w-full flex-col px-4 md:px-0">
        <ul className="mt-24 flex flex-col items-center gap-2 md:flex-row md:justify-around md:gap-4 lg:mt-44 lg:gap-8">
          {allUsers.map((user) => (
            <ParticipantItem key={user.linkName} user={user} />
          ))}
        </ul>
        <div className="my-4 mt-16 flex flex-col gap-8 self-center lg:flex-row lg:gap-16">
          <p className="text-foreground flex flex-col self-center text-center text-4xl font-semibold lg:text-4xl xl:text-5xl">
            <span className="w-max">O nosso</span>
            <span className="text-primary">Grupo</span>
          </p>
          <div className="flex flex-col gap-8 md:gap-4">
            <p className="text-foreground/80 text-justify md:text-lg xl:text-xl">
              Constituido por 3 elementos,{" "}
              <TextWithLink link={joaoneves.linkName}>João Neves</TextWithLink>,{" "}
              <TextWithLink link={joaomanaia.linkName}>João Manaia</TextWithLink> e{" "}
              <TextWithLink link={tiagocaetano.linkName}>Tiago Caetano</TextWithLink> este é o
              melhor grupo da turma!
              <br />
              Criamos projetos originais como este site. Se viram algum site parecido com este foram
              eles é que nos copiaram.
            </p>
            <ScrollLinkButton to="projects" className="self-center lg:self-start">
              Ver Projetos
            </ScrollLinkButton>
          </div>
        </div>
      </section>
    </Element>
  )
}

function TextWithLink({ link, children }: { link: Route; children: React.ReactNode }) {
  return (
    <Link href={link} className="link hover:text-foreground font-semibold">
      {children}
    </Link>
  )
}
