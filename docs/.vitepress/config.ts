import { HeadConfig, defineConfig } from 'vitepress'

export default defineConfig({
  title: ' ',
  description: 'Portfolio site of Đinh Khoa - Front-end Developer',
  themeConfig: {
    outline: false,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dinhdkhoa' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/dinhkhoa/' }
    ],
    nav: [
      { text: 'About', link: '/' },
      { text: 'Experience', link: '/experience' },
      { text: 'Portfolio', link: '/portfolio' }
    ],
    footer: {
      message: 'Thank you for visiting.'
    }
  },

  head: [['link', { rel: 'icon', href: './favicon.ico' }]],
  appearance: 'dark',
  transformHead: ({ pageData }) => {
    const head: HeadConfig[] = []

    head.push(['meta', { property: 'og:title', content: pageData.frontmatter.title }])
    head.push([
      'meta',
      {
        property: 'og:description',
        content:
          'Đinh Khoa là một Front End Developer tại Ottâ. Anh ấy là một 👨‍💻 developer, ✒️ blogger và 👨‍🎓 mentor dạy lập trình website'
      }
    ])
    head.push(['meta', { property: 'og:url', content: 'dinhkhoa.dev' }])
    head.push(['meta', { property: 'og:type', content: 'profile' }])
    head.push(['meta', { property: 'og:image', content: './meta-image.png' }])

    return head
  }
})
