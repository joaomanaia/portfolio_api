import { Suspense } from "react"
import dynamic from "next/dynamic"
import { notFound } from "next/navigation"
import { type Metadata } from "next"
import remarkGfm from "remark-gfm"
import { ProjectAuthors } from "@/app/(home)/_components/projects/project-authors"
import { defaultUserPhotoUrl } from "@/common/common"
import { findPostByRoute } from "@/data/timeline/PostTimeLineData"
import type PostTimeLineDataType from "@/data/timeline/PostTimeLineDataType"

const getProjeto = async (projetoId: string): Promise<PostTimeLineDataType | undefined> => {
  return findPostByRoute(projetoId)
}

interface ProjetoPageProps {
  params: Promise<{ projetoId: string }>
}

export async function generateMetadata({ params }: ProjetoPageProps): Promise<Metadata> {
  const { projetoId } = await params
  const projeto = await getProjeto(projetoId)

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

const YouTubeEmbed = dynamic(() =>
  import("@next/third-parties/google").then((mod) => mod.YouTubeEmbed)
)
const Image = dynamic(() => import("next/image"))
const MDXRemote = dynamic(() => import("next-mdx-remote-client/rsc").then((mod) => mod.MDXRemote))

export default async function ProjetoPage({ params }: ProjetoPageProps) {
  const { projetoId } = await params
  const projeto = await getProjeto(projetoId)

  if (!projeto) {
    return notFound()
  }

  return (
    <>
      <ProjectAuthors authors={projeto.authors} postDate={projeto.postDate} horizontal />

      <h1 className="mt-4 text-3xl font-semibold">{projeto?.postTitle}</h1>

      <div className="relative mt-8 aspect-video w-full">
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
            fill
          />
        )}
      </div>

      {projeto.content ? (
        <section className="prose lg:prose-xl dark:prose-invert mt-4 w-full">
          <Suspense fallback={<p>Loading content...</p>}>
            <MDXRemote
              source={projeto.content}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                },
              }}
            />
          </Suspense>
        </section>
      ) : (
        <p className="fonte-texto mt-4">{projeto.postDescription}</p>
      )}
    </>
  )
}
