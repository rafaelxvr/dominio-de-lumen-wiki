import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Domínio de Lúmen',
  tagline: 'O mundo não morreu. Apenas parou de respirar.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'wiki',
          exclude: ['**/superpowers/**'],
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'Diário de Campanha',
          blogDescription: 'Registros das sessões no Domínio de Lúmen',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Domínio de Lúmen',
      items: [
        {
          to: '/wiki/o-mundo/dominio-de-lumen',
          label: 'O Mundo',
          position: 'left',
        },
        {
          to: '/wiki/locais/encruzilhada',
          label: 'Locais',
          position: 'left',
        },
        {
          to: '/wiki/faccoes/a-marcha',
          label: 'Facções & NPCs',
          position: 'left',
        },
        {
          to: '/blog',
          label: 'Diário de Campanha',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: 'Campanha Domínio de Lúmen — Sistema Daggerheart',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
