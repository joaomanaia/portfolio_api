import { UserType } from "@/common/common"
import { Button } from "@/components/ui/button"
import PostTimeLineDataType from "@/data/timeline/PostTimeLineDataType"
import Image from "next/image"
import Link from "next/link"
import React from "react"

interface ProjectTimelineItemProps {
  project: PostTimeLineDataType
}

export const ProjectTimelineItem: React.FC<ProjectTimelineItemProps> = ({ project }) => {
  return (
    <li className="flex flex-col items-start justify-center w-full h-auto">
      <div className="flex">
        <AuthorsImages authors={project.authors} />

        <div className="ml-4">
          <p className="text-foreground/50">{project.postDate}</p>
          <AuthorsNames authors={project.authors} />
        </div>
      </div>

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
          <Button className="mt-4">Ver mais informações</Button>
        </div>
      </div>
    </li>
  )
}

interface AuthorsNamesProps {
  authors: UserType[]
}

const AuthorsNames: React.FC<AuthorsNamesProps> = ({ authors }) => {
  return (
    <p className="text-foreground text-lg">
      {authors.map((author, index) => (
        <React.Fragment key={author.linkName}>
          <Link href={author.linkName}>{author.name}</Link>
          {index < authors.length - 1 && ", "}
        </React.Fragment>
      ))}
    </p>
  )
}

interface AuthorsImagesProps {
  authors: UserType[]
}

const AuthorsImages: React.FC<AuthorsImagesProps> = ({ authors }) => {
  if (authors.length == 1) {
    return (
      <Link href={authors[0].linkName} className="relative w-11 h-11">
        <Image
          className="rounded-full"
          src={authors[0].photoUrl}
          alt={authors[0].name}
          layout="fill"
        />
      </Link>
    )
  }

  return (
    <div className="w-11 h-11 -space-y-4">
      {authors.map((author) => (
        <div
          key={author.linkName}
          className="relative w-11 h-11 border-2 border-primary rounded-full"
        >
          <Link href={author.linkName}>
            <Image
              className="rounded-full"
              src={author.photoUrl}
              alt={author.name}
              layout="fill"
              objectFit="cover"
            />
          </Link>
        </div>
      ))}
    </div>
  )
}
