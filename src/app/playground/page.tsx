import { Slow } from '@/app/playground/Slow';
import { Spinner } from '@/components/ui/spinner';
import { Text } from '@/components/ui/text';
import { Suspense } from 'react';
import { Box, Flex } from 'styled-system/jsx';
import { Breakpoint } from './Breakpoint';

const Loader = () => <Spinner />;

const Mobile = () => (
  <Flex flexDirection={'column'} alignItems={'center'}>
    <Box>
      <Suspense fallback={<Loader />}>
        <Slow text="📱 Mobile 1..." />
      </Suspense>
    </Box>
    <Box>
      <Suspense fallback={<Loader />}>
        <Slow text="2..." ms={2000} />
      </Suspense>
    </Box>
    <Box>
      <Suspense fallback={<Loader />}>
        <Slow text="💥" ms={3000} />
      </Suspense>
    </Box>
  </Flex>
);

const Desktop = () => (
  <Flex flexDirection={'column'} alignItems={'center'}>
    <Box>
      <Suspense fallback={<Loader />}>
        <Slow text="🖥️ Desktop 1..." />
      </Suspense>
    </Box>
    <Box>
      <Suspense fallback={<Loader />}>
        <Slow text="2..." ms={2000} />
      </Suspense>
    </Box>
    <Box>
      <Suspense fallback={<Loader />}>
        <Slow text="🙌" ms={3000} />
      </Suspense>
    </Box>
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
      <Box>
        <Text>Playground</Text>
      </Box>
      <Breakpoint
        breakpoint={'md'}
        mobileChildren={<Mobile />}
        desktopChildren={<Desktop />}
      />
    </Flex>
  );
}
