import { ProjectAuthors } from "@/app/(home)/components/projects/project-authors"
import { defaultUserPhotoUrl } from "@/common/common"
import { findPostByRoute } from "@/data/timeline/PostTimeLineData"
import PostTimeLineDataType from "@/data/timeline/PostTimeLineDataType"
import { Metadata } from "next"
import Image from "next/image"
import { redirect } from "next/navigation"
import { YouTubeEmbed } from "@next/third-parties/google"

const getProjeto = async (projetoId: string): Promise<PostTimeLineDataType | undefined> => {
  return findPostByRoute(projetoId)
}

export async function generateMetadata({
  params,
}: {
  params: { projetoId: string }
}): Promise<Metadata> {
  const projeto = await getProjeto(params.projetoId)

  const images = projeto?.postImage ? [projeto?.postImage] : []
  const authors = projeto?.authors?.map((author) => author.name).join(", ")

  return {
    title: projeto?.postTitle,
    description: projeto?.postDescription,
    openGraph: {
      title: projeto?.postTitle,
      description: projeto?.postDescription,
      images: images,
    },
    publisher: authors,
  }
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
        {projeto?.videoId ? (
          <YouTubeEmbed
            videoid={projeto.videoId}
            params="controls=0"
            style="position: absolute; min-width: 100%; width: 100%; height: 100%; border-radius: 1rem;"
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
