import { defaultUserPhotoUrl } from "../../../../common/common"
import PostTimeLineItem from "./post_timeline_item"

type PostTimelineContentType = {}

const PostTimelineContent: React.FC<PostTimelineContentType> = () => {
    return (
        <div className="w-screen flex flex-col items-center justify-cente px-8 lg:px-32 xl:px-96 my-24">
            <PostTimeLineItem
                hasPostAbove={false}
                hasPostBelow={true}
                authorName="João Manaia"
                authorPhoto={defaultUserPhotoUrl}
                postDate="1 hora atras"
                postTitle="Teste"
                postDescription="Foto editada pelo melhor editor do mundo. Esta foto também fui eu que tirei mas já me esqueci de onde foi."
                postImage="https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/main_wallpaper.jpg?alt=media&token=e8d3f64c-8639-4eaa-8430-019306430a93"/>
            <PostTimeLineItem
                hasPostAbove={true}
                hasPostBelow={false}
                authorName="João Neves"
                authorPhoto={defaultUserPhotoUrl}
                postDate="2 horas atras"
                postTitle="Teste"
                postDescription="Ola"
                postImage={defaultUserPhotoUrl}/>
        </div>
    )
}

export default PostTimelineContent