// https://100dayscss.com/days/7/

import { cn } from "@/helper/utils"
import { Open_Sans } from "next/font/google"
import { FaSearch } from "react-icons/fa"

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
})

const Notification = ({
  className,
  children,
  time,
  ...rest
}: { time: string } & React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={cn(
        className,
        "relative",
        "z-20",
        "mb-[25px] ml-[43px] mr-[20px] mt-[25px]",
        "p-0",
      )}
      {...rest}
    >
      <p className="mb-[2px] text-[11px] leading-[11px]">{time}</p>
      <p className="text-[15px] leading-[20px]">{children}</p>
      <div
        id="circle"
        className={cn(
          "absolute",
          "h-[11px] w-[11px]",
          "bg-white",
          "rounded-full border-[2px] border-solid border-[#5F98CD]",
          "-left-[20px] top-0",
          "shadow-[0px_0px_0px_3px_rgba(255,255,255,1)]",
        )}
      />
    </div>
  )
}

const Day7 = () => {
  return (
    <div
      className={cn(
        openSans.className,
        "flex items-center justify-center",
        "h-[400px] w-[400px]",
        "rounded-sm",
        "text-[#786450]",
        "bg-[#264057]",
        "shadow-[1px_2px_10px_0px_rgba(0,0,0,0.3)]",
      )}
    >
      <div
        id="panel"
        className={cn(
          "flex flex-col",
          "h-[300px] w-[300px]",
          "bg-white",
          "rounded-sm",
          "overflow-hidden",
          "shadow-[10px_10px_15px_0px_rgba(0,0,0,0.3)]",
        )}
      >
        <div
          id="header"
          className={cn(
            "flex items-center justify-between",
            "h-[60px] w-full",
            "bg-[#5F98CD]",
            "px-4",
          )}
        >
          <div id="menu-icon" className="group cursor-pointer">
            <svg
              className="h-[50px] w-[50px]"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                className="stroke-[#B2DAFF] transition-colors duration-200 ease-in-out group-hover:stroke-white"
                x1="00"
                y1="40"
                x2="30"
                y2="40"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <circle
                cx="44"
                cy="40"
                r="6"
                className="fill-[#B2DAFF] transition-colors duration-200 ease-in-out group-hover:fill-white"
              />
              <line
                className="stroke-[#B2DAFF] transition-colors duration-200 ease-in-out group-hover:stroke-white"
                x1="00"
                y1="60"
                x2="50"
                y2="60"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div
            id="title"
            className={cn(
              "pr-7",
              "leading-[60px]",
              "text-[15px] font-[600] text-white",
            )}
          >
            Notifications
          </div>
          <div id="search-icon" className="group cursor-pointer">
            <FaSearch
              className={cn(
                "text-[#B2DAFF] group-hover:text-white",
                "transition-colors duration-200 ease-in-out",
              )}
            />
          </div>
        </div>
        <div id="notifications" className={cn("relative grow")}>
          <div className="absolute bottom-0 left-[27px] top-0 z-0 w-[3px] bg-[#EBEBEB]" />
          <Notification time="9:24 AM">
            <b>John Walker</b> posted a photo on your wall.
          </Notification>

          <Notification time="8:19 AM">
            <b>Alice Parker</b> commented your last post.
          </Notification>

          <Notification time="Yesterday">
            <b>Luke Wayne</b> added you as friend.
          </Notification>
        </div>
      </div>
    </div>
  )
}

export default Day7
