import { NavBarContainer } from '@/app/navbar-container';
import { NavLinks } from '@/app/navbar-links';
import { NavTools } from '@/app/navbar-tools';
import { Link } from '@/components/ui/link';
import NextLink from 'next/link';
import { HStack } from 'styled-system/jsx';

export const NavBar = () => (
  <NavBarContainer>
    <HStack justify={'space-evenly'}>
      <Link color={'solid'} asChild>
        <NextLink href="/">XAVIER CARPENTIER</NextLink>
      </Link>
      <NavLinks />
      <NavTools />
    </HStack>
  </NavBarContainer>
);
