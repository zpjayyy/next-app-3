import {Route} from "next";
import Link from "next/link";

function Card<T extends string>({href}: {href: Route<T> | URL}) {
  return (
    <Link href={href}>
      <div>My card</div>
    </Link>
  )
}