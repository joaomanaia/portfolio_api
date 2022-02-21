import { UserType } from "../../common/common"

type PostTimeLineDataType = {
    author: UserType
    postDate: string
    postTitle: string
    postDescription: string
    postImage: string
    route: string
}

export default PostTimeLineDataType