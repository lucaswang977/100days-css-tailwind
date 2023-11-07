// https://100dayscss.com/days/8/

import { cn } from "@/helper/utils"

const dangerouslyStyles = `
@keyframes rotate {
	from {
		transform: rotate(0deg) translate3d(0, 0, 0);
	}
	to {
		transform: rotate(360deg) translate3d(0, 0, 0);
	}
}
`
const Blubb = (props: { n: number }) => {
  return (
    <div
      id={`blubb-${props.n}`}
      style={{
        transform: `rotate(${Math.floor(Math.random() * 300)}deg)`,
      }}
      className={cn("absolute", "left-[10px] top-[10px]", "h-[50px] w-[50px]")}
    >
      <div
        style={{
          transformOrigin: `${40 - props.n * 3}px ${40 - props.n * 3}px`,
          animation: `rotate ${2.5 + props.n / 5}s ease-in-out ${
            props.n / 5
          }s infinite`,
        }}
        className={cn(
          "absolute",
          "block",
          "h-[50px] w-[50px]",
          "bg-white",
          "rounded-full",
          "blur-[5px]",
        )}
      ></div>
    </div>
  )
}

const Sparkle = (props: { n: number }) => {
  return (
    <div
      id={`sparkle-${props.n}`}
      style={{
        width: `${7 + props.n}px`,
        height: `${7 + props.n}px`,
        transform: `rotate(${Math.floor(Math.random() * 300)}deg)`,
      }}
      className={cn("absolute", "left-[38px] top-[38px]")}
    >
      <div
        style={{
          width: `${7 + props.n}px`,
          height: `${7 + props.n}px`,
          transformOrigin: `${60 - props.n * 2}px ${60 - props.n * 2}px`,
          animation: `rotate ${3.5 + props.n / 5}s ease-in-out ${
            props.n / 5
          }s infinite`,
        }}
        className={cn(
          "absolute",
          "block",
          "bg-white",
          "rounded-full",
          "blur-[3px]",
        )}
      ></div>
    </div>
  )
}

const Day8 = () => {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center",
        "h-[400px] w-[400px]",
        "rounded-sm",
        "text-[#786450]",
        "bg-black",
        "overflow-hidden",
        "shadow-[1px_2px_10px_0px_rgba(0,0,0,0.3)]",
        "contrast-[25]",
      )}
    >
      <style dangerouslySetInnerHTML={{ __html: dangerouslyStyles }} />
      <div
        id="ball"
        className={cn(
          "absolute",
          "left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]",
          "h-[90px] w-[90px]",
          "bg-white",
          "rounded-full",
          "blur-[15px]",
        )}
      />
      <div className={cn("relative", "h-[50px] w-[50px]")}>
        {Array.from(Array(8).keys()).map((i) => (
          <Blubb key={i} n={i} />
        ))}
        {Array.from(Array(10).keys()).map((i) => (
          <Sparkle key={i} n={i} />
        ))}
      </div>
    </div>
  )
}

export default Day8
