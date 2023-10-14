import React from "react"
import clsx from "clsx"

const BigZero = ({ className, ...rest }: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <>
      <div className={clsx(
        className,
        "absolute",
        "h-[100px] w-[100px]",
        "border-white border-[24px]",
        "rounded-full",
        "shadow-[0px_0px_13px_0px_rgba(0,0,0,0.2)]",
      )}
        {...rest}
      ></div>
    </>
  )
}

const BigOne = ({ className, ...rest }: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div className={clsx(className)} {...rest}>
      <div className={clsx(
        "absolute -left-[16px]",
        "h-[40px] w-[20px]",
        "bg-white",
        "rounded-sm",
        "z-10",
        "shadow-[1px_2px_10px_0px_rgba(0,0,0,0.3)]",
        "rotate-[50deg]",
      )}
      />
      <div className={clsx(
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
    <div className={clsx(
      "flex flex-col justify-center items-center",
      "w-[400px] h-[400px]",
      "rounded-sm",
      "from-[#43389F] to-[#4ec6ca] bg-gradient-to-tr",
      "shadow-[1px_2px_10px_0px_rgba(0,0,0,0.3)]",
      "font-['Courier_New'] text-white",
    )}>
      <div className="relative w-[200px] h-[100px]">
        <BigOne />
        <BigZero className="left-[17px] z-10" />
        <BigZero className="left-[100px] z-0" />
      </div>
      <span className={clsx(
        "uppercase",
        "leading-[60px]",
        "text-[82px]",
        "font-[700]",
        "mt-[6px]",
      )}>Days</span>
      <span className={clsx(
        "uppercase",
        "text-[23px]",
        "leading-[20px]",
        "font-[700]",
        "tracking-[0.04em]"
      )}>
        CSS Challenge
      </span>

    </div>
  )
}

export default Day1
