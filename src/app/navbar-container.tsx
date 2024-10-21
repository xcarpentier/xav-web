'use client';

import { useWindowScroll } from '@uidotdev/usehooks';
import { BoxProps, Container, Flex } from 'styled-system/jsx';

const SCROLL_HEIGHT_LIMIT = 32;

export const NavBarContainer = (props: BoxProps) => {
  const [{ y }] = useWindowScroll();

  const isScrolled = y && y > SCROLL_HEIGHT_LIMIT;
  const showBorder = isScrolled;
  return (
    <Flex
      alignItems="center"
      position="fixed"
      top="0"
      width="full"
      background="bleuprint"
      zIndex="sticky"
      borderBottomWidth={showBorder ? '1' : 'none'}
      borderColor={'blue.default'}
      display={{ base: 'none', md: 'flex' }}
    >
      <Container w={'full'} py="2.5" {...props} />
    </Flex>
  );
};
