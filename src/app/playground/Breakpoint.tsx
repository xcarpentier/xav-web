'use client';

import { FC, ReactNode, useEffect, useId, useRef } from 'react';
import { Box } from 'styled-system/jsx';
import { BreakpointToken, token } from 'styled-system/tokens';

const useIsFirstRender = (): boolean => {
  const isFirst = useRef(true);

  if (isFirst.current) {
    isFirst.current = false;

    return true;
  } else {
    return false;
  }
};

const SkipRenderOnClient: React.FC<{
  children: React.ReactNode;
  shouldRenderOnClient: () => boolean;
}> = ({ children, shouldRenderOnClient }) => {
  const id = useId();
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

const extractFromBreakpointToken = (breakpoint: BreakpointToken) =>
  Number(token(`breakpoints.${breakpoint}`).replace('px', ''));

const refreshOnResizeCallback =
  ({
    initialInnerWidth,
    breakpoint,
    isClient,
  }: {
    initialInnerWidth: number;
    breakpoint: number;
    isClient: boolean;
  }) =>
  () => {
    const actualInnerWidth = isClient ? window.innerWidth : 0;
    const shouldReload =
      isClient &&
      ((initialInnerWidth < actualInnerWidth &&
        breakpoint < actualInnerWidth) ||
        (initialInnerWidth > actualInnerWidth &&
          breakpoint > actualInnerWidth));

    if (shouldReload) {
      window.location.reload();
    }
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
  const isClient = typeof window !== 'undefined';
  const initialInnerWidth = useRef(isClient ? window.innerWidth : 0);
  const breakpointNumber = extractFromBreakpointToken(breakpoint);

  const refreshOnResize = refreshOnResizeCallback({
    initialInnerWidth: initialInnerWidth.current,
    breakpoint: breakpointNumber,
    isClient,
  });

  useEffect(() => {
    if (isClient) {
      window.addEventListener('resize', refreshOnResize);

      return () => {
        window.removeEventListener('resize', refreshOnResize);
      };
    }
  }, []);

  const shouldRenderOnClientMobile = () =>
    window.innerWidth <= breakpointNumber;

  const shouldRenderOnClientDesktop = () =>
    window.innerWidth > breakpointNumber;

  return (
    <>
      <SkipRenderOnClient shouldRenderOnClient={shouldRenderOnClientMobile}>
        <Box display={'block'} hideFrom={breakpoint}>
          {mobileChildren}
        </Box>
      </SkipRenderOnClient>
      <SkipRenderOnClient shouldRenderOnClient={shouldRenderOnClientDesktop}>
        <Box display={'block'} hideBelow={breakpoint}>
          {desktopChildren}
        </Box>
      </SkipRenderOnClient>
    </>
  );
};
