// https://100dayscss.com/days/3/

import { cn } from "@/helper/utils"

const dangerouslyStyles = `
@keyframes sun-goes-down {
  0% {
		background: #F57209;
    transform: rotate(-70deg);
  }
	
	30% {
		background: #FFEF00;
		transform: rotate(-28deg);
	}
	
	70% {
		background: #FFEF00;
	}

  100% {
		background: #F57209;
    transform: rotate(70deg);
  }
}

@keyframes sky-turns-black {
  0% {
    background: #272C34;
  }
	
	30% {
		background: #7DDFFC;
	}
	
	70% {
		background: #7DDFFC;
	}

  100% {
    background: #272C34;
  }
}

@keyframes pyramide-shading {
  0% {
    background: #272C34;
  }
	
	30% {
		background: #F4F4F4;
	}
	
	70% {
		background: #DDDADA;
	}

  100% {
    background: #272C34;
  }
}

@keyframes shadow-on-the-floor {
  0% {
		transform: scaleY(0);
	  clip-path: polygon(115px 0%, 231px 0%, 100% 100%);
  }
	
	30% {
		transform: scaleY(1);
	  clip-path: polygon(115px 0%, 231px 0%, 80% 100%);
	}
	
	55% {
		transform: scaleY(.4);
	}

	75% {
		transform: scaleY(1);
	}

  100% {
		transform: scaleY(0);
	  clip-path: polygon(115px 0%, 231px 0%, 0% 100%);
  }
}

@keyframes fading-sand {
  0% {
    background: #272C34;
  }
	
	30% {
		background: #F0DE75;
	}
	
	70% {
		background: #F0DE75;
	}

  100% {
    background: #272C34;
  }
}
`

const Day3 = () => {
  return (
    <div
      className={cn(
        "flex items-center justify-center",
        "h-[400px] w-[400px]",
        "rounded-sm",
        "bg-[#272C34]",
        "shadow-[1px_2px_10px_0px_rgba(0,0,0,0.3)]",
      )}
    >
      <style dangerouslySetInnerHTML={{ __html: dangerouslyStyles }} />
      <div
        id="circle"
        className={cn(
          "relative",
          "h-[180px] w-[180px]",
          "rounded-full",
          "bg-[#272C34]",
          "overflow-hidden",
        )}
      >
        <div
          id="sky"
          className={cn(
            "absolute z-0",
            "left-0 right-0 top-0",
            "h-[124px]",
            "bg-[#7DDFFC]",
            "animate-[sky-turns-black_4s_cubic-bezier(.4,0,.49,1)_infinite]",
          )}
        />
        <div
          id="sun"
          className={cn(
            "absolute z-10",
            "left-[73px] top-[7px]",
            "h-[34px] w-[34px]",
            "rounded-full",
            "bg-[#FFEF00]",
            "origin-[50%_400%]",
            "animate-[sun-goes-down_4s_cubic-bezier(.4,0,.49,1)_infinite]",
          )}
        />
        <div
          id="side-left"
          style={{
            clipPath: "polygon(0% 100%, 100% 100%, 50% 0%)",
          }}
          className={cn(
            "absolute",
            "left-[35px] top-[67px]",
            "h-[57px] w-[116px]",
            "bg-[#F4F4F4]",
            "animate-[pyramide-shading_4s_cubic-bezier(.4,0,.49,1)_infinite]",
          )}
        />
        <div
          id="side-right"
          style={{
            clipPath: "polygon(30% 100%, 100% 100%, 0% 0%)",
          }}
          className={cn(
            "absolute",
            "left-[93px] top-[67px]",
            "h-[57px] w-[58px]",
            "bg-[#DDDADA]",
            "animate-[pyramide-shading_4s_cubic-bezier(.4,0,.49,1)_infinite_reverse]",
          )}
        />
        <div
          id="shadow"
          style={{
            clipPath: "polygon(115px 0%, 231px 0%, 80% 100%)",
          }}
          className={cn(
            "absolute z-20",
            "left-[-80px] top-[124px]",
            "h-[30px] w-[360px]",
            "bg-[rgba(0,0,0,0.2)]",
            "origin-[50%_0%]",
            "animate-[shadow-on-the-floor_4s_cubic-bezier(.4,0,.49,1)_infinite]",
          )}
        />
        <div
          id="ground"
          className={cn(
            "absolute z-10",
            "bottom-0 left-0 right-0",
            "h-[56px]",
            "bg-[#F0DE75]",
            "animate-[fading-sand_4s_cubic-bezier(.4,0,.49,1)_infinite]",
          )}
        />
      </div>
    </div>
  )
}

export default Day3
