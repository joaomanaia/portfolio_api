import React from "react"
import dynamic from "next/dynamic"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import PostTimeLineDataType from "@/data/timeline/PostTimeLineDataType"
import { ProjectAuthors } from "./project-authors"

interface ProjectTimelineItemProps {
  project: PostTimeLineDataType
}

const YouTubeEmbed = dynamic(() =>
  import("@next/third-parties/google").then((mod) => mod.YouTubeEmbed)
)
const Image = dynamic(() => import("next/image"))

export const ProjectTimelineItem: React.FC<ProjectTimelineItemProps> = ({ project }) => {
  return (
    <li className="flex h-auto w-full flex-col items-start justify-center">
      <ProjectAuthors authors={project.authors} postDate={project.postDate} />

      <div className="mt-1 ml-5 flex w-full grow">
        <div className="bg-primary mb-4 h-auto w-1 rounded-full" />
        <Card className="mx-12 mb-8 ml-8 w-full p-2 pb-6">
          <div className="relative aspect-video w-full">
            {project.videoId ? (
              <YouTubeEmbed
                videoid={project.videoId}
                params="controls=0"
                style="position: absolute; min-width: 100%; width: 100%; height: 100%; border-radius: calc(var(--radius) /* 0.25rem = 4px */ + 4px);"
              />
            ) : (
              <Image
                src={project.postImage}
                alt={project.postDescription.slice(0, 50)}
                className="rounded-2xl"
                fill
              />
            )}
          </div>
          <CardHeader className="px-2 md:px-6">
            <CardTitle>{project.postTitle}</CardTitle>
            <CardDescription>{project.postDescription}</CardDescription>
          </CardHeader>
          <CardFooter className="px-2 md:px-6">
            <Button asChild>
              <Link href={`/projetos/${project.route}`}>Ver mais informações</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </li>
  )
}
