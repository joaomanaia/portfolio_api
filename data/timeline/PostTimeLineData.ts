import { tiagocaetano } from "../../common/common"
import PostTimeLineDataType from "./PostTimeLineDataType"

export const postItems: PostTimeLineDataType[] = [
  {
    author: tiagocaetano,
    postDate: "21/02/2022",
    postTitle: "Sistema de cores",
    postDescription: "Todos os dias, à nossa volta somos cercados por objetos diversos, como, carros, comboios, árvores, casas, canetas, livros, etc.",
    postImage: "https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/portfolio_api%2Fcolor_system.jpg?alt=media&token=af1f2277-cf27-4713-a339-77cf8caa5532",
    route: `trabalhos/${tiagocaetano.linkName}/sistema-de-cores`,
  },
]

export const findPostByRoute = (route: string): PostTimeLineDataType | undefined => {
  return postItems.find((post) => post.route.endsWith(route))
}