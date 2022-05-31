import { UserType } from "../../common/common"

type PostTimeLineDataType = {
    authors: UserType[]
    postDate: string
    postTitle: string
    postDescription: string
    postImage: string
    videoUrl?: string
    route: string
}

export default PostTimeLineDataType