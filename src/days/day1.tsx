import React from "react"
import clsx from "clsx"


const BigZero = ({ className, ...rest }: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <>
      <div className={clsx(
        className,
        "absolute",
        "h-[55%] w-[55%]",
        "border-white border-[2vw]",
        "rounded-[50%]",
        "shadow-md",
      )}
        {...rest}
      ></div>
    </>
  )
}

const BigOne = () => {
  return (
    <>
      <div className={clsx(
        "absolute",
        "h-[20%] w-[10%]",
        "bg-white",
        "rounded-sm",
        "z-10",
        "shadow-md",
        "rotate-[50deg]",
      )} />
      <div className={clsx(
        "absolute top-0 left-[8%]",
        "h-[55%] w-[12%]",
        "bg-white",
        "rounded-sm",
        "z-20",
        "shadow-md"
      )} />
    </>
  )
}

const Day1 = () => {
  return (
    <div className={clsx(
      "flex justify-center items-center",
      "w-72 h-72",
      // "w-56 h-56",
      "rounded-sm",
      "from-[#43389F] to-[#4ec6ca] bg-gradient-to-tr",
      "shadow-lg shadow-slate-500",
      "font-['Courier_New'] text-white",
    )}>
      <div className="relative w-1/2 h-1/2">
        <BigOne />
        <BigZero className="left-[16%] z-10" />
        <BigZero className="left-[60%] z-0" />
      </div>
    </div>
  )
}

export default Day1
