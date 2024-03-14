import {photos} from "./data";
import Link from "next/link";

async function handleFormAction(formData: FormData) {
  'use server'
  const name = formData.get('name')
}

export default function Home() {
  return (
    <>
      <div className="flex flex-row flex-wrap">
        {photos.map(({id, src}) => (
          <Link key={id} href={`/photo/${id}`}>
            <img width="200" src={src} className="m-1" alt="Cat"/>
          </Link>
        ))}
      </div>
      <div>
        <form action={handleFormAction}>
          <input type="text" name="name"/>
          <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
}
