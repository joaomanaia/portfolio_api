import { ProjectTimelineItem } from "@/app/(home)/components/projects/project-timeline-item"
import { findUserByLinkName } from "@/common/common"
import { getPostsByUser } from "@/data/timeline/PostTimeLineData"
import PostTimeLineDataType from "@/data/timeline/PostTimeLineDataType"
import { Metadata } from "next"

const getProjectsByUser = async (uid: string): Promise<PostTimeLineDataType[]> => {
  const user = findUserByLinkName(uid)
  if (!user) return []

  return getPostsByUser(user)
}

export async function generateMetadata({ params }: { params: { uid: string } }): Promise<Metadata> {
  const user = findUserByLinkName(params.uid)

  const userPhoto = user?.photoUrl ? [user?.photoUrl] : []

  return {
    title: user?.name,
    openGraph: {
      title: user?.name,
      images: userPhoto,
    },
  }
}

export default async function UserPage({ params }: { params: { uid: string } }) {
  const projects = await getProjectsByUser(params.uid)

  return (
    <section className="px-8 lg:px-32 xl:px-48 2xl:px-96 py-10">
      {projects?.map((project) => (
        <ProjectTimelineItem key={project.route} project={project} />
      ))}
    </section>
  )
}
