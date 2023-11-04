// https://100dayscss.com/days/1/

import { cn } from "@/helper/utils"
import React from "react"

const BigZero = ({ className, ...rest }: JSX.IntrinsicElements["div"]) => {
  return (
    <>
      <div
        className={cn(
          className,
          "border-[24px] border-white",
          "absolute",
          "h-[100px] w-[100px]",
          "rounded-full",
          "shadow-[0px_0px_13px_0px_rgba(0,0,0,0.2)]",
        )}
        {...rest}
      ></div>
    </>
  )
}

const BigOne = ({ className, ...rest }: JSX.IntrinsicElements["div"]) => {
  return (
    <div className={cn(className)} {...rest}>
      <div
        className={cn(
          "absolute -left-[16px]",
          "h-[40px] w-[20px]",
          "bg-white",
          "rounded-sm",
          "z-10",
          "shadow-[1px_2px_10px_0px_rgba(0,0,0,0.3)]",
          "rotate-[50deg]",
        )}
      />
      <div
        className={cn(
          "absolute top-0",
          "h-[100px] w-[24px]",
          "bg-white",
          "rounded-sm",
          "z-20",
          "shadow-[1px_2px_10px_0px_rgba(0,0,0,0.3)]",
        )}
      />
    </div>
  )
}

const Day1 = () => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center",
        "h-[400px] w-[400px]",
        "rounded-sm",
        "bg-gradient-to-tr from-[#43389F] to-[#4ec6ca]",
        "shadow-[1px_2px_10px_0px_rgba(0,0,0,0.3)]",
        "font-['Courier_New'] text-white",
      )}
    >
      <div className="relative h-[100px] w-[200px]">
        <BigOne />
        <BigZero className="left-[17px] z-10" />
        <BigZero className="left-[100px] z-0" />
      </div>
      <span
        className={cn(
          "uppercase",
          "text-[82px] leading-[60px]",
          "font-[700]",
          "mt-[6px]",
        )}
      >
        Days
      </span>
      <span className="text-[23px] font-[700] uppercase leading-3 tracking-[0.04em]">
        CSS Challenge
      </span>
    </div>
  )
}

export default Day1
