import { Heading } from '@/components/ui/heading';
import { VStack } from 'styled-system/jsx';

export default async function Projets() {
  return (
    <VStack mb={'5'} pb={'5'} maxW={{ base: 'lg', md: 'xl' }} mt={'16'}>
      <Heading
        as="h1"
        fontSize={{ base: 'xl', md: '4xl' }}
        h={'32'}
        textAlign={'center'}
      >
        {'Contact me'}
      </Heading>
    </VStack>
  );
}
