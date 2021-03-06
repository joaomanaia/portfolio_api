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


    const authorNames = postData?.authors?.map(author => author.name) || []
    const authorImages = postData?.authors?.map(author => author.photoUrl) || []
    
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
                    <div className="flex -space-x-4">
                        {authorImages.map(img => (
                            <div 
                                key={img}
                                className="relative rounded-full border-2 w-12 h-12">
                                <Image
                                    className="rounded-full"
                                    src={img || defaultUserPhotoUrl}
                                    alt={img}
                                    layout="fill" />
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col space-y-1">
                        <p className="text-lg">{authorNames.join(", ")}</p>
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

                <p className="fonte-titulo">Introdu????o</p>
                <p className="fonte-texto">
                    Todos os dias, ?? nossa volta somos cercados por objetos diversos, como,
                    carros, comboios, ??rvores, casas, canetas, livros, etc. Percebemos que muitos
                    objetos apresentam cores iguais, mas a grande maioria possui cores diferentes.
                    Podemos caracterizar a cor de um objeto pela frequ??ncia da luz, pois, uma vez
                    que a luz ?? uma radia????o, a cada uma das cores que se apresentam no
                    espectro, corresponde uma frequ??ncia espec??fica.
                </p>
                <p className="fonte-titulo">Sistema crom??tico:</p>
                <div className="relative w-56 md:w-64 lg:w-72 xl:w-80 aspect-square mt-12">
                    <Image
                        className="rounded-full"
                        src="https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/portfolio_api%2Fimagem-sistema-cromatico.png?alt=media&token=6e40dfbe-57a8-440e-bb75-a6e6bb21d4d0"
                        alt="Imagem sistema cromatico"
                        layout="fill" />
                </div>
                <p className="fonte-titulo">RGB defini????o e exemplo:</p>
                <p className="fonte-texto">
                    RGB ?? uma abreviatura de um sistema de cores aditivas em que o
                    red(vermelho), o green(verde) e o blue(azul), tudo combinado forma um
                    espectro crom??tico. O prop??sito principal do sistema RGB ?? a reprodu????o
                    de cores em dispositivos eletr??nicos como telem??veis, monitores de
                    televis??o, c??maras digitais, ETC.
                </p>
                <div className="relative w-56 md:w-64 lg:w-72 xl:w-80 aspect-square mt-12">
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/portfolio_api%2Fimagem-rgb.png?alt=media&token=5317a835-b527-43cd-b691-40110d2a40b0"
                        alt="Imagem rgb"
                        layout="fill" />
                </div>
                <p className="fonte-titulo">CMYK defini????o e exemplo:</p>
                <p className="fonte-texto">
                    CMYK ?? uma abreviatura de um sistema de cores subtrativas formado por:
                    cyan(ciano), magenta, yellow(amarelo) e black(preto, utiliza-se o k em vez
                    do B para n??o confundir com o B de blue do rgb). Este sistema ??

                    empregado por imprensas, impressoras e fotocopiadoras para reproduzir
                    a maioria das cores do espectro vis??vel.
                </p>
                <div className="relative w-56 md:w-64 lg:w-72 xl:w-80 aspect-square mt-12">
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/portfolio_api%2Fcmyk-imagem.png?alt=media&token=19ac0c56-8efa-4254-8c9b-449c8a8cd255"
                        alt="Imagem cmyk"
                        layout="fill" />
                </div>
                <p className="fonte-titulo">HSV defini????o e exemplo:</p>
                <p className="fonte-texto">
                    HSV ?? a abreviatura para o sistema de cores formadas pelas componentes
                    hue (matiz), saturation (satura????o) e value (valor). O modelo HSV baseia-
                    se na perce????o humana da cor do ponto de vista dos artistas pl??sticos. Isto
                    ??, os artistas pl??sticos para obterem as v??rias cores das suas pinturas
                    combinam a tonalidade com elementos de brilho e satura????o.
                </p>
                <div className="relative w-56 md:w-64 lg:w-72 xl:w-80 aspect-square mt-12">
                    <Image
                        className="rounded-2xl"
                        src="https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/portfolio_api%2Fhsv-imagem.png?alt=media&token=f748f0b6-587d-447a-80b4-0692abca14db"
                        alt="Imagem hsv"
                        layout="fill" />
                </div>
                <p className="fonte-titulo">YUV defini????o e exemplo:</p>
                <p className="fonte-texto">
                    YUV ?? um sistema de codifica????o de cores normalmente usado como
                    parte de um pipeline de imagens coloridas (pipeline ?? uma t??cnica usada
                    em processadores). Ele codifica uma imagem colorida ou v??deo levando
                    em considera????o a perce????o humana, permitindo largura de banda
                    reduzida para componentes de promin??ncia.
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