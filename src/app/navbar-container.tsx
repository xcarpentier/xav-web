'use client';

import { useWindowScroll } from '@uidotdev/usehooks';
import { BoxProps, Container, Flex } from 'styled-system/jsx';

const SCROLL_HEIGHT_LIMIT = 32;

export const NavBarContainer = (props: BoxProps) => {
  const [{ y }] = useWindowScroll();

  const isScrolled = y && y > SCROLL_HEIGHT_LIMIT;
  const showHeaderPlain = isScrolled;
  return (
    <Flex
      alignItems="center"
      position="fixed"
      top="0"
      width="full"
      backgroundColor={showHeaderPlain ? 'blueprint' : 'transparent'}
      zIndex="sticky"
      borderBottomWidth={showHeaderPlain ? '1' : 'none'}
      borderColor={'blueprintLine1'}
      display={{ base: 'none', md: 'flex' }}
    >
      <Container w={'full'} py="2.5" {...props} />
    </Flex>
  );
};
