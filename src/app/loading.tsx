import { Skeleton } from '@/components/ui/skeleton';
import { HStack, Stack } from 'styled-system/jsx';

export default function Loading() {
  return (
    <HStack maxW={{ base: 'lg', md: 'xl' }} gap="4">
      <Stack gap="3.5" width="full">
        <Skeleton h="4" />
        <Skeleton h="4" width="80%" />
        <Skeleton h="4" width="60%" />
      </Stack>
    </HStack>
  );
}
