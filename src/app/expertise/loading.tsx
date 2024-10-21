import { Skeleton } from '@/components/ui/skeleton';
import { Stack } from 'styled-system/jsx';

export default function Loading() {
  return (
    <Stack gap="4" width={{ base: 'lg', md: 'xl' }} mt={'16'}>
      <Skeleton h="5" />
      <Skeleton h="5" />
      <Skeleton h="5" />
      <Skeleton h="5" />
    </Stack>
  );
}
