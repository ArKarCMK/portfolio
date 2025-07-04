import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: { value: '#e67e22' },
        secondary: { value: '#C4D1EC' },
        // secondary: { value: '#e67e22' },
        background: { value: '#121E41' },
      },
      fonts: {
        body: { value: 'system-ui, sans-serif' },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
