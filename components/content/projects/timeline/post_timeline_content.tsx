import Router from "next/router"
import { Element } from "react-scroll"
import { joaomanaiaName, joaomanaiaPhoto } from "../../../../common/common"
import PostTimeLineItem from "./post_timeline_item"

type PostTimelineContentType = {}

const PostTimelineContent: React.FC<PostTimelineContentType> = () => {

    const router = Router

    return (
        <Element 
            id="projects"
            name="projects"
            className="w-screen flex flex-col items-center justify-center px-8 lg:px-32 xl:px-96 py-32">
            <PostTimeLineItem
                authorName={joaomanaiaName}
                authorPhoto={joaomanaiaPhoto}
                postDate="20:15h 20/02/2022"
                onMoreInfoClicked={() => router.push("trabalhos/criacao-do-site")}
                postTitle="O melhor portfolio de aplicações informaticas"
                postDescription="Este é um projeto do next.js e com host na vercel."
                postImage="https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/main_wallpaper.jpg?alt=media&token=e8d3f64c-8639-4eaa-8430-019306430a93"/>
        </Element>
    )
}

export default PostTimelineContent