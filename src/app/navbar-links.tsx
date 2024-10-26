'use client';

import { Link } from '@/components/ui/link';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';
import { HStack } from 'styled-system/jsx';

export const NavLinks: FC = () => {
  const pathname = usePathname();

  return (
    <HStack w={'md'} justify={'space-around'}>
      <Link data-active={pathname === '/' || undefined} asChild>
        <NextLink href="/">Home</NextLink>
      </Link>
      <Link
        data-active={pathname === '/mobile-development-projects' || undefined}
        asChild
      >
        <NextLink href="/mobile-development-projects">Project</NextLink>
      </Link>
      <Link data-active={pathname === '/expertise' || undefined} asChild>
        <NextLink href="/expertise">Expertise</NextLink>
      </Link>
    </HStack>
  );
};
