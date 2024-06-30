import { OramaPlugin } from '@orama/plugin-vitepress';

var options = {
  previewLength: 62,
  buttonLabel: "Pesquisar",
  placeholder: "Pesquisar",
  allow: [],
  ignore: [],
};

export default {
  head: [
    [
      'link', 
      { 
        rel: 'icon', media: '(prefers-color-scheme: light)', href: '/favicon.ico'
      }
    ],
    [
      'link', 
      { 
        rel: 'icon', media: '(prefers-color-scheme: dark)', href: '/favicon-dark.ico'
      }
    ],
  ],
  vite: {
    plugins: [OramaPlugin()],
  },
  lang: "pt-BR",
  title: "Empreendedorismo",
  description: "A Comunidade Empreendedorismo é voltada para discussão de temas relacionados a empreendedorismo, startups, negócios, finanças e outras maneiras de ganhar dinheiro.",
  ignoreDeadLinks: true,
  cleanUrls: true,
  lastUpdated: true,
  externalLinkIcon: true,
//   outDir:"../public",
  base:"/megathread/",
  themeConfig: {
    lastUpdatedText: 'Última atualização em',
    logo: "/logo.png",
    siteTitle: "Empreendedorismo",
    // Navbar Link
    nav: [
      { 
        text: "Guias", 
        link: "pages/guias" 
      },
      {
        text: "Sobre",
        link: "pages/sobre",
      },
      {
        text: "Regras",
        link: "pages/util/regras",
      },
    ],
    // Social Icons
    socialLinks: [
      { icon: "github", link: "https://github.com/r-empreendedorismo/megathread" },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve"><defs></defs><g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >	<circle cx="45" cy="45" r="45" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,69,0); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>	<path d="M 75.011 45 c -0.134 -3.624 -3.177 -6.454 -6.812 -6.331 c -1.611 0.056 -3.143 0.716 -4.306 1.823 c -5.123 -3.49 -11.141 -5.403 -17.327 -5.537 l 2.919 -14.038 l 9.631 2.025 c 0.268 2.472 2.483 4.262 4.955 3.993 c 2.472 -0.268 4.262 -2.483 3.993 -4.955 s -2.483 -4.262 -4.955 -3.993 c -1.421 0.145 -2.696 0.973 -3.4 2.204 L 48.68 17.987 c -0.749 -0.168 -1.499 0.302 -1.667 1.063 c 0 0.011 0 0.011 0 0.022 l -3.322 15.615 c -6.264 0.101 -12.36 2.025 -17.55 5.537 c -2.64 -2.483 -6.801 -2.36 -9.284 0.291 c -2.483 2.64 -2.36 6.801 0.291 9.284 c 0.515 0.481 1.107 0.895 1.767 1.186 c -0.045 0.66 -0.045 1.32 0 1.98 c 0 10.078 11.745 18.277 26.23 18.277 c 14.485 0 26.23 -8.188 26.23 -18.277 c 0.045 -0.66 0.045 -1.32 0 -1.98 C 73.635 49.855 75.056 47.528 75.011 45 z M 30.011 49.508 c 0 -2.483 2.025 -4.508 4.508 -4.508 c 2.483 0 4.508 2.025 4.508 4.508 s -2.025 4.508 -4.508 4.508 C 32.025 53.993 30.011 51.991 30.011 49.508 z M 56.152 62.058 v -0.179 c -3.199 2.405 -7.114 3.635 -11.119 3.468 c -4.005 0.168 -7.919 -1.063 -11.119 -3.468 c -0.425 -0.515 -0.347 -1.286 0.168 -1.711 c 0.447 -0.369 1.085 -0.369 1.544 0 c 2.707 1.98 6.007 2.987 9.362 2.83 c 3.356 0.179 6.667 -0.783 9.407 -2.74 c 0.492 -0.481 1.297 -0.47 1.779 0.022 C 56.655 60.772 56.644 61.577 56.152 62.058 z M 55.537 54.34 c -0.078 0 -0.145 0 -0.224 0 l 0.034 -0.168 c -2.483 0 -4.508 -2.025 -4.508 -4.508 s 2.025 -4.508 4.508 -4.508 s 4.508 2.025 4.508 4.508 C 59.955 52.148 58.02 54.239 55.537 54.34 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /></g></svg>'
        },
        ariaLabel: "Reddit",
        link: "https://www.reddit.com/r/empreendedorismo/",
      },
    ],
    // Sidebar
    sidebar: [
      {
        text: "Tópicos",
        collapsible: true,
        items: [
          { text: "🌐 Sites de Uso Geral", link: "pages/sites-geral" },
          { text: "📚 Livros", link: "pages/livros" },
          { text: "📺 Canais", link: "pages/canais" },
          { text: "🎓 Educacional", link: "pages/educacional" },
		  { text: "📢 Publicações úteis", link: "pages/publicacoes"},
          { text: "🎯 AMAs", link: "pages/amas" },
        ],
      },
      {
        text: "📑 Recomendado",
        collapsible: true,
        items: [
          { text: "❗ Sobre", link: "pages/sobre" },
          { text: "📖 Dicionário", link: "pages/util/dicionario" },
          { text: "❓ Glossário", link: "pages/util/glossario" },
          { text: "➡️ Guias", link: "pages/guias" },
        ],
      },
    ],
    editLink: {
      pattern:
        "https://github.com/r-empreendedorismo/megathread/edit/main/docs/:path",
      text: "Edite essa página no GitHub",
    },
    docFooter: {
      prev: false,
      next: false,
    },
    footer: {
      message: "Made in Brazil",
    },
    markdown: {
      attrs: false,
      theme: "material-palenight",
      lineNumbers: true,
    },
    // Mobile Config
    returnToTopLabel: "Voltar para o topo",
    sidebarMenuLabel: "Menu",
  },
};
