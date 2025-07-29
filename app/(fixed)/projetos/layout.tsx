export default function ProjetosLayout({ children }: { children: React.ReactNode }) {
  return (
    <article
      itemScope
      itemType="https://schema.org/Article"
      className="bg-background my-2 flex flex-col rounded-2xl border p-4"
    >
      {children}
    </article>
  )
}
