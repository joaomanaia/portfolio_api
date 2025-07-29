import Image from "next/image"

interface FigureProps {
  src: string
  alt: string
  caption: string
  imageClassName?: string
}

export const Figure: React.FC<FigureProps> = ({ src, alt, caption, imageClassName }) => {
  return (
    <figure className="border rounded-2xl p-4 space-y-4 w-fit">
      <Image className={imageClassName} src={src} alt={alt} width={300} height={300} />
      <figcaption>{caption}</figcaption>
    </figure>
  )
}
