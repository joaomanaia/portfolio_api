import { ProjectTimelineItem } from "@/app/(home)/_components/projects/project-timeline-item"
import { findUserByLinkName } from "@/common/common"
import { getPostsByUser } from "@/data/timeline/PostTimeLineData"
import type PostTimeLineDataType from "@/data/timeline/PostTimeLineDataType"
import { Metadata } from "next"
import { cache } from "react"

interface UserPageProps {
  params: Promise<{ uid: string }>
}

const getProjectsByUser = cache(async (uid: string): Promise<PostTimeLineDataType[]> => {
  const user = findUserByLinkName(uid)
  if (!user) return []

  return getPostsByUser(user)
})

export async function generateMetadata({ params }: UserPageProps): Promise<Metadata> {
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

export default async function UserPage({ params }: UserPageProps) {
  const { uid } = await params
  const projects = await getProjectsByUser(uid)

  return (
    <section className="px-8 lg:px-32 xl:px-48 2xl:px-96 py-10">
      {projects?.map((project) => (
        <ProjectTimelineItem key={project.route} project={project} />
      ))}
    </section>
  )
}
