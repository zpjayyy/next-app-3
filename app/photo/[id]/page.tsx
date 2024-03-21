import React from "react";
import {photos} from "@/app/data";
import {Metadata} from "next";
import {Product, WithContext} from "schema-dts";

export default function PhotoPage({params}: Readonly<{ params: { id: string } }>) {
  const jsonLd: WithContext<Product> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: params.id,
    image: params.id,
    description: params.id
  }

  const photo = photos.find((photo) => photo.id === params.id)
  return (
    <div className="block w-1/4 mx-auto mt-10">
      <script type="application/ld+json"
              dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}/>
      <img className="w-52" src={photo?.src}/>
    </div>
  )
}

export async function generateMetadata({params, searchParams}: {
  params: { id: string },
  searchParams: string
}, parent: Promise<Metadata>) {
  const id = params.id
  const photo = await fetch('').then((res) => res.json())

  const previousImages = (await parent).openGraph?.images || []
  let images;
  if (Array.isArray(previousImages)) {
    images = ['/abc', ...previousImages]
  } else {
    images = ['/abc', previousImages]
  }
  return {
    title: photo.title,
    openGraph: {
      images: images
    }
  }
}