// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mancii Platform',
  tagline: 'Todo lo que necesitas saber para usar la plataforma',
  favicon: 'img/Recurso-4.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.mancii.com', 
  baseUrl: '/',

  organizationName: 'mancii', // 👈 tu usuario de GitHub
  projectName: 'mi-documentacion', // 👈 nombre de tu repo en GitHub

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/', // 👈 la docs arranca desde la raíz
        },
        blog: false, // 👈 desactivamos el blog por ahora
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: ({
      image: 'img/Recurso3.svg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Mancii',
          src: 'img/Recurso3.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentación',
          },
          {
            href: 'https://platform.mancii.com/', // 👈 link a tu plataforma
            label: 'Ir a la plataforma',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentación',
            items: [
              {
                label: 'Introducción',
                to: '/',
              },
            ],
          },
          {
            title: 'Soporte',
            items: [
              {
                label: 'Contacto',
                href: 'https://mancii.com/contacto', // 👈 ajusta el link
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mancii. Todos los derechos reservados.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;