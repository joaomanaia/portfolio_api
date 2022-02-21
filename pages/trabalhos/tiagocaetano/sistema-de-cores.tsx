import { GetServerSideProps, NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { useEffect } from "react"
import { Element, animateScroll } from "react-scroll"
import { defaultUserPhotoUrl } from "../../../common/common"
import NormalHeader from "../../../components/header/normal_header"
import { findPostByRoute } from "../../../data/timeline/PostTimeLineData"
import PostTimeLineDataType from "../../../data/timeline/PostTimeLineDataType"

type SistemaDeCoresPageType = {
    postData: PostTimeLineDataType | null
}

const SistemaDeCoresPage: NextPage<SistemaDeCoresPageType> = ({postData}) => {  
    
    useEffect(() => {
        animateScroll.scrollToTop()
    }, [])

    return (
        <Element 
            name="main"
            className="flex flex-col w-screen bg-black text-white">
            <Head>
                <title>{postData?.postTitle}</title>
            </Head>

            <NormalHeader />

            <div className="py-20 px-12 md:px-44 xl:px-96 h-auto w-auto">
                <div className="flex space-x-4 items-center">
                    <div className="relative w-12 h-12">
                        <Image
                            className="rounded-full"
                            src={postData?.author?.photoUrl || defaultUserPhotoUrl}
                            alt={postData?.author?.name}
                            layout="fill" />
                    </div>
                    <div className="flex flex-col space-y-1">
                        <p className="text-lg">{postData?.author?.name}</p>
                        <p className="text-gray-300 text-sm">{postData?.postDate}</p>
                    </div>
                </div>

                <p className="text-3xl font-semibold mt-12">
                    {postData?.postTitle}
                </p>

                <div className="relative w-auto aspect-video mt-12">
                    <Image
                        className="rounded-2xl"
                        src={postData?.postImage || defaultUserPhotoUrl}
                        alt="Post Image"
                        layout="fill" />
                </div>

                <p className="fonte-titulo">Introdução</p>
                <p className="fonte-texto">
                    Todos os dias, à nossa volta somos cercados por objetos diversos, como,
                    carros, comboios, árvores, casas, canetas, livros, etc. Percebemos que muitos
                    objetos apresentam cores iguais, mas a grande maioria possui cores diferentes.
                    Podemos caracterizar a cor de um objeto pela frequência da luz, pois, uma vez
                    que a luz é uma radiação, a cada uma das cores que se apresentam no
                    espectro, corresponde uma frequência específica.
                </p>
                <p className="fonte-titulo">Sistema cromático:</p>
                <div className="relative w-56 md:w-64 lg:w-72 xl:w-80 aspect-square mt-12">
                    <Image
                        className="rounded-full"
                        src="https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/portfolio_api%2Fimagem-sistema-cromatico.png?alt=media&token=6e40dfbe-57a8-440e-bb75-a6e6bb21d4d0"
                        alt="Imagem sistema cromatico"
                        layout="fill" />
                </div>
                <p className="fonte-titulo">RGB definição e exemplo:</p>
                <p className="fonte-texto">
                    RGB é uma abreviatura de um sistema de cores aditivas em que o
                    red(vermelho), o green(verde) e o blue(azul), tudo combinado forma um
                    espectro cromático. O propósito principal do sistema RGB é a reprodução
                    de cores em dispositivos eletrônicos como telemóveis, monitores de
                    televisão, câmaras digitais, ETC.
                </p>
                <div className="relative w-56 md:w-64 lg:w-72 xl:w-80 aspect-square mt-12">
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/portfolio_api%2Fimagem-rgb.png?alt=media&token=5317a835-b527-43cd-b691-40110d2a40b0"
                        alt="Imagem rgb"
                        layout="fill" />
                </div>
                <p className="fonte-titulo">CMYK definição e exemplo:</p>
                <p className="fonte-texto">
                    CMYK é uma abreviatura de um sistema de cores subtrativas formado por:
                    cyan(ciano), magenta, yellow(amarelo) e black(preto, utiliza-se o k em vez
                    do B para não confundir com o B de blue do rgb). Este sistema é

                    empregado por imprensas, impressoras e fotocopiadoras para reproduzir
                    a maioria das cores do espectro visível.
                </p>
                <div className="relative w-56 md:w-64 lg:w-72 xl:w-80 aspect-square mt-12">
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/portfolio_api%2Fcmyk-imagem.png?alt=media&token=19ac0c56-8efa-4254-8c9b-449c8a8cd255"
                        alt="Imagem cmyk"
                        layout="fill" />
                </div>
                <p className="fonte-titulo">HSV definição e exemplo:</p>
                <p className="fonte-texto">
                    HSV é a abreviatura para o sistema de cores formadas pelas componentes
                    hue (matiz), saturation (saturação) e value (valor). O modelo HSV baseia-
                    se na perceção humana da cor do ponto de vista dos artistas plásticos. Isto
                    é, os artistas plásticos para obterem as várias cores das suas pinturas
                    combinam a tonalidade com elementos de brilho e saturação.
                </p>
                <div className="relative w-56 md:w-64 lg:w-72 xl:w-80 aspect-square mt-12">
                    <Image
                        className="rounded-2xl"
                        src="https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/portfolio_api%2Fhsv-imagem.png?alt=media&token=f748f0b6-587d-447a-80b4-0692abca14db"
                        alt="Imagem hsv"
                        layout="fill" />
                </div>
                <p className="fonte-titulo">YUV definição e exemplo:</p>
                <p className="fonte-texto">
                    YUV é um sistema de codificação de cores normalmente usado como
                    parte de um pipeline de imagens coloridas (pipeline é uma técnica usada
                    em processadores). Ele codifica uma imagem colorida ou vídeo levando
                    em consideração a perceção humana, permitindo largura de banda
                    reduzida para componentes de prominência.
                </p>
                <div className="relative w-56 md:w-64 lg:w-72 xl:w-80 aspect-square mt-12">
                    <Image
                        className="rounded-2xl"
                        src="https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/portfolio_api%2FYUV-imagem.jpg?alt=media&token=c0f0a58b-b626-47a4-88e6-85787cd543a3"
                        alt="Imagem yuv"
                        layout="fill" />
                </div>
            </div>
        </Element>
    )
}

export default SistemaDeCoresPage

export const getServerSideProps: GetServerSideProps = async (content) => {
    const postData = findPostByRoute("sistema-de-cores") || null

    return {
        props: {
            postData: postData
        }
    }
}