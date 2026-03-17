import { redirect } from "next/navigation"

export default async function CollectionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  await params
  redirect("/paving")
}

