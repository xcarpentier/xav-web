'use client';

import { ColorModeButton } from '@/app/color-mode-button';
import { GitHubLink } from '@/app/github-link';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import NextLink from 'next/link';
import { FC } from 'react';
import { HStack } from 'styled-system/jsx';

export const NavTools: FC = () => {
  return (
    <HStack>
      <ColorModeButton />
      <GitHubLink />
      <Button>
        <NextLink href="/contact">Contact</NextLink>
        <Send />
      </Button>
    </HStack>
  );
};
