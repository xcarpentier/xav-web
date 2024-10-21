import { defineConfig } from '@pandacss/dev';
import { createPreset } from '@park-ui/panda-preset';

export default defineConfig({
  preflight: true,
  presets: [
    '@pandacss/preset-base',
    createPreset({
      accentColor: 'blue',
      grayColor: 'sage',
      borderRadius: 'lg',
    }),
  ],
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  outdir: 'styled-system',
  jsxFramework: 'react',
  globalCss: {
    body: {
      backgroundColor: 'blueprint',
      backgroundImage:
        'linear-gradient(rgba(255,255,255,0.1) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,0.1) 2px, transparent 1px),linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
      backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
      backgroundPosition: '-2px -2px, -2px -2px, -1px -1px, -1px -1px',
    },
  },
  theme: {
    extend: {
      tokens: {
        assets: {
          bullet: {
            value: {
              type: 'svg',
              value:
                '<svg width="7" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M3 0h1v7H3zM0 3h7v1H0z" fill="deepskyblue" /></svg>',
            },
          },
        },
      },
      semanticTokens: {
        colors: {
          blueprint: {
            value: {
              _light: '#0066ccbb',
              _dark: '{colors.blue.a7}',
            },
          },
        },
      },
      recipes: {
        link: {
          base: {
            _active: {
              textDecorationColor: 'colorPalette.default',
            },
          },
          variants: {
            color: {
              solid: {
                _hover: {
                  color: 'colorPalette.fg',
                  backgroundColor: 'colorPalette.emphasized',
                  textDecorationColor: 'transparent',
                  transition: 'ease-in-out 0.4s all',
                },
              },
            },
          },
        },
      },
    },
  },
});
