// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Building Defi Bots and Digital Businesses',
  tagline: 'Blockchain Developer and Project Builder',
  url: 'https://brendanwenzel.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/brendanwenzel/website/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/brendanwenzel/website/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Brendan Wenzel',
        logo: {
          alt: 'Brendan Wenzel Small Profile',
          src: 'img/profilelogo.png',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'About',
          // },
       //   {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/brendanwenzel',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn More',
            // items: [
            //   {
            //     label: 'Personal Life',
            //     to: '/docs/category/personal-life',
            //   },
            //   {
            //     label: "Growing Businesses",
            //     to: '/docs/category/growing-businesses',
            //   },
            //   {
            //     label: "Developer Journey",
            //     to: '/docs/category/developer-journey',
            //   }
            // ],
          },
          {
            title: 'Connect',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/brendanwenzel/',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/brendanwenzel',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/brendanwenzel',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Opensea',
                href: 'https://opensea.io/brendanwenzel',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/brendanwenzel',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Brendan Wenzel`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
