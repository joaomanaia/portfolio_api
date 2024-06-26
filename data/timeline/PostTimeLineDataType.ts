import type { UserType } from "../../common/common"

type PostTimeLineDataType = {
  authors: UserType[]
  postDate: Date
  postTitle: string
  postDescription: string
  postImage: string
  videoId?: string
  route: string
  content?: string
}

export default PostTimeLineDataType
