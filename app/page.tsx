import {photos} from "./data";
import Link from "next/link";
import Image from "next/image";

async function handleFormAction(formData: FormData) {
  'use server'
  const name = formData.get('name')
}

export default function Home() {
  console.log(process.env.DB_HOST)
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
      <div>
        <Image src="https://s3.amazonaws.com/my-bucket/profile.png"
               alt="picture"
               width="500"
               height="500"/>
      </div>
    </>
  );
}
