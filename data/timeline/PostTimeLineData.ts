import { joaomanaia, joaoneves, tiagocaetano, UserType } from "../../common/common"
import PostTimeLineDataType from "./PostTimeLineDataType"

export const findPostByRoute = (route: string): PostTimeLineDataType | undefined => {
  return postItems.find((post) => post.route.endsWith(route))
}

export const getPostsByUser = (user: UserType): PostTimeLineDataType[] => {
  return postItems.filter((post) => post.authors.includes(user))
}

export const postItems: PostTimeLineDataType[] = [
  {
    authors: [joaomanaia, tiagocaetano, joaoneves],
    postDate: "31/05/2022",
    postTitle: "Trabalho final Aplicações Informaticas B",
    postDescription: "Video da apresentação do trabalho final da disciplina Aplicações Informáticas B na ExpoSicó22, em Condeixa-a-Nova, no dia 14 e 15 de Maio de 2022.",
    postImage: "https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/portfolio_api%2FScreenshot%20from%20projeto%20final2.mp4.png?alt=media&token=389250c0-7861-4ad0-b087-54d6296abb9a",
    route: `${joaomanaia.linkName}${tiagocaetano.linkName}-${joaoneves.linkName}-projeto-final`,
    videoUrl: "https://www.youtube.com/embed/sO9XUu_UTHk"
  },
  {
    authors: [joaoneves],
    postDate: "21/03/2022",
    postTitle: "FICHA DE ATIVIDADE - 7  (7.2) - 21/03/2022  -  GIMP",
    postDescription: "Nessa atividade vamos aprender a utilizar as ferramentas de seleção, modo seleção livre, adicionar canal de transparência, inverter a seleção, retirar seleção, adicionar nova camada, movimentar camada, aplicar filtro, remover olhos vermelhos, adicionar texto à imagem e aplicar efeitos no texto.",
    postImage: "https://cdn.discordapp.com/attachments/823475059808927784/956960069105369118/svMRpp74XU9gCD0i7pwwpPY0Q6V34Z2mjM8MFIHpwhSwEnSO05PGTJgWZ97zmslZLxiDB0-AnMpsnfsw1316-h698.png",
    route: `${joaoneves.linkName}-gimp-7.2`,
  },
  {
    authors: [joaomanaia, tiagocaetano],
    postDate: "21/03/2022",
    postTitle: "FICHA DE ATIVIDADE - 7  (7.2) - 21/03/2022  -  GIMP",
    postDescription: "Nessa atividade vamos aprender a utilizar as ferramentas de seleção, modo seleção livre, adicionar canal de transparência, inverter a seleção, retirar seleção, adicionar nova camada, movimentar camada, aplicar filtro, remover olhos vermelhos, adicionar texto à imagem e aplicar efeitos no texto.",
    postImage: "https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/portfolio_api%2Fativid-7-2_Alterada.jpg?alt=media&token=866785a5-36db-4c59-ab91-0f7f5d7937ee",
    route: `${joaomanaia.linkName}-${tiagocaetano.linkName}-gimp-7.2`,
  },
  {
    authors: [joaoneves],
    postDate: "21/03/2022",
    postTitle: "FICHA DE ATIVIDADE - 7  (7.1) - 21/03/2022  -  GIMP",
    postDescription: "Nessa atividade vamos aprender a utilizar as ferramentas de seleção, modo seleção livre, adicionar canal de transparência, inverter a seleção, retirar seleção, adicionar nova camada, movimentar camada, aplicar filtro, remover olhos vermelhos, adicionar texto à imagem e aplicar efeitos no texto.",
    postImage: "https://cdn.discordapp.com/attachments/823475059808927784/956959389712007248/F0gKLBC1cH67Yg9Agy_LSrisH8wypFvtZgT2jVfyfAQddU06OlsW9ch9ZYY6tqDD99mS9K5yo03dgbIw1319-h698.png",
    route: `${joaoneves.linkName}-gimp-6.1-6.2`,
  },
  {
    authors: [joaomanaia, tiagocaetano],
    postDate: "21/03/2022",
    postTitle: "FICHA DE ATIVIDADE - 7  (7.1) - 21/03/2022  -  GIMP",
    postDescription: "Nessa atividade vamos aprender a utilizar as ferramentas de seleção, modo seleção livre, adicionar canal de transparência, inverter a seleção, retirar seleção, adicionar nova camada, movimentar camada, aplicar filtro, remover olhos vermelhos, adicionar texto à imagem e aplicar efeitos no texto.",
    postImage: "https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/portfolio_api%2FFoto1_Alterada.png?alt=media&token=71125741-8b70-4727-9fd6-35094fde622f",
    route: `${joaomanaia.linkName}-${tiagocaetano.linkName}-gimp-7.1`,
  },
  {
    authors: [joaomanaia, tiagocaetano],
    postDate: "14/03/2022",
    postTitle: "6 - 6.1 e 6.2 - Atividades - GIMP -Criação e edição de imagens",
    postDescription: "FICHA DE ATIVIDADE 6.1 e 6.2",
    postImage: "https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/portfolio_api%2FWallpaper.png?alt=media&token=d7cf16a4-689b-41fe-90b4-07e94ea47149",
    route: `${joaomanaia.linkName}-${tiagocaetano.linkName}-gimp-6.1-6.2`,
  },
  {
    authors: [joaoneves],
    postDate: "14/03/2022",
    postTitle: "6 - 6.1 e 6.2 - Atividades - GIMP -Criação e edição de imagens",
    postDescription: "FICHA DE ATIVIDADE 6.1 e 6.2",
    postImage: "https://cdn.discordapp.com/attachments/823475059808927784/956958368747102228/IW3znBo5xlU2etDHAisWWn9es-8YwZ-Cm_lBnDPtYY8nsAgFffYwR1eZGIJ4B6OPP_soTWYphrLfkMww1319-h698.png",
    route: `${joaoneves.linkName}-gimp-6.1-6.2`,
  },
  {
    authors: [joaoneves],
    postDate: "07/03/2022",
    postTitle: "5.2 - GIMP -Criação e edição de imagens",
    postDescription: "FICHA DE ATIVIDADE 5.2",
    postImage: "https://cdn.discordapp.com/attachments/823475059808927784/956957750515105792/c6yRrxf_MB7KTOwc-u3owmUvcXm0ckJ_NZ23mmXSjyIGLA8Gl0CZOqoOnzhl99RV7ypmwv1k02z5LU0w1319-h698.png",
    route: `${joaoneves.linkName}-gimp-5-2`,
  },
  {
    authors: [joaomanaia, tiagocaetano],
    postDate: "07/03/2022",
    postTitle: "5.2 - GIMP -Criação e edição de imagens",
    postDescription: "FICHA DE ATIVIDADE 5.2",
    postImage: "https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/portfolio_api%2FSIIIIIIMMMMM.gif?alt=media&token=39678606-cd31-48c8-acaa-f0ab76107eb2",
    route: `${joaomanaia.linkName}-${tiagocaetano.linkName}-gimp-5-2`,
  },
  {
    authors: [joaoneves],
    postDate: "07/03/2022",
    postTitle: "5.1 - GIMP -Criação e edição de imagens",
    postDescription: "FICHA DE ATIVIDADE 5.1",
    postImage: "https://cdn.discordapp.com/attachments/823475059808927784/956957339888521246/vxv-cQi77o7y_i2Exu3qW-gYPGgYyAWDkPLBiW8thr0gQyYeBv9f_8tD_q5-I9N8ChbUCVutuhHSykMw1319-h698.png",
    route: `${joaoneves.linkName}-gimp-5-1`,
  },
  {
    authors: [joaomanaia, tiagocaetano],
    postDate: "07/03/2022",
    postTitle: "5.1 - GIMP -Criação e edição de imagens",
    postDescription: "FICHA DE ATIVIDADE 5.1",
    postImage: "https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/portfolio_api%2Ftrump-kimjongun-joaomanaia-tiagocaetano.jpg?alt=media&token=b622e586-9416-46c8-aad9-b57288ff5cd8",
    route: `${joaomanaia.linkName}-${tiagocaetano.linkName}-gimp-5-1`,
  },
  {
    authors: [joaoneves],
    postDate: "03/03/2022",
    postTitle: "4 - GIMP -Criação e edição de imagens",
    postDescription: "FICHA DE ATIVIDADE 4",
    postImage: "https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/portfolio_api%2Fgimp-4-joaoneves.png?alt=media&token=830d72db-5ea0-42c5-ba68-4b6ddf6d439c",
    route: `${joaoneves.linkName}-gimp-4`,
  },
  {
    authors: [joaomanaia, tiagocaetano],
    postDate: "03/03/2022",
    postTitle: "4 - GIMP -Criação e edição de imagens",
    postDescription: "FICHA DE ATIVIDADE 4",
    postImage: "https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/portfolio_api%2FRetocar-imagem-joaomanaia-tiagocaetano.png?alt=media&token=43fbb8aa-042a-49d7-8592-4c791c0782a2",
    route: `${joaomanaia.linkName}-${tiagocaetano.linkName}-gimp-4`,
  },
  {
    authors: [joaomanaia, tiagocaetano, joaoneves],
    postDate: "28/02/2022",
    postTitle: "3 - GIMP -Criação e edição de imagens",
    postDescription: "FICHA DE ATIVIDADE 3",
    postImage: "https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/portfolio_api%2Fgimp-3-joaomanaia-tiagocaetano.gif?alt=media&token=a6ce0ab5-8d79-469d-aa01-95a0f300aeee",
    route: `${joaomanaia.linkName}${tiagocaetano.linkName}-${joaoneves.linkName}-gimp-3`,
  },
  {
    authors: [joaoneves],
    postDate: "28/02/2022",
    postTitle: "2 - GIMP -Criação e edição de imagens",
    postDescription: "FICHA DE ATIVIDADE 2",
    postImage: "https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/portfolio_api%2Fgimp2-joaoneves.png?alt=media&token=a9467ff0-eda3-41fc-931a-6f57e7e26dee",
    route: `${joaoneves.linkName}-gimp-2`,
  },
  {
    authors: [joaomanaia, tiagocaetano],
    postDate: "28/02/2022",
    postTitle: "2 - GIMP -Criação e edição de imagens",
    postDescription: "FICHA DE ATIVIDADE 2",
    postImage: "https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/portfolio_api%2Ftrab2-18%2C24-joaomanaia%2Ctiagocaetano-12A.jpg?alt=media&token=14b63ee2-5b85-4416-84e8-5e1f0ad5ecf4",
    route: `${joaomanaia.linkName}-${tiagocaetano.linkName}-gimp-2`,
  },
  {
    authors: [joaoneves],
    postDate: "24/02/2022",
    postTitle: "1 - GIMP - Criação e edição de imagens",
    postDescription: "O GIMP é um editor de imagens multiplataforma disponível para GNU/Linux, macOS, Windows e outros sistemas operacionais. É um software livre , você pode alterar seu código-fonte e distribuir suas alterações.",
    postImage: "https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/portfolio_api%2Fgimp-1-joaoneves.png?alt=media&token=69c31f11-caff-4b85-abef-08e7f2df144c",
    route: `${joaoneves.linkName}-gimp-1`,
  },
  {
    authors: [joaomanaia, tiagocaetano],
    postDate: "24/02/2022",
    postTitle: "1 - GIMP - Criação e edição de imagens",
    postDescription: "O GIMP é um editor de imagens multiplataforma disponível para GNU/Linux, macOS, Windows e outros sistemas operacionais. É um software livre , você pode alterar seu código-fonte e distribuir suas alterações.",
    postImage: "https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/portfolio_api%2Fgimp-1-tiagocaetano-joaomanaia.png?alt=media&token=f3224374-72cb-42b3-aa3f-d4348f5323ea",
    route: `${joaomanaia.linkName}-${tiagocaetano.linkName}-gimp-1`,
  },
  {
    authors: [tiagocaetano, joaomanaia, joaoneves],
    postDate: "21/02/2022",
    postTitle: "Sistema de cores",
    postDescription: "Todos os dias, à nossa volta somos cercados por objetos diversos, como, carros, comboios, árvores, casas, canetas, livros, etc.",
    postImage: "https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/portfolio_api%2Fcolor_system.jpg?alt=media&token=af1f2277-cf27-4713-a339-77cf8caa5532",
    route: `${tiagocaetano.linkName}/sistema-de-cores`,
  },
]