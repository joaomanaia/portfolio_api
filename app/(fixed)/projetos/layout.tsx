export default function ProjetosLayout({ children }: { children: React.ReactNode }) {
  return (
    <article
      itemScope
      itemType="https://schema.org/Article"
      className="flex flex-col container border p-4 bg-background my-2 rounded-2xl"
    >
      {children}
    </article>
  )
}
