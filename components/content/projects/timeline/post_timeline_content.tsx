import { RefObject } from "react"
import { defaultUserPhotoUrl } from "../../../../common/common"
import PostTimeLineItem from "./post_timeline_item"

type PostTimelineContentType = {
    timelineRef: RefObject<HTMLDivElement>
}

const PostTimelineContent: React.FC<PostTimelineContentType> = ({timelineRef}) => {
    return (
        <div className="w-screen flex flex-col items-center justify-center px-8 lg:px-32 xl:px-96">
            <div ref={timelineRef} className="mb-32"></div>
            <PostTimeLineItem
                authorName="João Manaia"
                authorPhoto={defaultUserPhotoUrl}
                postDate="1 hora atras"
                postTitle="Teste"
                postDescription="Foto editada pelo melhor editor do mundo. Esta foto também fui eu que tirei mas já me esqueci de onde foi."
                postImage="https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/main_wallpaper.jpg?alt=media&token=e8d3f64c-8639-4eaa-8430-019306430a93"/>
            
            <PostTimeLineItem
                authorName="João Neves"
                authorPhoto="https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/joaoneves2.jpg?alt=media&token=fbf37dd5-491e-400b-a30a-1cd3328245f6"
                postDate="2 horas atras"
                postTitle="Teste"
                postDescription="Ola"
                postImage="https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/joaoneves2.jpg?alt=media&token=fbf37dd5-491e-400b-a30a-1cd3328245f6"/>
        </div>
    )
}

export default PostTimelineContent