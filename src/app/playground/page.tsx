import { Slow } from '@/app/playground/Slow';
import { Spinner } from '@/components/ui/spinner';
import { Text } from '@/components/ui/text';
import { Suspense } from 'react';
import { Box, Flex } from 'styled-system/jsx';
import { Breakpoint } from './Breakpoint';

const Loader = () => <Spinner />;

const randomId = (max: number) => Math.floor(Math.random() * max);

const Mobile = () => (
  <Flex flexDirection={'column'} alignItems={'center'}>
    {Array.from({ length: 20 }).map((_, index) => (
      <Box key={index}>
        <Suspense fallback={<Loader />}>
          <Slow text={`📱 Mobile ${index}...`} id={randomId(200)} />
        </Suspense>
      </Box>
    ))}
  </Flex>
);

const Desktop = () => (
  <Flex flexDirection={'column'} alignItems={'center'}>
    {Array.from({ length: 20 }).map((_, index) => (
      <Box key={index}>
        <Suspense fallback={<Loader />}>
          <Slow text={`🖥️ Desktop ${index}...`} id={randomId(200)} />
        </Suspense>
      </Box>
    ))}
  </Flex>
);

export default function Playground() {
  return (
    <Flex
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
      maxW={'full'}
      h="100vh"
    >
      <Box mb={10}>
        <Text textAlign={'center'} fontWeight={'bold'}>
          Playground to show how to managed the desktop and mobile
        </Text>
        <Text textAlign={'center'} fontWeight={'bold'}>
          in one place of code, with RSC, with optimization and reload on
          resize...
        </Text>
      </Box>
      <Breakpoint
        breakpoint={'md'}
        mobileChildren={<Mobile />}
        desktopChildren={<Desktop />}
      />
    </Flex>
  );
}
