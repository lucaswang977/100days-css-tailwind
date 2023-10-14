import clsx from "clsx"
import Day1 from "./days/day1"
import Day2 from "./days/day2"

function App() {
  return (
    <main>
      <p className="text-xl mb-4">
        100 Days CSS Challenge implemented using Tailwind CSS
      </p>
      <div className={clsx(
        "grid grid-cols-2 md:grid-cols-3 grid-flow-row",
        "gap-1",
      )}>
        <Day1 />
        <Day2 />
      </div>
    </main>
  )
}

export default App
