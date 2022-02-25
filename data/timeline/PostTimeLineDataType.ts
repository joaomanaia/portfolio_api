import { UserType } from "../../common/common"

type PostTimeLineDataType = {
    authors: UserType[]
    postDate: string
    postTitle: string
    postDescription: string
    postImage: string
    route: string
}

export default PostTimeLineDataType