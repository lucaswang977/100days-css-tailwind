// https://100dayscss.com/days/2/

import { cn } from '@helper/utils';
import * as React from 'react';

const cssVariables = {
  '--line-height': '8px',
  '--line-width': '80px',
  '--line-space': '14px',
  '--icon-height': 'calc(3*var(--line-height)+2*var(--line-space))',
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

@keyframes line1-exit {
  100% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
  50% {
    transform: translate3d(0, calc(var(--line-height) + var(--line-space)), 0) rotate(0);
  }
  0% {
    transform: translate3d(0, calc(var(--line-height) + var(--line-space)), 0) rotate(45deg);
  }
}


@keyframes line2-exit {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes line3-exit {
  0% {
    transform: translate3d(0, calc(0px - var(--line-height) - var(--line-space)), 0) rotate(135deg);
  }
  50% {
    transform: translate3d(0, calc(0px - var(--line-height) - var(--line-space)), 0) rotate(0);
  }
  100% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
}
`;

const Day3 = () => {
  return (
    <div
      style={cssVariables as React.CSSProperties}
      className={cn(
        'flex items-center justify-center',
        'h-[400px] w-[400px]',
        'rounded-sm',
        'bg-[#272C34]',
        'shadow-[1px_2px_10px_0px_rgba(0,0,0,0.3)]',
      )}
    ></div>
  );
};

export default Day3;
