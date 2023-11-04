import { cn } from "@/helper/utils"
import Link from "next/link"
import * as React from "react"

const days = Array.from(Array(8).keys()).map((i) => `day${(i + 1).toString()}`)

function App() {
  return (
    <div
      className={cn("flex h-full w-full items-center justify-center", "mx-2")}
    >
      <div className="flex flex-wrap items-center justify-center gap-3">
        {days.map((item) => {
          return (
            <Link href={item} key={item}>
              {item.toUpperCase()}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default App
