"use client"

import { Element } from "react-scroll"
import { postItems } from "@/data/timeline/PostTimeLineData"
import { ProjectTimelineItem } from "./project-timeline-item"

export const ProjectsContent: React.FC = () => {
  return (
    <Element name="projects" className="relative">
      <section className="container mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-4 py-32 md:px-0">
        <ul className="w-full">
          {postItems.map((project) => (
            <ProjectTimelineItem key={project.route} project={project} />
          ))}
        </ul>
      </section>
    </Element>
  )
}
