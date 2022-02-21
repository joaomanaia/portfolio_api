export const defaultUserPhotoUrl = "https://firebasestorage.googleapis.com/v0/b/fega-app.appspot.com/o/user_default_image.png?alt=media&token=7f18e231-8446-4499-9935-63209fa686cb"

export type UserType = {
    name: string
    photoUrl: string
    linkName: string
    role: string
}

export const joaoneves: UserType = {
    name: "João Neves",
    photoUrl: "https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/joaoneves2.jpg?alt=media&token=fbf37dd5-491e-400b-a30a-1cd3328245f6",
    linkName: "joaoneves",
    role: "Secretário"
}

export const joaomanaia: UserType = {
    name: "João Manaia",
    photoUrl: "https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/joaomanaia2.jpeg?alt=media&token=f40b1305-30ae-4cd4-8156-58f246fd5908",
    linkName: "joaomanaia",
    role: "O que faz tudo"
}

export const tiagocaetano: UserType = {
    name: "Tiago Caetano",
    photoUrl: "https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/timilo2.jpg?alt=media&token=2fef7a9b-ad44-45e5-9abb-214bad8efb89",
    linkName: "tiagocaetano",
    role: "Motorista que dá ideias"
}

export const allUsers: UserType[] = [joaoneves, joaomanaia, tiagocaetano]