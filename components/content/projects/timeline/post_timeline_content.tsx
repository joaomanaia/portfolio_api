import Router from "next/router"
import { Element } from "react-scroll"
import { postItems } from "../../../../data/timeline/PostTimeLineData"
import PostTimeLineItem from "./post_timeline_item"

type PostTimelineContentType = {}

const PostTimelineContent: React.FC<PostTimelineContentType> = () => {

    const router = Router

    return (
        // @ts-ignore
        <Element 
            id="projects"
            name="projects"
            className="w-screen flex flex-col items-center justify-center px-8 lg:px-32 xl:px-48 2xl:px-96 py-32">
            {postItems.map(data => (
                <PostTimeLineItem
                    key={data.route}
                    postData={data}
                    onMoreInfoClicked={() => router.push(data.route)}/>
            ))}
        </Element>
    )
}

export default PostTimelineContent