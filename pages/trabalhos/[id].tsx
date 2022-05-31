import { GetServerSideProps, NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { useEffect } from "react"
import { Element, animateScroll } from "react-scroll"
import { defaultUserPhotoUrl } from "../../common/common"
import NormalHeader from "../../components/header/normal_header"
import { findPostByRoute } from "../../data/timeline/PostTimeLineData"
import PostTimeLineDataType from "../../data/timeline/PostTimeLineDataType"

type DefaultWorkPageType = {
    postData: PostTimeLineDataType | null
}

const DefaultWorkPage: NextPage<DefaultWorkPageType> = ({postData}) => {  

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
                    {postData?.videoUrl ? (
                        <iframe
                            className="absolute w-full h-full rounded-2xl"
                            src={postData.videoUrl}
                            frameBorder="0"
                            typeof="text/html"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen/>
                    ) : (
                        <Image
                            className="rounded-2xl"
                            src={postData?.postImage || defaultUserPhotoUrl}
                            alt="Post Image"
                            layout="fill" />
                    )}
                </div>

                <p className="fonte-texto">
                    {postData?.postDescription}
                </p>
            </div>
        </Element>
    )
}

export default DefaultWorkPage

export const getServerSideProps: GetServerSideProps = async (content) => {
    const workId = content.params?.id

    if (typeof workId !== "string") {
        return {
            props: {
                postData: null
            }
        }
    }

    const postData = findPostByRoute(workId) || null

    return {
        props: {
            postData: postData
        }
    }
}