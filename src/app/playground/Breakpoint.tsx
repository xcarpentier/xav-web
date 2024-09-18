'use client';

import { FC, ReactNode } from 'react';
import { Box } from 'styled-system/jsx';
import { BreakpointToken, token } from 'styled-system/tokens';

import * as React from 'react';

const useIsFirstRender = (): boolean => {
  const isFirst = React.useRef(true);

  if (isFirst.current) {
    isFirst.current = false;

    return true;
  } else {
    return false;
  }
};

export const SkipRenderOnClient: React.FC<{
  children: React.ReactNode;
  shouldRenderOnClient: () => boolean;
}> = ({ children, shouldRenderOnClient }) => {
  const id = React.useId();
  const isClient = typeof window !== 'undefined';
  const isFirstRender = useIsFirstRender();

  if (isClient && isFirstRender && shouldRenderOnClient() === false) {
    const el = document.getElementById(id);
    if (el !== null) {
      el.innerHTML = '';
    }
  }

  const shouldRender = isClient ? shouldRenderOnClient() : true;

  return <div id={id}>{shouldRender && children}</div>;
};

const extractFromBreakpointToken = (breakpoint: BreakpointToken) => {
  return Number(token(`breakpoints.${breakpoint}`).replace('px', ''));
};

interface BreakpointProps {
  breakpoint?: BreakpointToken;
  mobileChildren: ReactNode;
  desktopChildren: ReactNode;
}

export const Breakpoint: FC<BreakpointProps> = ({
  breakpoint = 'md',
  mobileChildren,
  desktopChildren,
}) => {
  return (
    <>
      <SkipRenderOnClient
        shouldRenderOnClient={() =>
          window.innerWidth <= extractFromBreakpointToken(breakpoint)
        }
      >
        <Box display={'block'} hideFrom={breakpoint}>
          {mobileChildren}
        </Box>
      </SkipRenderOnClient>
      <SkipRenderOnClient
        shouldRenderOnClient={() =>
          window.innerWidth > extractFromBreakpointToken(breakpoint)
        }
      >
        <Box display={'flex'} hideBelow={breakpoint}>
          {desktopChildren}
        </Box>
      </SkipRenderOnClient>
    </>
  );
};
