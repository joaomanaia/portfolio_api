import { ProjectAuthors } from "@/app/(home)/components/projects/project-authors"
import { defaultUserPhotoUrl } from "@/common/common"
import { findPostByRoute } from "@/data/timeline/PostTimeLineData"
import type PostTimeLineDataType from "@/data/timeline/PostTimeLineDataType"
import { type Metadata } from "next"
import Image from "next/image"
import { redirect } from "next/navigation"
import { YouTubeEmbed } from "@next/third-parties/google"
import { MDXRemote } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"

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
    description: projeto?.content,
    openGraph: {
      title: projeto?.postTitle,
      description: projeto?.content,
      images: images,
    },
    publisher: authors,
    robots: {
      index: true,
    },
  }
}

export default async function ProjetoPage({ params }: { params: { projetoId: string } }) {
  const projeto = await getProjeto(params.projetoId)

  if (!projeto) {
    return redirect("/")
  }

  return (
    <>
      <ProjectAuthors authors={projeto.authors} postDate={projeto.postDate} horizontal />

      <h1 className="text-3xl font-semibold mt-4">{projeto?.postTitle}</h1>

      <div className="relative w-full aspect-video mt-8">
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

      {projeto.content ? (
        <section className="w-full mt-4 prose lg:prose-xl dark:prose-invert">
          <MDXRemote
            source={projeto.content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
              },
            }}
          />
        </section>
      ) : (
        <p className="fonte-texto mt-4">{projeto.postDescription}</p>
      )}
    </>
  )
}
