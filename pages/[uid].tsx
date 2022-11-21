import { GetServerSideProps, NextPage } from "next"
import Head from "next/head"
import Router from "next/router"
import { useEffect } from "react"
import { Element, animateScroll } from "react-scroll"
import { findUserByLinkName, UserType } from "../common/common"
import PostTimeLineItem from "../components/content/projects/timeline/post_timeline_item"
import NormalHeader from "../components/header/normal_header"
import { getPostsByUser } from "../data/timeline/PostTimeLineData"
import PostTimeLineDataType from "../data/timeline/PostTimeLineDataType"

type UserPageType = {
    user: UserType | null,
    postsByUser: PostTimeLineDataType[]
}

const DefaultWorkPage: NextPage<UserPageType> = ({user, postsByUser}) => {  

    const router = Router
    
    useEffect(() => {
        animateScroll.scrollToTop()
    }, [])

    return (
        // @ts-ignore
        <Element 
            name="main"
            className="flex flex-col w-screen bg-black text-white">
            <Head>
                <title>{user?.name}</title>
            </Head>

            <NormalHeader />

            <div className="w-screen flex flex-col items-center justify-center px-8 lg:px-32 xl:px-48 2xl:px-96 py-32">
                {postsByUser.map(data => (
                    <PostTimeLineItem
                        key={data.route}
                        postData={data}
                        onMoreInfoClicked={() => router.push(data.route)}/>
                ))}
            </div>
        </Element>
    )
}

export default DefaultWorkPage

export const getServerSideProps: GetServerSideProps = async (content) => {
    const uid = content.params?.uid


    if (typeof uid !== "string") {
        return {
            props: {
                user: null,
                postsByUser: []
            }
        }
    }

    const user = findUserByLinkName(uid)
    const postsByUser = user === null ? [] : getPostsByUser(user!!)

    return {
        props: {
            user: user,
            postsByUser
        }
    }
}