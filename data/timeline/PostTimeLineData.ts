import { joaomanaia, joaoneves, tiagocaetano } from "../../common/common"
import PostTimeLineDataType from "./PostTimeLineDataType"

export const postItems: PostTimeLineDataType[] = [
  {
    authors: [joaoneves],
    postDate: "24/02/2022",
    postTitle: "1 - GIMP - Criação e edição de imagens",
    postDescription: "O GIMP é um editor de imagens multiplataforma disponível para GNU/Linux, macOS, Windows e outros sistemas operacionais. É um software livre , você pode alterar seu código-fonte e distribuir suas alterações.",
    postImage: "https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/portfolio_api%2Fgimp-1-joaoneves.png?alt=media&token=69c31f11-caff-4b85-abef-08e7f2df144c",
    route: `trabalhos/${joaoneves.linkName}/gimp-1`,
  },
  {
    authors: [joaomanaia, tiagocaetano],
    postDate: "24/02/2022",
    postTitle: "1 - GIMP - Criação e edição de imagens",
    postDescription: "O GIMP é um editor de imagens multiplataforma disponível para GNU/Linux, macOS, Windows e outros sistemas operacionais. É um software livre , você pode alterar seu código-fonte e distribuir suas alterações.",
    postImage: "https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/portfolio_api%2Fgimp-1-tiagocaetano-joaomanaia.png?alt=media&token=f3224374-72cb-42b3-aa3f-d4348f5323ea",
    route: `trabalhos/${joaomanaia.linkName}/gimp-1`,
  },
  {
    authors: [tiagocaetano, joaomanaia, joaoneves],
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