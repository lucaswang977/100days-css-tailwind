// https://100dayscss.com/days/2/

import { cn } from "@helper/utils";
import * as React from "react";

const cssVariables = {
  "--line-height": "8px",
  "--line-width": "80px",
  "--line-space": "14px",
  "--icon-height": "calc(3*var(--line-height)+2*var(--line-space))",
};

const keyframes = `
@keyframes line1-enter {
  0% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
  50% {
    transform: translate3d(0, calc(var(--line-height) + var(--line-space)), 0) rotate(0);
  }

  100% {
    transform: translate3d(0, calc(var(--line-height) + var(--line-space)), 0) rotate(45deg);
  }
}

@keyframes line2-enter {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
}

@keyframes line3-enter {
  0% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
  50% {
    transform: translate3d(0, calc(0px - var(--line-height) - var(--line-space)), 0) rotate(0);
  }

  100% {
    transform: translate3d(0, calc(0px - var(--line-height) - var(--line-space)), 0) rotate(135deg);
  }
}
`;

const Line = ({
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={cn(
        className,
        "h-[var(--line-height)] w-[var(--line-width)]",
        "bg-white",
        "rounded-lg",
        "shadow-[0px_2px_10px_0px_rgba(0,0,0,0.3)]",
        "mb-[var(--line-space)]",
      )}
      {...rest}
    />
  );
};

const Day2 = () => {
  return (
    <div
      style={cssVariables as React.CSSProperties}
      className={cn(
        "flex items-center justify-center",
        "h-[400px] w-[400px]",
        "rounded-sm",
        "bg-[#3FAF82]",
        "shadow-[1px_2px_10px_0px_rgba(0,0,0,0.3)]",
      )}
    >
      <div className="flex h-[var(--icon-height)] cursor-pointer flex-col">
        <style> {keyframes} </style>
        <Line className="animate-[line1-enter_1s_ease-in-out_infinite]" />
        <Line className="animate-[line2-enter_1s_ease-in-out_infinite]" />
        <Line className="animate-[line3-enter_1s_ease-in-out_infinite]" />
      </div>
    </div>
  );
};

export default Day2;
