import React from "react"
import Image from "next/image"
import Link from "next/link"
import { formatDistance } from "date-fns"
import { pt } from "date-fns/locale/pt"
import { UserType } from "@/common/common"
import getNow from "@/lib/getNow"
import { cn } from "@/lib/utils"

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
    <div className={cn("flex items-center gap-x-4 gap-y-2", horizontal && "flex-wrap")}>
      <AuthorsImages authors={authors} horizontal={horizontal} />

      <div>
        <AuthorsNames authors={authors} />
        <time
          dateTime={date.toISOString()}
          itemProp="datePublished"
          className="text-foreground/50 mb-4"
        >
          Publicado {published}
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
          <Link className="link" href={`/${author.linkName}`}>
            {author.name}
          </Link>
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
      <Link href={authors[0].linkName} className="relative h-11 w-11">
        <Image className="rounded-full" src={authors[0].photoUrl} alt={authors[0].name} fill />
      </Link>
    )
  }

  return (
    <div className={cn(horizontal ? "flex -space-x-4" : "h-11 w-11 -space-y-4")}>
      {authors.map((author) => (
        <div
          key={author.linkName}
          className="border-primary relative h-11 w-11 rounded-full border-2 transition-transform hover:z-10 hover:scale-105 hover:brightness-110"
        >
          <Link href={`/${author.linkName}`}>
            <Image
              className="rounded-full object-cover"
              src={author.photoUrl}
              alt={author.name}
              fill
            />
          </Link>
        </div>
      ))}
    </div>
  )
}
