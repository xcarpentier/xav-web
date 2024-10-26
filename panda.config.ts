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
      backgroundColor: 'blueprintAlpha',
      backgroundImage:
        'var(--gradients-line-horizontal), var(--gradients-line-vertical), var(--gradients-dot-horizontal), var(--gradients-dot-vertical)',
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
        gradients: {
          lineHorizontal: {
            value:
              'linear-gradient(var(--colors-blueprint-line1) 2px, transparent 2px)',
          },
          lineVertical: {
            value:
              'linear-gradient(90deg, var(--colors-blueprint-line1) 2px, transparent 1px)',
          },
          dotHorizontal: {
            value:
              'linear-gradient(var(--colors-blueprint-line2) 1px, transparent 1px)',
          },
          dotVertical: {
            value:
              'linear-gradient(90deg, var(--colors-blueprint-line2) 1px, transparent 1px)',
          },
        },
      },
      semanticTokens: {
        colors: {
          blueprintAlpha: {
            value: {
              _light: '{colors.red.light.2}',
              _dark: '#0066ccbb',
            },
          },
          blueprint: {
            value: {
              _light: '{colors.red.2}',
              _dark: '{colors.blue.7}',
            },
          },
          blueprintLine1: {
            value: {
              _light: '{colors.blue.a2}',
              _dark: 'rgba(255, 255, 255, 0.1)',
            },
          },
          blueprintLine2: {
            value: {
              _light: '{colors.blue.a1}',
              _dark: 'rgba(255, 255, 255, 0.05)',
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
