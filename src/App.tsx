import clsx from "clsx";
import Day1 from "./days/day1";
import Day2 from "./days/day2";

function App() {
  return (
    <main>
      <p className="mb-4 text-xl">
        100 Days CSS Challenge implemented using Tailwind CSS
      </p>
      <div className={clsx("flex gap-2")}>
        <Day1 />
        <Day2 />
      </div>
    </main>
  );
}

export default App;
