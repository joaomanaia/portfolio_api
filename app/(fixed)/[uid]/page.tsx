import { cache } from "react"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ProjectTimelineItem } from "@/app/(home)/_components/projects/project-timeline-item"
import { allUsers, findUserByLinkName } from "@/common/common"
import { getPostsByUser } from "@/data/timeline/PostTimeLineData"
import type PostTimeLineDataType from "@/data/timeline/PostTimeLineDataType"

const getProjectsByUser = cache(async (uid: string): Promise<PostTimeLineDataType[]> => {
  const user = findUserByLinkName(uid)
  if (!user) return notFound()

  return getPostsByUser(user)
})

export async function generateMetadata({ params }: PageProps<"/[uid]">): Promise<Metadata> {
  const { uid } = await params
  const user = findUserByLinkName(uid)

  const userPhoto = user?.photoUrl ? [user?.photoUrl] : []

  return {
    title: user?.name,
    openGraph: {
      title: user?.name,
      images: userPhoto,
    },
  }
}

export async function generateStaticParams() {
  return allUsers.map((user) => ({
    uid: user.linkName,
  }))
}

export default async function UserPage({ params }: PageProps<"/[uid]">) {
  const { uid } = await params
  const projects = await getProjectsByUser(uid)

  return (
    <section>
      {projects.map((project) => (
        <ProjectTimelineItem key={project.route} project={project} />
      ))}
    </section>
  )
}
