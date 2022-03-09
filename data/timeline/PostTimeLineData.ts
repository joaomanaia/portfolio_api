import { joaomanaia, joaoneves, tiagocaetano } from "../../common/common"
import PostTimeLineDataType from "./PostTimeLineDataType"

export const postItems: PostTimeLineDataType[] = [
  {
    authors: [joaoneves],
    postDate: "07/03/2022",
    postTitle: "5.2 - GIMP -Criação e edição de imagens",
    postDescription: "FICHA DE ATIVIDADE 5.2",
    postImage: "https://lh3.googleusercontent.com/2BhaHjYIFKzfFIbKV-fQAn70xXIA8ahxHZyUqHz511hZ84Rfj-qgCwf8mQes8YsUXkrSFdUX_FtloYA=w1316-h698",
    route: `trabalhos/${joaoneves.linkName}-gimp-5-2`,
  },
  {
    authors: [joaomanaia, tiagocaetano],
    postDate: "07/03/2022",
    postTitle: "5.2 - GIMP -Criação e edição de imagens",
    postDescription: "FICHA DE ATIVIDADE 5.2",
    postImage: "https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/portfolio_api%2FSIIIIIIMMMMM.gif?alt=media&token=39678606-cd31-48c8-acaa-f0ab76107eb2",
    route: `trabalhos/${joaomanaia.linkName}-${tiagocaetano.linkName}-gimp-5-2`,
  },
  {
    authors: [joaoneves],
    postDate: "07/03/2022",
    postTitle: "5.1 - GIMP -Criação e edição de imagens",
    postDescription: "FICHA DE ATIVIDADE 5.1",
    postImage: "https://lh3.googleusercontent.com/OULJ2JXUsb9CGURFxQZQAQJduPeclzvKJJ1vPFVYnuEMHDFTAyqgdPRgq8X4VuYg35KSwqilpY2vfoE=w1316-h698",
    route: `trabalhos/${joaoneves.linkName}-gimp-5-1`,
  },
  {
    authors: [joaomanaia, tiagocaetano],
    postDate: "07/03/2022",
    postTitle: "5.1 - GIMP -Criação e edição de imagens",
    postDescription: "FICHA DE ATIVIDADE 5.1",
    postImage: "https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/portfolio_api%2Ftrump-kimjongun-joaomanaia-tiagocaetano.jpg?alt=media&token=b622e586-9416-46c8-aad9-b57288ff5cd8",
    route: `trabalhos/${joaomanaia.linkName}-${tiagocaetano.linkName}-gimp-5-1`,
  },
  {
    authors: [joaoneves],
    postDate: "03/03/2022",
    postTitle: "4 - GIMP -Criação e edição de imagens",
    postDescription: "FICHA DE ATIVIDADE 4",
    postImage: "https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/portfolio_api%2Fgimp-4-joaoneves.png?alt=media&token=830d72db-5ea0-42c5-ba68-4b6ddf6d439c",
    route: `trabalhos/${joaoneves.linkName}-gimp-4`,
  },
  {
    authors: [joaomanaia, tiagocaetano],
    postDate: "03/03/2022",
    postTitle: "4 - GIMP -Criação e edição de imagens",
    postDescription: "FICHA DE ATIVIDADE 4",
    postImage: "https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/portfolio_api%2FRetocar-imagem-joaomanaia-tiagocaetano.png?alt=media&token=43fbb8aa-042a-49d7-8592-4c791c0782a2",
    route: `trabalhos/${joaomanaia.linkName}-${tiagocaetano.linkName}-gimp-4`,
  },
  {
    authors: [joaomanaia, tiagocaetano, joaoneves],
    postDate: "28/02/2022",
    postTitle: "3 - GIMP -Criação e edição de imagens",
    postDescription: "FICHA DE ATIVIDADE 3",
    postImage: "https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/portfolio_api%2Fgimp-3-joaomanaia-tiagocaetano.gif?alt=media&token=a6ce0ab5-8d79-469d-aa01-95a0f300aeee",
    route: `trabalhos/${joaomanaia.linkName}${tiagocaetano.linkName}-${joaoneves.linkName}-gimp-3`,
  },
  
  {
    authors: [joaoneves],
    postDate: "28/02/2022",
    postTitle: "2 - GIMP -Criação e edição de imagens",
    postDescription: "FICHA DE ATIVIDADE 2",
    postImage: "https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/portfolio_api%2Fgimp2-joaoneves.png?alt=media&token=a9467ff0-eda3-41fc-931a-6f57e7e26dee",
    route: `trabalhos/${joaoneves.linkName}-gimp-2`,
  },
  {
    authors: [joaomanaia, tiagocaetano],
    postDate: "28/02/2022",
    postTitle: "2 - GIMP -Criação e edição de imagens",
    postDescription: "FICHA DE ATIVIDADE 2",
    postImage: "https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/portfolio_api%2Ftrab2-18%2C24-joaomanaia%2Ctiagocaetano-12A.jpg?alt=media&token=14b63ee2-5b85-4416-84e8-5e1f0ad5ecf4",
    route: `trabalhos/${joaomanaia.linkName}-${tiagocaetano.linkName}-gimp-2`,
  },
  {
    authors: [joaoneves],
    postDate: "24/02/2022",
    postTitle: "1 - GIMP - Criação e edição de imagens",
    postDescription: "O GIMP é um editor de imagens multiplataforma disponível para GNU/Linux, macOS, Windows e outros sistemas operacionais. É um software livre , você pode alterar seu código-fonte e distribuir suas alterações.",
    postImage: "https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/portfolio_api%2Fgimp-1-joaoneves.png?alt=media&token=69c31f11-caff-4b85-abef-08e7f2df144c",
    route: `trabalhos/${joaoneves.linkName}-gimp-1`,
  },
  {
    authors: [joaomanaia, tiagocaetano],
    postDate: "24/02/2022",
    postTitle: "1 - GIMP - Criação e edição de imagens",
    postDescription: "O GIMP é um editor de imagens multiplataforma disponível para GNU/Linux, macOS, Windows e outros sistemas operacionais. É um software livre , você pode alterar seu código-fonte e distribuir suas alterações.",
    postImage: "https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/portfolio_api%2Fgimp-1-tiagocaetano-joaomanaia.png?alt=media&token=f3224374-72cb-42b3-aa3f-d4348f5323ea",
    route: `trabalhos/${joaomanaia.linkName}-${tiagocaetano.linkName}-gimp-1`,
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