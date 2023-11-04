// https://100dayscss.com/days/4/

import { cn } from "@/helper/utils"

const dangerouslyStyles = `
@keyframes jump-jump-1 {
	0%, 70% {
		box-shadow: 2px 2px 3px 2px rgba(0,0,0,0.2);
		transform: scale(0);
	}

	100% {
		box-shadow: 10px 10px 15px 0 rgba(0,0,0,0.3);
		transform: scale(1);
	}
}

@keyframes jump-jump-2 {
	0%, 40% {
		box-shadow: 2px 2px 3px 2px rgba(0,0,0,0.2);
		transform: scale(0);
	}

	100% {
		box-shadow: 10px 10px 15px 0 rgba(0,0,0,0.3);
		transform: scale(1);
	}
}

@keyframes jump-jump-3 {
	0%, 10% {
		box-shadow: 2px 2px 3px 2px rgba(0,0,0,0.2);
		transform: scale(0);
	}

	100% {
		box-shadow: 10px 10px 15px 0 rgba(0,0,0,0.3);
		transform: scale(1);
	}
`

const Dot = ({ className, ...rest }: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={cn(className, "absolute", "bg-white", "rounded-full")}
      {...rest}
    />
  )
}

const Day4 = () => {
  return (
    <div
      className={cn(
        "flex items-center justify-center",
        "h-[400px] w-[400px]",
        "rounded-sm",
        "bg-[#E56262]",
        "shadow-[1px_2px_10px_0px_rgba(0,0,0,0.3)]",
      )}
    >
      <style dangerouslySetInnerHTML={{ __html: dangerouslyStyles }} />
      <Dot
        id="dot1"
        className={cn(
          "h-[30px] w-[30px]",
          "z-30",
          "animate-[jump-jump-1_2s_cubic-bezier(.21,.98,.6,.99)_infinite_alternate]",
        )}
      />
      <Dot
        id="dot2"
        className={cn(
          "h-[60px] w-[60px]",
          "z-20",
          "animate-[jump-jump-2_2s_cubic-bezier(.21,.98,.6,.99)_infinite_alternate]",
        )}
      />
      <Dot
        id="dot3"
        className={cn(
          "h-[90px] w-[90px]",
          "z-10",
          "animate-[jump-jump-3_2s_cubic-bezier(.21,.98,.6,.99)_infinite_alternate]",
        )}
      />
    </div>
  )
}

export default Day4
