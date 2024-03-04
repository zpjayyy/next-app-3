import React from "react";
import {photos} from "@/app/data";

export default function PhotoPage({params}: Readonly<{ params: {id: string} }>) {
  const photo = photos.find((photo) => photo.id === params.id)
  return (
    <div className="block w-1/4 mx-auto mt-10">
      <img className="w-52" src={photo?.src}/>
    </div>
  )
}