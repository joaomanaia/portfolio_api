"use client"

import { Element } from "react-scroll"
import { ProjectTimelineItem } from "./project-timeline-item"
import { postItems } from "@/data/timeline/PostTimeLineData"

export const ProjectsContent: React.FC = () => {
  return (
    <Element name="projects" className="relative">
      <section className="flex flex-col z-10 w-full items-center justify-center px-8 lg:px-32 xl:px-48 2xl:px-96 py-32">
        <ul>
          {postItems.map((project) => (
            <ProjectTimelineItem key={project.route} project={project} />
          ))}
        </ul>
      </section>
    </Element>
  )
}
