import { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { useEffect } from "react"
import { Element, animateScroll } from "react-scroll"
import { joaomanaiaName, joaomanaiaPhoto } from "../../common/common"
import NormalHeader from "../../components/header/normal_header"

type CriacaoDoSiteType = {}

const CriacaoDoSite: NextPage<CriacaoDoSiteType> = () => {  
    
    useEffect(() => {
        animateScroll.scrollToTop()
    }, [])

    return (
        <Element 
            name="main"
            className="flex flex-col w-screen bg-black text-white">
            <Head>
                <title>Criação do site</title>
            </Head>

            <NormalHeader />

            <div className="py-20 px-12 md:px-44 xl:px-96 h-auto w-auto">
                <div className="flex space-x-4 items-center">
                    <div className="relative w-12 h-12">
                        <Image
                            className="rounded-full"
                            src={joaomanaiaPhoto}
                            alt={joaomanaiaName}
                            layout="fill" />
                    </div>
                    <div className="flex flex-col space-y-1">
                        <p className="text-lg">{joaomanaiaName}</p>
                        <p className="text-gray-300 text-sm">20:15 20/02/2022</p>
                    </div>
                </div>

                <p className="text-3xl font-semibold mt-12">
                    O melhor portfolio de aplicações informaticas
                </p>

                <div className="relative w-auto aspect-video mt-12">
                    <Image
                        className="rounded-2xl"
                        src="https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/main_wallpaper.jpg?alt=media&token=e8d3f64c-8639-4eaa-8430-019306430a93"
                        alt="Post Image"
                        layout="fill" />
                </div>

                <p className="mt-12">
                    Este é um projeto do next.js e com host na vercel.
                </p>
            </div>
        </Element>
    )
}

export default CriacaoDoSite