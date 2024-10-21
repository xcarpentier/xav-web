import { IconButton } from '@/components/ui/icon-button';
import { SiGithub } from '@icons-pack/react-simple-icons';

export const GitHubLink = () => {
  return (
    <IconButton
      asChild
      variant="ghost"
      size={{ base: 'md', md: 'sm' }}
      css={{
        color: 'fg.default',
        _hover: { color: 'fg.default' },
        '& svg': {
          width: '5',
          height: '5',
        },
      }}
    >
      <a href="https://github.com/xcarpentier" target="_blank" rel="noreferrer">
        <SiGithub />
      </a>
    </IconButton>
  );
};
