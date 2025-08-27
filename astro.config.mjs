import { defineConfig, passthroughImageService } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeNext from 'starlight-theme-next'

import react from '@astrojs/react';

export default defineConfig({
    image: {
    service: passthroughImageService()
    },
    integrations: [starlight({
		customCss: ['./src/styles/selection.css'],
		plugins: [starlightThemeNext()],
		title: 'Vulkan for Beginners',
    social: [{ icon: 'github', label: 'Github', href: 'https://github/CyntexMore/vulkan-for-beginners' }],
    logo: {
        src: './src/assets/ns.png',
    },
    sidebar: [
      {
        label: 'Introduction',
        items: [
          { label: 'Introduction', slug: 'introduction' },
          { label: 'Versioning', slug: 'versioning' },
        ],
      },
      {
        label: 'Getting Started',
        items: [
          { label: 'Overview', slug: 'getting-started/overview' },
        ],
      },
    ],
  }), react()],
});
