import { cache } from "react"

const getNow = cache(() => new Date())

export default getNow
