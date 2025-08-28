export default function FixedLayout({ children }: LayoutProps<"/">) {
  return <main className="container mx-auto w-full max-w-6xl px-4 xl:px-0">{children}</main>
}
