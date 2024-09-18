import { Text } from '@/components/ui/text';
import { FC } from 'react';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

type SlowProps = { text: string; ms?: number };

export const Slow: FC<SlowProps> = async (props) => {
  await sleep(props.ms ?? 1000);

  return <Text>{props.text}</Text>;
};
