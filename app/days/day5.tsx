// https://100dayscss.com/days/5/

import { cn } from "@/helper/utils"
import { Open_Sans } from "next/font/google"

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
})

const Line = ({
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"div">) => {
  return <div className={cn("h-[1px] w-full", "bg-[#F2F2F2]")} {...rest}></div>
}

const Polyline = ({
  points,
  color,
  className,
}: {
  points: { x: number; y: number; v: number }[]
  color: string
} & React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div className={cn("absolute inset-0", className)}>
      <svg>
        <polyline
          points={points.map((i) => `${i.x},${i.y}`).join(" ")}
          stroke={color}
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      {points.map((point) => {
        return (
          <div
            key={`${point.x}-${point.y}`}
            style={{
              background: color,
              transform: `translate(${point.x - 3}px, ${point.y - 3}px)`,
            }}
            className={cn(
              "absolute left-0 top-0 z-20",
              "h-[6px] w-[6px]",
              "rounded-full",
              "cursor-pointer",
            )}
          >
            <div
              style={{
                background: color,
                transform: `translate(${point.x - 3}px, ${point.y - 3}px)`,
              }}
              className={cn(
                "absolute",
                "text-[11px] text-[600] text-white",
                "after:content-[' '] after:absolute after:h-[6px] after:w-[6px] ",
                "after:-bottom-[3px] after:left-[50%] after:-ml-[3px] after:rotate-45",
                "px-[8px] py-[6px]",
                "rounded-xs",
              )}
            >
              {point.v}
            </div>
          </div>
        )
      })}
    </div>
  )
}

const ParameterSpan = ({
  className,
  children,
  ...rest
}: React.ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        className,
        "relative",
        "before:absolute before:block",
        "before:content-['']",
        "before:h-[3px] before:w-[11px]",
        "before:-left-[16px] before:top-[6px]",
        "before:rounded-xs",
      )}
      {...rest}
    >
      {children}
    </span>
  )
}

const Day5 = () => {
  return (
    <div
      className={cn(
        openSans.className,
        "flex items-center justify-center",
        "h-[400px] w-[400px]",
        "rounded-sm",
        "bg-[#42A7A1]",
        "shadow-[1px_2px_10px_0px_rgba(0,0,0,0.3)]",
      )}
    >
      <div
        id="card"
        className={cn(
          "h-[220px] w-[280px]",
          "flex flex-col",
          "items-center",
          "bg-white",
          "overflow-hidden rounded-sm",
          "shadow-[10px_10px_15px_0px_rgba(0,0,0,0.3)]",
        )}
      >
        <div
          id="header"
          className={cn(
            "flex",
            "h-[60px] w-full",
            "items-center justify-between",
            "bg-[#F1BA64] text-white",
          )}
        >
          <div id="header-left" className="ml-3 flex flex-col">
            <span className="text-[14px] font-[600] uppercase">
              Weekly report
            </span>
            <span className="text-[11px] font-[400]">01. Feb - 07. Feb</span>
          </div>
          <div id="header-right" className="mr-3 flex flex-col text-right">
            <span className="text-[11px] font-[400]">Revenue</span>
            <span className="text-[14px] font-[600]">$ 3621.79</span>
          </div>
        </div>

        <div
          id="parameter"
          className={cn(
            "flex justify-end",
            "my-4",
            "w-full",
            "text-[9px] text-[#606060]",
          )}
        >
          <ParameterSpan className="before:bg-[#FA7373]">Views</ParameterSpan>
          <ParameterSpan className="ml-10 mr-3 before:bg-[#7BA2FF]">
            Purchases
          </ParameterSpan>
        </div>

        <div
          id="statistic"
          className={cn(
            "relative",
            "h-[81px] w-[260px]",
            "flex flex-col justify-between",
          )}
        >
          <Polyline
            color="#FA7373"
            points={[
              { x: 9, y: 46, v: 458 },
              { x: 50, y: 12, v: 812 },
              { x: 90, y: 23, v: 746 },
              { x: 130, y: 11, v: 877 },
              { x: 171, y: 38, v: 517 },
              { x: 211, y: 48, v: 434 },
              { x: 251, y: 19, v: 458 },
            ]}
          />
          <Polyline
            color="#7BA2FF"
            points={[
              { x: 9, y: 61, v: 26 },
              { x: 50, y: 50, v: 41 },
              { x: 90, y: 65, v: 22 },
              { x: 130, y: 55, v: 36 },
              { x: 171, y: 61, v: 25 },
              { x: 211, y: 74, v: 13 },
              { x: 251, y: 64, v: 20 },
            ]}
          />
          <Line />
          <Line />
          <Line />
        </div>

        <div
          id="days"
          className={cn(
            "flex",
            "w-[260px]",
            "mt-2",
            "justify-between",
            "uppercase",
            "text-[9px] text-[#949494]",
          )}
        >
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
          <span>Sun</span>
        </div>
      </div>
    </div>
  )
}

export default Day5
