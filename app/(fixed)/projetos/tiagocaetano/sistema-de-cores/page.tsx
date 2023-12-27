import { ProjectAuthors } from "@/app/(home)/components/projects/project-authors"
import { defaultUserPhotoUrl } from "@/common/common"
import { findPostByRoute } from "@/data/timeline/PostTimeLineData"
import PostTimeLineDataType from "@/data/timeline/PostTimeLineDataType"
import { Metadata } from "next"
import { Author } from "next/dist/lib/metadata/types/metadata-types"
import Image from "next/image"
import { redirect } from "next/navigation"

const getProjeto = async (): Promise<PostTimeLineDataType | undefined> => {
  return findPostByRoute("sistema-de-cores")
}

export async function generateMetadata(): Promise<Metadata> {
  const projeto = await getProjeto()

  const images = projeto?.postImage ? [projeto?.postImage] : []
  const authors: Author[] =
    projeto?.authors?.map((author) => {
      const authorUrl = `https://portfolio-api-joaomanaia.vercel.app/${author.linkName}`

      return {
        name: author.name,
        url: authorUrl,
      }
    }) ?? []

  return {
    title: projeto?.postTitle,
    description: projeto?.postDescription,
    openGraph: {
      title: projeto?.postTitle,
      description: projeto?.postDescription,
      images: images,
    },
    keywords: ["Sistema de cores", "RGB", "CMYK", "HSV", "YUV", "Sistema cromático"],
    authors: authors,
    publisher: "Tiago Caetano",
    robots: {
      index: true,
    },
  }
}

export default async function PostPage() {
  const projeto = await getProjeto()

  if (!projeto) {
    return redirect("/")
  }

  return (
    <article
      itemScope
      itemType="https://schema.org/Article"
      className="flex flex-col py-8 px-12 md:px-44 xl:px-96 h-auto w-auto space-y-4"
    >
      <ProjectAuthors authors={projeto.authors} postDate={projeto.postDate} horizontal />

      <h1 itemProp="headline" className="text-3xl font-semibold mt-12">
        {projeto?.postTitle}
      </h1>

      <div className="relative w-auto aspect-video mt-12">
        <Image
          className="rounded-2xl"
          src={projeto?.postImage || defaultUserPhotoUrl}
          alt="Post Image"
          layout="fill"
        />
      </div>

      <section itemProp="abstract">
        <h2 className="fonte-titulo">Introdução</h2>
        <p className="fonte-texto">
          Todos os dias, à nossa volta somos cercados por objetos diversos, como, carros, comboios,
          árvores, casas, canetas, livros, etc. Percebemos que muitos objetos apresentam cores
          iguais, mas a grande maioria possui cores diferentes. Podemos caracterizar a cor de um
          objeto pela frequência da luz, pois, uma vez que a luz é uma radiação, a cada uma das
          cores que se apresentam no espectro, corresponde uma frequência específica.
        </p>
      </section>

      <section itemProp="articleBody">
        <h2 className="fonte-titulo mb-4">Sistema cromático:</h2>
        <Figure
          src="https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/portfolio_api%2Fimagem-sistema-cromatico.png?alt=media&token=6e40dfbe-57a8-440e-bb75-a6e6bb21d4d0"
          alt="Uma roda das cores com 12 cores"
          caption="Círculo cromático"
          imageClassName="rounded-full"
        />
      </section>

      <section itemProp="articleBody">
        <h2 className="fonte-titulo">RGB definição e exemplo:</h2>
        <p className="fonte-texto mb-4">
          RGB é uma abreviatura de um sistema de cores aditivas em que o red(vermelho), o
          green(verde) e o blue(azul), tudo combinado forma um espectro cromático. O propósito
          principal do sistema RGB é a reprodução de cores em dispositivos eletrônicos como
          telemóveis, monitores de televisão, câmaras digitais, ETC.
        </p>
        <Figure
          src="https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/portfolio_api%2Fimagem-rgb.png?alt=media&token=5317a835-b527-43cd-b691-40110d2a40b0"
          alt="Um círculo com as três cores primárias da luz"
          caption="Diagrama das três cores primárias da luz"
          imageClassName="rounded-2xl"
        />
      </section>

      <section itemProp="articleBody">
        <h2 className="fonte-titulo">CMYK definição e exemplo:</h2>
        <p className="fonte-texto mb-4">
          CMYK é uma abreviatura de um sistema de cores subtrativas formado por: cyan(ciano),
          magenta, yellow(amarelo) e black(preto, utiliza-se o k em vez do B para não confundir com
          o B de blue do rgb). Este sistema é empregado por imprensas, impressoras e fotocopiadoras
          para reproduzir a maioria das cores do espectro visível.
        </p>
        <Figure
          src="https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/portfolio_api%2Fcmyk-imagem.png?alt=media&token=19ac0c56-8efa-4254-8c9b-449c8a8cd255"
          alt="Três círculos coloridos mostrando a mistura subtrativa de cores"
          caption="Mistura de Cores Subtrativas"
          imageClassName="rounded-2xl"
        />
      </section>

      <section itemProp="articleBody">
        <h2 className="fonte-titulo">HSV definição e exemplo:</h2>
        <p className="fonte-texto mb-4">
          HSV é a abreviatura para o sistema de cores formadas pelas componentes hue (matiz),
          saturation (saturação) e value (valor). O modelo HSV baseia- se na perceção humana da cor
          do ponto de vista dos artistas plásticos. Isto é, os artistas plásticos para obterem as
          várias cores das suas pinturas combinam a tonalidade com elementos de brilho e saturação.
        </p>
        <Figure
          src="https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/portfolio_api%2Fhsv-imagem.png?alt=media&token=f748f0b6-587d-447a-80b4-0692abca14db"
          alt="Um diagrama de um cone com diferentes cores. O cone é dividido em três partes, cada uma com uma cor diferente: vermelho, verde e azul. O comprimento de cada parte do cone representa a saturação da cor."
          caption="Diagrama do espaço de cor HSV"
          imageClassName="rounded-2xl"
        />
      </section>

      <section itemProp="articleBody">
        <h2 className="fonte-titulo">YUV definição e exemplo:</h2>
        <p className="fonte-texto mb-4">
          YUV é um sistema de codificação de cores normalmente usado como parte de um pipeline de
          imagens coloridas (pipeline é uma técnica usada em processadores). Ele codifica uma imagem
          colorida ou vídeo levando em consideração a perceção humana, permitindo largura de banda
          reduzida para componentes de prominência.
        </p>
        <Figure
          src="https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/portfolio_api%2FYUV-imagem.jpg?alt=media&token=c0f0a58b-b626-47a4-88e6-85787cd543a3"
          alt="Uma grade de coordenadas em um fundo de arco-íris."
          caption="Exemplo YUV no plano"
          imageClassName="rounded-2xl"
        />
      </section>
    </article>
  )
}

interface FigureProps {
  src: string
  alt: string
  caption: string
  imageClassName?: string
}

const Figure: React.FC<FigureProps> = ({ src, alt, caption, imageClassName }) => {
  return (
    <figure className="border rounded-2xl p-4 space-y-4 w-fit">
      <Image className={imageClassName} src={src} alt={alt} width={300} height={300} />
      <figcaption>{caption}</figcaption>
    </figure>
  )
}
