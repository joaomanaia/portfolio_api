import { UserType } from "@/common/common"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { formatDistance } from "date-fns"
import { pt } from "date-fns/locale/pt"
import getNow from "@/lib/getNow"

interface ProjectAuthorsProps {
  authors: UserType[]
  postDate: Date
  horizontal?: boolean
}

export const ProjectAuthors: React.FC<ProjectAuthorsProps> = ({
  authors,
  postDate,
  horizontal,
}) => {
  const now = getNow()
  const date = new Date(postDate)
  const published = formatDistance(date, now, { addSuffix: true, locale: pt })

  return (
    <div className="flex items-center">
      <AuthorsImages authors={authors} horizontal={horizontal} />

      <div className="ml-4">
        <AuthorsNames authors={authors} />
        <time
          dateTime={date.toISOString()}
          itemProp="datePublished"
          className="text-foreground/50 mb-4"
        >
          {published}
        </time>
      </div>
    </div>
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
          <Link href={`/${author.linkName}`}>{author.name}</Link>
          {index < authors.length - 1 && ", "}
        </React.Fragment>
      ))}
    </p>
  )
}

interface AuthorsImagesProps {
  authors: UserType[]
  horizontal?: boolean
}

const AuthorsImages: React.FC<AuthorsImagesProps> = ({ authors, horizontal }) => {
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
    <div className={cn(horizontal ? "flex -space-x-4" : "w-11 h-11 -space-y-4")}>
      {authors.map((author) => (
        <div
          key={author.linkName}
          className="relative w-11 h-11 border-2 border-primary rounded-full"
        >
          <Link href={`/${author.linkName}`}>
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
