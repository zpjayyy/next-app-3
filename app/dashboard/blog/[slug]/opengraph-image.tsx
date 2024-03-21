import {ImageResponse} from "next/og";

export const runtime = "edge"

export const alt = "about blog"

export const size = {
  width: 1200,
  height: 630
}

export const contentType = "image/png"

export default async function Image({params}: { params: { slug: string } }) {
  const post = await fetch(`https://localhost:8080/dashboard/blog/${params.slug}`)
    .then((res) => res.json())

  return new ImageResponse(
    (
      <div style={{
        fontSize: 48,
        background: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyItems: "center",
        alignItems: "center"
      }}>
        {post.title}
      </div>
    ),
    {
      ...size
    }
  )
}