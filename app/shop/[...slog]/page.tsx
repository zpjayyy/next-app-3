export default function Page({params}: Readonly<{ params: { slug: [] } }>) {
  return <div>My shop: {JSON.stringify(params)}</div>
}