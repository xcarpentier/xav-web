import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from 'lucide-react';

import { Heading } from '@/components/ui/heading';
import { Link } from '@/components/ui/link';
import { Text } from '@/components/ui/text';
import NextLink from 'next/link';
import { Flex, HStack, VStack } from 'styled-system/jsx';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function Home() {
  await sleep(2000);

  return (
    <Flex flexDir={'column'} alignItems={'center'}>
      <HStack
        h={16}
        p={3}
        borderBottomWidth={1}
        borderBottomColor={'blue.600'}
        w="full"
        display={{ base: 'none', md: 'flex' }}
      >
        <Link asChild>
          <NextLink href="/">XAVIER CARPENTIER</NextLink>
        </Link>
        <Link asChild>
          <NextLink href="/">Home</NextLink>
        </Link>
        <Link asChild>
          <NextLink href="/">Project</NextLink>
        </Link>
        <Link asChild>
          <NextLink href="/">Expertise</NextLink>
        </Link>
        <Button>
          <NextLink href="/">Contact</NextLink>
          <ArrowRightIcon />
        </Button>
      </HStack>
      <VStack mb={5} pb={5} maxW={{ base: 'xl', md: '2xl' }} pt={5}>
        <Heading
          as="h1"
          fontSize={{ base: 'xl', md: '2xl' }}
          h={20}
          textAlign={'center'}
        >
          Need to quickly develop a high-end mobile app?
        </Heading>
        <Text textAlign={'center'}>
          Benefit from my expertise and selection of solutions to equip yourself
          with a native iOS and Android application - faster than traditional
          mobile development. All this with great quality, drawing on my 10
          years of experience.
        </Text>
        <Button>
          <NextLink href="/">Contact</NextLink>
          <ArrowRightIcon />
        </Button>
      </VStack>
    </Flex>
  );
}
