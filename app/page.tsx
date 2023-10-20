import Day1 from "@/days/day1"
import Day2 from "@/days/day2"
import Day3 from "@/days/day3"
import { cn } from "@/helper/utils"

function App() {
  return (
    <main>
      <p className="mb-4 text-xl">
        100 Days CSS Challenge implemented using Tailwind CSS
      </p>
      <div className={cn("flex gap-2")}>
        <Day1 />
        <Day2 />
        <Day3 />
      </div>
    </main>
  )
}

export default App
