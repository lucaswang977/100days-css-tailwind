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
const Day8 = () => {
  return (
    <div
      className={cn(
        "relative",
        "flex items-center justify-center",
        "h-[400px] w-[400px]",
        "rounded-sm",
        "text-[#786450]",
        "bg-black",
        "overflow-hidden",
        "shadow-[1px_2px_10px_0px_rgba(0,0,0,0.3)]",
        "contrast-[25px]",
      )}
    >
      <style dangerouslySetInnerHTML={{ __html: dangerouslyStyles }} />
      <div
        id="ball"
        className={cn(
          "relative",
          "h-[90px] w-[90px]",
          "bg-white",
          "rounded-full",
          "blur-0",
        )}
      >
        {Array.from(Array(1).keys()).map((i) => {
          return (
            <div
              key={`blubb-${i}`}
              id={`blubb-${i}`}
              className={cn(
                "absolute",
                "left-[20px] top-[20px]",
                "h-[50px] w-[50px]",
                "after:content-[' ']",
                "after:block",
                "after:h-[50px] after:w-[50px]",
                "after:rounded-full",
                "after:bg-white",
                "after:origin-[7px_7px]",
                "after:animate-[rotate_ease-in-out_1s_infinite]",
                "after:blur-5",
              )}
            ></div>
          )
        })}
        {Array.from(Array(1).keys()).map((i) => {
          return (
            <div
              key={`sparkle-${i}`}
              id={`sparkle-${i}`}
              className={cn(
                "absolute",
                "left-[38px] top-[38px]",
                "h-[50px] w-[50px]",
                "after:content-[' ']",
                "after:absolute",
                "after:block",
                "after:h-[15px] after:w-[15px]",
                "after:rounded-full",
                "after:bg-white",
                "after:origin-[37px_37px]",
                "after:animate-[rotate_ease-in-out_1s_infinite]",
                "after:blur-1",
              )}
            ></div>
          )
        })}
      </div>
    </div>
  )
}

export default Day8