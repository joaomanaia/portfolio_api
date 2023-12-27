import { ProjectAuthors } from "@/app/(home)/components/projects/project-authors"
import { defaultUserPhotoUrl } from "@/common/common"
import { findPostByRoute } from "@/data/timeline/PostTimeLineData"
import PostTimeLineDataType from "@/data/timeline/PostTimeLineDataType"
import Image from "next/image"
import { redirect } from "next/navigation"

const getProjeto = async (projetoId: string): Promise<PostTimeLineDataType | undefined> => {
  return findPostByRoute(projetoId)
}

export default async function ProjetoPage({ params }: { params: { projetoId: string } }) {
  const projeto = await getProjeto(params.projetoId)

  if (!projeto) {
    return redirect("/")
  }

  return (
    <div className="py-8 px-12 md:px-44 xl:px-96 h-auto w-auto">
      <ProjectAuthors authors={projeto.authors} postDate={projeto.postDate} horizontal />

      <h1 className="text-3xl font-semibold mt-4">{projeto?.postTitle}</h1>

      <div className="relative w-auto aspect-video mt-8">
        {projeto?.videoUrl ? (
          <iframe
            className="absolute w-full h-full rounded-2xl"
            src={projeto.videoUrl}
            typeof="text/html"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <Image
            className="rounded-2xl"
            src={projeto?.postImage || defaultUserPhotoUrl}
            alt="Post Image"
            layout="fill"
          />
        )}
      </div>

      <p className="fonte-texto mt-4">{projeto?.postDescription}</p>
    </div>
  )
}
