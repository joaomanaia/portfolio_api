import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ProjectTimelineItem } from "@/app/(home)/_components/projects/project-timeline-item"
import { allUsers, findUserByLinkName, type UserType } from "@/common/common"
import { getPostsByUser } from "@/data/timeline/PostTimeLineData"

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

  const user = findUserByLinkName(uid)
  if (!user) return notFound()

  const projects = getPostsByUser(user)

  return (
    <section>
      <UserComponent user={user} />
      {projects.map((project) => (
        <ProjectTimelineItem key={project.route} project={project} />
      ))}
    </section>
  )
}

function UserComponent({ user }: { user: UserType }) {
  return (
    <div className="bg-foreground/5 border-foreground/10 hover:border-foreground/15 hover:bg-foreground/6 mx-auto my-8 flex w-full max-w-md flex-col items-center rounded-2xl border-2 px-4 py-4 shadow-xl backdrop-blur-[2px] transition-all duration-300 hover:shadow-2xl md:max-w-lg lg:py-6">
      <div className="relative size-32 overflow-hidden">
        <Image src={user.photoUrl} alt={user.name} fill className="rounded-full object-cover" />
      </div>
      <h1 className="mt-4 text-xl font-bold lg:text-2xl">{user.name}</h1>
      <p className="text-muted-foreground mt-2 lg:text-lg">{user.role}</p>
    </div>
  )
}
