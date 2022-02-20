import { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import NormalHeader from "../../components/header/normal_header"

type CriacaoDoSiteType = {}

const CriacaoDoSite: NextPage<CriacaoDoSiteType> = () => {
    return (
        <div className="flex flex-col">
            <Head>
                <title>Criação do site</title>
            </Head>

            <NormalHeader/>

            <div className="mt-20 mx-12 md:mx-44 xl:mx-96">
                <p className="text-3xl font-semibold">
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
        </div>
    )
}

export default CriacaoDoSite