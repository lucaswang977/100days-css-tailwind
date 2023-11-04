"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import * as React from "react"

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  console.log(pathname)
  const match = pathname.match(/\d+/)
  if (!match) return children

  const number = parseInt(match[0])
  return (
    <div className="flex w-fit flex-col">
      {children}
      <div className="flex justify-between">
        <Link href={`/day${number > 0 ? number - 1 : 0}`}>Prev</Link>
        <Link href={`/day${number + 1}`}>Next</Link>
      </div>
    </div>
  )
}
