import { UserType } from "@/common/common"
import { Button } from "@/components/ui/button"
import PostTimeLineDataType from "@/data/timeline/PostTimeLineDataType"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { ProjectAuthors } from "./project-authors"

interface ProjectTimelineItemProps {
  project: PostTimeLineDataType
}

export const ProjectTimelineItem: React.FC<ProjectTimelineItemProps> = ({ project }) => {
  return (
    <li className="flex flex-col items-start justify-center w-full h-auto">
      <ProjectAuthors authors={project.authors} postDate={project.postDate} />

      <div className="grow flex ml-5 mt-1 w-full">
        <div className={`w-1 h-auto bg-primary mb-4 rounded-2xl`}></div>
        <div className="rounded-2xl bg-accent text-accent-foreground p-2 ml-8 w-full mx-12 mb-8">
          <div className="relative w-full aspect-video">
            {project.videoUrl ? (
              <iframe
                className="absolute w-full h-full rounded-2xl"
                src={project.videoUrl}
                typeof="text/html"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <Image
                src={project.postImage}
                alt={project.postDescription}
                className="rounded-2xl"
                layout="fill"
              />
            )}
          </div>
          <p className="text-xl mt-4">{project.postTitle}</p>
          <p className="mt-2">{project.postDescription}</p>
          <Button className="mt-4" asChild>
            <Link href={`/projetos/${project.route}`}>Ver mais informações</Link>
          </Button>
        </div>
      </div>
    </li>
  )
}
