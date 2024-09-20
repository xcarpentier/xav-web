import { Text } from '@/components/ui/text';
import { FC } from 'react';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

type SlowProps = { text: string; ms?: number; id: number };

export const Slow: FC<SlowProps> = async (props) => {
  await sleep(props.ms ?? 1000);
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${props.id}`
  );
  const response: { title: string } = await data.json();

  return (
    <Text>
      {props.text} - id={props.id} - {response.title}
    </Text>
  );
};
