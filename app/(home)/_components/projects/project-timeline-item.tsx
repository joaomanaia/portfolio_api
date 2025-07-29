import { Button } from "@/components/ui/button"
import PostTimeLineDataType from "@/data/timeline/PostTimeLineDataType"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { ProjectAuthors } from "./project-authors"
import { YouTubeEmbed } from "@next/third-parties/google"

interface ProjectTimelineItemProps {
  project: PostTimeLineDataType
}

export const ProjectTimelineItem: React.FC<ProjectTimelineItemProps> = ({ project }) => {
  return (
    <li className="w-full flex flex-col items-start justify-center h-auto">
      <ProjectAuthors authors={project.authors} postDate={project.postDate} />

      <div className="grow flex ml-5 mt-1 w-full">
        <div className={`w-1 h-auto bg-primary mb-4 rounded-2xl`}></div>
        <div className="rounded-2xl bg-accent text-accent-foreground p-2 ml-8 w-full mx-12 mb-8">
          <div className="relative w-full aspect-video">
            {project.videoId ? (
              <YouTubeEmbed
                videoid={project.videoId}
                params="controls=0"
                style="position: absolute; min-width: 100%; width: 100%; height: 100%; border-radius: 1rem;"
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
