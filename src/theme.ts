import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: { value: '#e67e22' },
        secondary: { value: '#C4D1EC' },
        // secondary: { value: '#e67e22' },

        // rgba(196, 209, 236, 0.6)
        background: { value: '#121E41' },
        cardBackground: { value: '#182a5e' },
        primaryText: { value: '#000' },
        secondaryText: { value: '#C4D1EC' },
      },
      fonts: {
        body: { value: 'system-ui, sans-serif' },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
