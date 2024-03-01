import {notFound} from "next/navigation";

export default async function Page({params}: Readonly<{ params: { slug: string } }>) {
  const user = await fetchUser(params.slug)
  if (!user) {
    notFound()
  } else {
    return (
      <div>My post: {user}</div>
    )
  }
}

async function fetchUser(slug: string) {
  return slug
}