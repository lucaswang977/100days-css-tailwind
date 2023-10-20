import Day1 from "@/days/day1"
import Day2 from "@/days/day2"
import Day3 from "@/days/day3"
import Day4 from "@/days/day4"
import { cn } from "@/helper/utils"

function App() {
  return (
    <main>
      <p className="mb-4 text-xl">
        100 Days CSS Challenge implemented using Tailwind CSS
      </p>
      <div className={cn("flex basis-1/3 flex-wrap gap-2", "mx-2")}>
        <Day1 />
        <Day2 />
        <Day3 />
        <Day4 />
      </div>
    </main>
  )
}

export default App
