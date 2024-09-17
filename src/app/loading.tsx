import { Skeleton } from '@/components/ui/skeleton';
import { HStack, Stack } from 'styled-system/jsx';

export default function Loading() {
  return (
    <HStack width="full" gap="4">
      <Stack gap="5" width="50%">
        <Skeleton h="7" />
        <Skeleton h="7" />
        <Skeleton h="7" />
      </Stack>
    </HStack>
  );
}
