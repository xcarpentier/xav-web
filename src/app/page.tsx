import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Send } from 'lucide-react';
import NextLink from 'next/link';
import { VStack } from 'styled-system/jsx';

export default async function Home() {
  return (
    <VStack mb={'5'} pb={'5'} maxW={{ base: 'lg', md: 'xl' }} mt={'16'}>
      <Heading
        as="h1"
        fontSize={{ base: '2xl', md: '4xl' }}
        h={'32'}
        textAlign={'center'}
      >
        Need to quickly develop a high-end mobile app?
      </Heading>
      <Text textAlign={'center'}>
        Benefit from my expertise and selection of solutions to equip yourself
        with a native iOS and Android application - faster than traditional
        mobile development. All this with great quality, drawing on my 10 years
        of experience.
      </Text>
      <Button variant={'subtle'}>
        <NextLink href="/">Contact</NextLink>
        <Send />
      </Button>
    </VStack>
  );
}
