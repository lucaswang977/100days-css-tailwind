"use client"

import Day1 from "@/days/day1"
import Day2 from "@/days/day2"
import Day3 from "@/days/day3"
import Day4 from "@/days/day4"
import Day5 from "@/days/day5"
import Day6 from "@/days/day6"
import Day7 from "@/days/day7"
import Day8 from "@/days/day8"
import { cn } from "@/helper/utils"
import * as React from "react"

const Days = [Day1, Day2, Day3, Day4, Day5, Day6, Day7, Day8]

function App() {
  return (
    <main>
      <p className="mb-4 text-xl">
        100 Days CSS Challenge implemented using Tailwind CSS
      </p>
      <div className={cn("flex basis-1/3 flex-wrap gap-2", "mx-2")}>
        {Days.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-1"
            >
              {item()}
              <p>Day {index + 1}</p>
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default App
