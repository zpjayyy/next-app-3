import React from "react";
import {photos} from "@/app/data";

export default function Page({params}: Readonly<{ params: { id: string } }>) {
  const photo = photos.find((photo) => photo.id === params.id)
  return (
    <div className="flex h-60 justify-center items-center fixed bottom-0 bg-slate-300 w-full">
      <img className="w-52" src={photo?.src}/>
    </div>
  )
}