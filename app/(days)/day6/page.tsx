// https://100dayscss.com/days/6/

import { cn } from "@/helper/utils"
import { Open_Sans } from "next/font/google"
import Image from "next/image"

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "600"],
})

const Box = ({
  className,
  children,
  ...rest
}: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center",
        "h-1/3 w-full",
        "bg-[#F5E8DF]",
        "text-[12px] font-[600]",
        "cursor-pointer",
        "hover:bg-[#E1CFC2]",
        "transition-colors duration-[400ms] ease-in-out",
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

const Button = ({
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center",
        "h-[30px] w-[120px]",
        "bg-none",
        "text-[12px] font-[600]",
        "cursor-pointer",
        "rounded-2xl border-[1px] border-solid border-[#786450]",
        "hover:bg-[#786450] hover:text-white",
        "transition-colors duration-300 ease-in-out",
      )}
      {...rest}
    ></div>
  )
}

const Day6 = () => {
  return (
    <div
      className={cn(
        openSans.className,
        "flex items-center justify-center",
        "h-[400px] w-[400px]",
        "rounded-sm",
        "text-[#786450]",
        "bg-gradient-to-r from-[#EEBE6C] to-[#CA7C4E]",
        "shadow-[1px_2px_10px_0px_rgba(0,0,0,0.3)]",
      )}
    >
      <div
        className={cn(
          "flex",
          "h-[300px] w-[320px]",
          "bg-white",
          "rounded-sm",
          "shadow-[10px_10px_15px_0px_rgba(0,0,0,0.3)]",
        )}
      >
        <div
          id="profile"
          className={cn(
            "flex flex-col",
            "w-3/5",
            "items-center justify-center",
          )}
        >
          <div id="avatar" className={cn("relative", "group cursor-pointer")}>
            <Image
              src="https://100dayscss.com/codepen/jessica-potter.jpg"
              className="rounded-full"
              width={70}
              height={70}
              alt="Jessica Potter"
            />
            <div
              className={cn(
                "absolute -left-[3px] -top-[3px]",
                "h-[76px] w-[76px]",
                "rounded-full border-[1px] border-solid",
                "border-b-[#786450] border-l-[#786450] border-t-[#786450]",
                "group-hover:-rotate-[360deg]",
                "transition-transform duration-[1.5s] ease-in-out",
              )}
            />
            <div
              className={cn(
                "absolute -left-[6px] -top-[6px]",
                "h-[82px] w-[82px]",
                "rounded-full border-[1px] border-solid",
                "border-b-[#786450] border-r-[#786450] border-t-[#786450]",
                "group-hover:rotate-[360deg]",
                "transition-transform duration-[1.5s] ease-in-out",
              )}
            />
          </div>
          <div id="name" className="mt-[20px] text-[15px] font-[600]">
            Jessica Potter
          </div>
          <div id="job" className="text-[11px] font-[300] leading-[15px]">
            Visual Artist
          </div>
          <div id="actions" className="mt-[33px] flex flex-col gap-2">
            <Button>Follow</Button>
            <Button>Message</Button>
          </div>
        </div>
        <div id="stats" className="flex w-2/5 flex-col gap-[1px]">
          <Box>
            <span className="text-[18px] font-[600]">523</span>
            <span className="text-[11px] font-[300]">Posts</span>
          </Box>
          <Box>
            <span className="text-[18px] font-[600]">523</span>
            <span className="text-[11px] font-[300]">Posts</span>
          </Box>
          <Box>
            <span className="text-[18px] font-[600]">523</span>
            <span className="text-[11px] font-[300]">Posts</span>
          </Box>
        </div>
      </div>
    </div>
  )
}

export default Day6
